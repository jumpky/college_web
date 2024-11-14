window.onload = function() {
    const container = document.getElementById('grid');
    const image = document.getElementById('planImage');
    const elementImageN=document.getElementById('imageN');
    const cellSize = 30; // Размер стороны квадратной ячейки
    const pathToImages='images/'

    const rows = Math.ceil(image.naturalHeight / cellSize);
    const cols = Math.ceil(image.naturalWidth / cellSize);

    let cellNumber = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';

            // Установка размеров и позиции ячейки
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            cell.style.top = `${row * cellSize}px`;
            cell.style.left = `${col * cellSize}px`;

            // Нумерация ячеек
            cell.innerText = String(cellNumber++).padStart(5,'0');
            cell.onmouseenter= ()=>
                {
                    elementImageN.src=pathToImages+cell.innerText+'.jpg'
                }
                container.appendChild(cell);
        }
    }
}
