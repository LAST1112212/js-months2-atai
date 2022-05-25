const list = [];

const addButton = document.getElementById('button');
const input = document.getElementById('input')

function render() {
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'list');

    for (let i = 0; i < list.length; i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'toDoBlock');
        const p = document.createElement('p');
        p.innerText = list[i].text
        div.append(p);

        const buttons = document.createElement('div');
        buttons.setAttribute('class', 'actions');
        const changeButton = document.createElement('button');
        changeButton.setAttribute('class', 'change');
        changeButton.innerText = "change";
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'delete');
        deleteButton.innerText = "delete";
        buttons.append(changeButton, deleteButton);
        div.append(buttons);
        mainDiv.append(div);

        changeButton.onclick = () => {
            input.innerText = " ";
            p.innerText = " "
            if (i > 1) {
                list.length = i +1;
            } else {
                list.length = 1;
            }
        }
        deleteButton.onclick = () => {
            document.querySelector('.toDoBlock').remove();
            if (i > 1) {
                list.length = i + 1;
            } else {
                list.length = 1;
            }
        }
    }
    const form = document.querySelector('.form');
    document.querySelector('.list').remove();
    form.append(mainDiv);
}
addButton.onclick = function () {
    const obj = {
        id: list.length+1,
        text: input.value
    }
    list.push(obj)
    console.log(list)
    render()
}