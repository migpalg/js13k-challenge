import { Coords } from '@core/rendering';

function main() {
  const app = document.getElementById('app');
  const coords = new Coords();

  if (app)
    app.innerHTML = `
    <code>
      <pre>${JSON.stringify(coords.toObject(), null, 2)}</pre>
    </code>
    <h1>This module is hot reloading!</h1>
    <p>This is something to hot reload!</p>
  `;
}

main();
