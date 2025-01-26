const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'src', 'posts');
const outputDir = path.join(__dirname, 'src');

const posts = fs.readdirSync(postsDir).map(filename => {
  const filePath = path.join(postsDir, filename);
  const content = fs.readFileSync(filePath, 'utf-8');
  return {
    filename,
    content
  };
});

fs.writeFileSync(path.join(outputDir, 'posts.json'), JSON.stringify(posts));
