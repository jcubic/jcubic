const input = `
[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/jcubic)  [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dev-dot-to.svg' alt='dev' height='40'>](https://dev.to/jcubic)  [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg' alt='linkedin' height='40'>](https://www.linkedin.com/in/jakubjankiewicz/)  [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg' alt='facebook' height='40'>](https://www.facebook.com/jcubic)  [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg' alt='instagram' height='40'>](https://www.instagram.com/jcubic/)  [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg' alt='twitter' height='40'>](https://twitter.com/jcubic)  [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codepen.svg' alt='codepen' height='40'>](https://codepen.io/jcubic)  [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/stackoverflow.svg' alt='stackoverflow' height='40'>](https://stackoverflow.com/users/387194/jcubic)  [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/reddit.svg' alt='Reddit' height='40'>](https://www.reddit.com/user/jcubic)  [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/icloud.svg' alt='website' height='40'>](https://jakub.jankiewicz.org/)  [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dribbble.svg' alt='dribbble' height='40'>](https://dribbble.com/jcubic/)  
`.split(/\)\s+\[/).map(line => {
  return line.replace(/<img src='.*\/([^']+)' alt='([^']+)'[^>]+>/, function(_, file, alt, url) {
    //console.log({_});
    return icon(file, alt)
    return `<a href='${url}'>${icon(file, alt)}</a>`;
  });
}).join(')&nbsp; &nbsp;[');

console.log(input);

function icon(file, alt) {
  return `<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://api.iconify.design/simple-icons/${file}?color=white&height=40">
  <source media="(prefers-color-scheme: light)" srcset="https://api.iconify.design/simple-icons/${file}?color=black&height=40">
  <img alt="${alt} logo" src="https://api.iconify.design/simple-icons/${file}?color=black&height=40" height="40">
</picture>`.replace(/\s*\n\s*/g, '').replace(/"/g, "'");
}
