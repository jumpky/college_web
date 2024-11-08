const pathImages='../plan_numerable/images/'
let pos='00001';

let elementPosInfo=document.getElementById('posInfo');
let elementInputPos=document.getElementById('inputPos');
let elementImage=document.getElementById('image');
let elementListButtons=document.getElementById('listButtons')

function update()
{
    let s='Вы находитесь в позиции:'+pos+"<br>"+"Можно перейти в "+graph.getNeighbors(pos);
    elementPosInfo.innerHTML=s;
    loadImage(pos);
    createButtonList(graph.getNeighbors(pos),elementListButtons);
}

function move(newPos)
{
    if (newPos===undefined){
        if (elementInputPos.value==='') return;
        pos=elementInputPos.value;
    }
    else{
        pos=newPos;
    }
    update();    
}

function loadImage(imageName)
{
    elementImage.src=pathImages+imageName+'.jpg';
}

update();

function createButtonList(buttonLabels, targetElement) {
    // Создаем элемент <ul> для списка кнопок
    const ul = document.createElement('ul');
    elementListButtons.innerHTML='';
    // Проходим по массиву строк
    buttonLabels.forEach(label => {
        // Создаем элемент <li> для каждой кнопки
        const li = document.createElement('li');

        // Создаем кнопку
        const button = document.createElement('button');
        button.innerText = label;

        // Добавление функциональности на кнопку (например, выводим alert)
        button.addEventListener('click', () => {
            move(label)
            //alert(`Вы нажали на кнопку: ${label}`);
        });

        // Добавляем кнопку в <li>
        li.appendChild(button);

        // Добавляем <li> в <ul>
        ul.appendChild(li);
    });

    // Добавляем <ul> в целевой элемент
    targetElement.appendChild(ul);
}
