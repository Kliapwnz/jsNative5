const strings = ["Donald", "Alex", "Bob"]
console.log(strings.sort())
//1. Сортирует строки "из коробки", т.е. без доп. параметров
const strings2 = ["Donald", "Alex", "Bob", "Дима", "genius", "Натали", "9"]
console.log(strings2.sort())
//2. Сортирует в порядке Юникода и мутирует массив

const numbers = [1000, 25, 777, 8, 9988, -8]
console.log(numbers.sort())


const compareFuncPro = (a, b) => a - b
console.log(numbers.sort(compareFuncPro))
// функия сравнения должна возвращать число больше или меньше 0
