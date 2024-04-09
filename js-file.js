const container = document.querySelector('#container');
container.style.cssText = 'display: flex; flex-wrap: wrap; flex-direction: row; height: 100vh; width: 100%;';
let defaultGrid = 16 * 16;
const btn = document.querySelector("#btn");
const table = document.querySelector("#c-table");

function createGrid() {
    for (let i = 0; i < defaultGrid; i++) {
        const div = document.createElement('div');
        div.style.cssText = 'color: white; background: purple; width: 6.25%;'
        div.textContent = 'Hello World!';
        div.onmouseover = () => div.style.cssText = 'color: purple; background: white; width: 6.25%';
        container.appendChild(div);
    };
};
createGrid();
function randomizeColor(min, max) {
    r = parseInt(Math.round(Math.random() * (max - min) + min));
    g = parseInt(Math.round(Math.random() * (max - min) + min));
    b = parseInt(Math.round(Math.random() * (max - min) + min));
    text1 = "rgb("
    text2 = ")"
    result = text1.concat(r, ", ", g, ", ", b, text2);
    return result;
    };

function createTable() {
    let grid = prompt("Enter a value from 1 to 100");
    if (grid > 100 || grid < 1) {
        alert('Please enter a value between 1 and 100');
        prompt("Enter a value from 1 to 100");
    } else {
        container.innerHTML = "";
        const table = document.createElement('table');
        table.id = "tb";

        for (let i = 0; i < parseInt(grid); i++) {
            const row = document.createElement("tr");
            table.appendChild(row);

            for (let c = 0; c < parseInt(grid); c++) {
                const cell = document.createElement("td"); // changed from var, which was making only the last cell change
                cell.style.cssText = 'background-color: purple; color: white'; // Initial cell style
                cell.textContent = "Hello world!";
                // cell.onmouseover = () => cell.style.cssText = 'background-color: white; color: purple';
                cell.onmouseover = () => {
                    cell.style.backgroundColor = randomizeColor(1, 255);
                }
                row.appendChild(cell);
            }
        }
        container.appendChild(table);
    }
}