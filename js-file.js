const container = document.querySelector('#container');
container.style.cssText = 'display: flex; flex-wrap: wrap; flex-direction: row; height: 100vh; width: 100%;';
let gridCount = 256;
const btn = document.querySelector("#btn");

function createGrid(){
    for (let i = 0; i < gridCount; i++) {
        const div = document.createElement('div');
        div.style.cssText = 'color: white; background: purple; width: 6.25%;'
        div.textContent = 'Hello World!';
        div.onmouseover = () => div.style.cssText = 'color: purple; background: white; width: 6.25%';
        container.appendChild(div);
    };
};
createGrid();
    const button = document.querySelector('#button-container');
    button.style.cssText = 'width: 100%';
function changeGrid() {
	let grid = prompt("Enter a value from 1 to 100");
    if (grid > 100 || grid < 1) {
        alert('Please enter a value between 1 and 100');
        prompt("Enter a value from 1 to 100");
    }
    else {
        container.innerHTML = "";
        gridCount = (grid * grid);
        for (let i = 0; i < gridCount; i++){
            const div = document.createElement('div');
            div.style.cssText = 'color: white; background: purple';
            div.textContent = 'hiya';
            container.appendChild(div);
        }
    };
    }