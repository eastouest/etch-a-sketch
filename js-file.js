const container = document.querySelector('#container');
container.style.cssText = 'display: flex; flex-wrap: wrap; flex-direction: row; height: 100vh; width: 100%;';
let gridCount = 256;
for (let i = 0; i < gridCount; i++) {
    const div = document.createElement('div');
    div.style.cssText = 'color: blue; background: white; width: 6.25%;'
    div.textContent = 'Hello World!';
    container.appendChild(div);
}