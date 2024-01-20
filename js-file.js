const container = document.querySelector('#container');
let gridCount = 16;
for (let i = 0; i < gridCount; i++) {
    const div = document.createElement('div');
    div.style.cssText = 'color: blue; background: white; flex-wrap: wrap';
    div.textContent = 'Hello World!';
    container.appendChild(div);
}