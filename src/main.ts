import { Coords } from '@core/rendering';

function main() {
  const app = document.getElementById('app');
  const coords = new Coords();

  const code = document.createElement('code');
  const pre = document.createElement('pre');
  pre.innerText = JSON.stringify(coords.toObject(), null, 2);
  code.appendChild(pre);
  app?.appendChild(code);
}

main();
