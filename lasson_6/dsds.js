//es5 and es6

// const a = 'hello'
// let b = 10

// var c // es5 старая версия
// c = 'agemeknekln'
// console.log(c)

//string expression -  интерполяция строк

// const first_name = 'Jack'
// const last_name = 'Barbaro'

// console.log(first_name + '' + last_name)

// console.log(Full Name: ${first_name} ${last_name}) //обратные кавычки

// const getFullName = (user) =>{
//     // return 'First name:'+ user.first_name + '\n' + 'last Name:' + user.last_name
//     return First Name:' ${user.first_name}\nLast Name:${user.last_name} //легкий вариант es6
// }

// const user = {
//     first_name: 'eldar',
//     last_name: 'abdykulov'
// }

// console.log(getFullName(user))

//spread operator

const mass = [1,2,3,4,5]
const mass2 = [...mass] //упрощенный вариант es6

// for(let i = 0;i < mass.length;i++){ //es5
//     mass2.push(mass[i])
// }
console.log(mass2);

const obj = {
    username:'Eldar',
    age:18,
    last_name: 'Abdykulov',
    full_name: 'Eldar Abdykulov'
}

const obj2 = [{...obj}] //es6
console.log(obj2)

//деструктуризация

const props ={
    onsubmit:() =>{
        console.log('submit')
    },
    data:[
        {
            key:'value'
        },
        {
            key2:'value2'
        },
        {
            key3:'value3'
        }
    ]

}
const {data, onsubmit} = props //es6
console.log(data)
onsubmit()

console.log(props.data[1].key2) //es5