const fs = require('fs');
const path = require('path');

const filesToCopy = ['index.html', 'styles.css', 'app.js', 'finclearing_logo.png'];
const distDir = path.join(__dirname, 'dist');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

filesToCopy.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(distDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} to dist/`);
  }
});
console.log('Static build directory created successfully.');
