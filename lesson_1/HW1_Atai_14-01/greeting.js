const name = prompt('Введите имя');
alert("hello   " + name);

const arr = [1221,3121,111];
const arr2 = [122231,12231123,122121221,1111];
    if (arr.length > arr2.length){
        alert("arr больше чем arr2")
    }else if (arr2.length > arr.length){
        alert("arr2 больше чем arr")
    }else{
        alert("они равны")
        }

const color =prompt("выбери цвет:красный,желтый,зеленый")
switch (color) {
    case "красный":
        alert('стой')
        break;
    case "желтый":
        alert('готовимся')
        break;
    case "зеленый":
        alert('БегиВасяБеги')
        break;
    default:
       alert("Темирлан выбери зеленый")
}
