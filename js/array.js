
/*
var avgTempJan = 31.9
var avgTempFev = 35.3
var avgTempMar = 42
var avgTempApr = 38
var avgTempMay = 25.5
Não viável
*/
/*
var avgTemp = []
avgTemp[0] = 31.9;
avgTemp[1] = 35.3;
avgTemp[2] = 42;
avgTemp[3] = 38;
avgTemp[4] = 25.5;

console.log(avgTemp[3]);
*/
//var daysOfWeek = new Array()
//var daysOfWeek = new Array(7)
var daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')
//daysOfWeek[0] = 'Sunday'
//console.log(daysOfWeek.length)
for(var i = 0; i < daysOfWeek.length; i++){
    //console.log(daysOfWeek[i])
}

var fibonacci = []
fibonacci[0] = 0
fibonacci[1] = 1
fibonacci[2] = 1

for(var i = 3; i < 20; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
}
//console.log(fibonacci)
for (var i = 0; i < fibonacci.length; i++) {
    //console.log(fibonacci[i]);
}

var numbers  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//numbers[10] = 10
numbers.push(10)//para acrescentar no ultimo elemento do array

numbers.unshift(-1)//acrescentar antes do primeiro elemento do array

numbers.pop()//para remover o ultimo elemento do array

numbers.shift()//para remover o primeiro elemento do array



numbers.splice(3, 3)//eliminar qtde de elementos de um array de uma só splice(x,y,w,z..)
//x a posicao do array que começa a ser elimidado
//y quantidade de elementos a ser eliminados
//w,z.. sao os valores a serem acrescentado no array
//console.log(numbers);

numbers.splice(3, 0, 3, 4, 5)//acrescentar varios elementos no array

//console.log(numbers)

//var avgTempWeek = [];

//var avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41,6, 25]
//var avgTempWeek2 = [41, 29, 33, 21.2, 19.5, 17, 33.8]

//avgTempWeek[0] = avgTempWeek1;
//avgTempWeek[1] = avgTempWeek2;

//console.log(avgTempWeek[0][3])
/*
for (let i = 0; i < avgTempWeek.length; i++) {
    for (let j = 0; j < avgTempWeek[i].length; j++) {
        console.log(avgTempWeek[i][j]);
    }
}
*/
var month = []
var firstWeek = []
var lastWeek = []

var avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25]
var avgTempWeek2 = [41, 29, 33, 21.2, 19.5, 17, 33.8]
var avgTempWeek3 = [13, 45.7, 18, 7, 13.4, 21., 15]
var avgTempWeek4 = [51, 19, 23, 26.2, 9.5, 17.4, 31.8]

firstWeek = [avgTempWeek1, avgTempWeek2]
lastWeek = [avgTempWeek3, avgTempWeek4]

month = [firstWeek, lastWeek]

//console.log(month[1][1][4])

for (var x = 0; x < month.length; x++) {
    for (var y = 0; y < month[x].length; y++) {
        for (var z = 0; z < month[x][y].length; z++) {
            console.log(month[x][y][z]);
        }
        
    }
    
}