const fs = require('fs');
const path = require('path');

const structure = require('./structure.json');

for (const folder in structure) {
  const files = structure[folder];

  const dirPath = folder === 'root' ? '.' : path.join(__dirname, folder);
  if (folder !== 'root' && !fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log(`📁 Created folder: ${folder}`);
  }

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    fs.writeFileSync(filePath, '', 'utf8');
    console.log(`📄 Created file: ${folder === 'root' ? '' : folder + '/'}${file}`);
  });
}
