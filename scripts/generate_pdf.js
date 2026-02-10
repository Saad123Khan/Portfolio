const fs = require('fs');
const path = require('path');

const outPath = path.join(__dirname, '../src/assets/MuneebkhanCV.pdf');

const lines = [
  'CONTACT',
  'Phone: 03138668469',
  'Email: muneebkhan.dev@example.com',
  'Address: Liqutabad 4 number House no H20/2', 
  '',
  'TECHNICAL SKILLS',
  'Frontend Development: HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, Bootstrap, TypeScript',
  'Backend Development: Node.js, Express.js, MongoDB, REST APIs, WebSockets, JWT, bcrypt, Supabase',
  'Version Control & Tools: Git, GitHub, VS Code, Postman, Figma, Axios, Redux, TanStack Query',
  '',
  'EXPERIENCE',
  'Frontend Developer',
  'Code Rivals - Jan 2025 - Jul 2025 (recent)',
  '',
  'Frontend Development with 7 months of experience in web development, specializing in building modern and responsive applications using the MERN stack. Skilled in creating user-friendly interfaces with React.js and Tailwind CSS, while ensuring robust backend functionality with Node.js and Express.js.',
  '',
  'EDUCATION',
  'Matriculation in Computer Science',
  'the abc School Academy | 2019 - 2022',
  '',
  'Intermediate in Pre-Engineering',
  'Govt. Degree Boys College | 2022 - 2024',
];

function buildPDF(lines) {
  const parts = [];

  // PDF header
  parts.push('%PDF-1.4\n%\u00E2\u00E3\u00CF\u00D3\n');

  // helper to create objects
  const objects = [];

  // 1: Catalog
  objects.push('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n');

  // 2: Pages
  objects.push('2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n');

  // 4: Font
  objects.push('4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n');

  // Build content stream (object 5)
  let content = 'BT\n/F1 12 Tf\n50 760 Td\n';
  for (let i = 0; i < lines.length; i++) {
    const text = lines[i].replace(/\\/g, '\\\\').replace( '');
    content += '(' + text.replace(/\(/g, '\\(').replace(/\)/g, '\\)') + ') Tj\n';
    if (i < lines.length - 1) content += '0 -18 Td\n';
  }
  content += 'ET\n';

  const contentBytes = Buffer.from(content, 'utf8');
  objects.push(`5 0 obj\n<< /Length ${contentBytes.length} >>\nstream\n${content}endstream\nendobj\n`);

  // 3: Page referencing content and font
  objects.push('3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>\nendobj\n');

  // assemble all objects and compute xref
  let offset = parts.join('').length;
  const objOffsets = [];
  const body = [];
  for (let i = 0; i < objects.length; i++) {
    objOffsets.push(offset);
    body.push(objects[i]);
    offset += Buffer.byteLength(objects[i], 'utf8');
  }

  const bodyStr = body.join('');
  const xrefOffset = Buffer.byteLength(parts.join('') + bodyStr, 'utf8');

  // xref
  let xref = 'xref\n0 ' + (objects.length + 1) + '\n';
  xref += '0000000000 65535 f \n';
  for (let off of objOffsets) {
    xref += String(off).padStart(10, '0') + ' 00000 n \n';
  }

  const trailer = `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  const pdf = parts.join('') + bodyStr + xref + trailer;
  return pdf;
}

const pdfData = buildPDF(lines);
fs.writeFileSync(outPath, pdfData, 'binary');
console.log('Wrote PDF to', outPath);
