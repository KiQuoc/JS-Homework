//BAi 1:

const level_1 = 1678;
const level_2 = 1734;
const level_3 = 2014;
const level_4 =2536;
const level_5 = 2834;
const level_6 = 2927;
let input = 900;
let output;


if( input < 0){
    console.log("Không hợp lệ")
}else if(input>=0 && input <=50){
    output = input * level_1;
}else if(input <=100){
    output = (input-50) * level_2 + 50 * level_1 ;
}else if(input <=200){
    output = 50 * level_1 + 50 * level_2 + (input-100) * level_3;
}else if(input <= 300){
    output = 50 * level_1 + 50 * level_2 + 100 *level_3 + (input -200)*level_4;
}else if( input <=400){
    output = 50 *level_1 + 50 * level_2 + 100 * level_3 + 100 * level_4 +(input - 300)*level_5;
}else{
     output = 50 *level_1 + 50 * level_2 + 100 * level_3 + 100 * level_4 + 100 *level_5 + (input -400)*level_6;
}

console.log("Số tiền phải đóng là :" , output)


// BÀi 2:

let x = 5;
let isPremi = true;

if( x < 2){
    isPremi = false;
}else{
    for( let i = 2 ; i < x ; i++){
        if(x % i === 0){
            isPremi = false;
            break;
        }
    }
}

if( isPremi){
    console.log('Số', x, " là số nguyên tố.")
}else{
    console.log('Số', x , " không phải số nguyên tố.")
}


// BÀi 3:
let number = 10;
let evenNumber = "";
let oddNumber = "";

for( let i = 1 ; i <= number; i++){
    if(i % 2 === 0){
        evenNumber = evenNumber + i +"";
    }else{
        oddNumber = oddNumber + i + "";
    }

}
console.log(`Dãy số chẵn : ${evenNumber}`);
console.log(`Dãy số lẻ : ${oddNumber}`);

// Bài 4 :

let n = 6;
let s = 0;

for( let i = 1; i <=n; i++){
    s = s + i * (i + 1);
}

console.log( `Giá trị của S là: ${s} khi n = ${n}`);

// Bài 5:
var a = 5;
var b = 9;

let totalOddNumber = 0;
let totalEvenNumber = 0;

for( let i = a ; i <= b ; i++){
    if(i % 2 === 0){
        totalEvenNumber = totalEvenNumber + i;
    }else{
        totalOddNumber = totalOddNumber + i;
    }
}

console.log("TỔng các số chẵn là :", totalEvenNumber);
console.log("TỔng các số lẻ là :", totalOddNumber);


// Bài 6:

let chessBoard = 8;
let html = `<h2>ChessBoard</h2>`;
html = html + `<table>`;
for(let i = 1 ; i <= chessBoard ; i ++){
    html = html + `<tr>`;
    for(let j = 1 ; j <= chessBoard ; j++){
        if((i+j) % 2 === 0){
            html = html + `<td class="square_black"></td>`;
        }else{
            html = html + `<td class ="square_white"></td>`
        }
    }
    html = html +`</tr>`;
}
html = html + `</table>`

document.body.innerHTML = html;

// BÀi 8:
let nn = 5;
let num = 1;

for( let i = 1; i <= nn ; i++){
    let line ="";
    for(let j = 1 ; j <= i ; j++){
        line += num + " ";
        num ++;
    }
    console.log(line);
}
