const esbuild = require('esbuild');
const fs = require('fs');

async function build() {
  console.log('Empacotando com esbuild...');
  await esbuild.build({
    entryPoints: ['src/index.js'],
    bundle: true,
    outfile: 'dist/temp.js',
  });

  let header = fs.readFileSync('src/header.js', 'utf-8');
  
  const webrequestRe = new RegExp('// @webRequestItem (.+)\\\\n', 'g');
  const matches = [];
  let match;
  while ((match = webrequestRe.exec(header)) !== null) {
    matches.push(match[1]);
  }

  if (matches.length > 0) {
    const webrequests = `// @webRequest [${matches.join(',')}]\n`;
    let isFirst = true;
    header = header.replace(new RegExp('// @webRequestItem .+\\\\n', 'g'), () => {
      if (isFirst) {
        isFirst = false;
        return webrequests;
      }
      return '';
    });
  }
  
  const bundle = fs.readFileSync('dist/temp.js', 'utf-8');
  fs.unlinkSync('dist/temp.js');
  
  if (!fs.existsSync('dist')) fs.mkdirSync('dist');
  
  fs.writeFileSync('dist/burlesco.user.js', header + '\n' + bundle);
  console.log('Arquivo buildado salvo em: dist/burlesco.user.js');
}

build().catch(err => {
  console.error(err);
  process.exit(1);
});
