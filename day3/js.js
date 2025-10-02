let content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolorem! Quas eius quam iste iure error. Corporis nam reprehenderit voluptatum a cumque perspiciatis tenetur, at consequatur maxime aliquid modi pariatur. lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, dicta voluptatem. Odio omnis numquam fugiat, vitae aliquid illo quas necessitatibus pariatur vel, quidem, at ducimus nihil et aut quaerat excepturi?";
let keyword ="Lorem";
let count = 0 ;
let result = "";
let start = 0;
let lowerContent = content.toLowerCase();
let lowerKeyword = keyword.toLowerCase();

while(true){
    let index = lowerContent.indexOf(lowerKeyword, start);
    if(index === -1){
        result += content.slice(start);
        break;
    }
    result += content.slice(start, index);
    result += `<span class ="highlight">${content.slice(index, index + keyword.length)}</span>`;
    start = index + keyword.length;
    count ++;
}

document.getElementById("kw").innerText = keyword;
let resultBox = document.getElementById("result");
let countBox = document.getElementById("count");

if(count === 0){
    resultBox.innerHTML = content;
    countBox.innerText ="Không tìm thấy kết quả"

}else{
    resultBox.innerHTML = result;
    countBox.innerText =`Đã tìm thấy ${count} kết quả với từ khóa "${keyword}"`
}



// bài 2


let password = " abcAA123@";
let upperCaseCount  = 0 ;
let lowerCaseCount = 0 ;
let numberCount = 0 ;
let specialCount = 0 ;
let specials = "!@#$%^&*()";


for ( let i = 0 ; i < password.length ; i ++){
    let ch = password[i];
    if(ch >="A" && ch <= "Z"){
        upperCaseCount ++;
    }else if(ch >= "a" && ch <= "z"){
        lowerCaseCount ++;
    }else if( ch >= "0" && ch <= "9"){
        numberCount ++ ;
    }else if( specials.includes(ch)){
        specialCount ++;
    }
}

if( password.length < 8){
    console.log("Mật khẩu yếu :phải có ít nhất 8 kí tự !");
}else if ( upperCaseCount < 2){
    console.log("Mật khẩu yếu : cần ít nhất 2 kí tự in hoa !")
} else if( lowerCaseCount < 2){
    console.log("Mật khẩu yếu : cần ít nhất 2 kí tự in thường !");
}else if(numberCount < 1){ 
    console.log("Mật khẩu yếu : cần ít nhất 1 số !");
}else if( specialCount < 1 ){
    console.log("Mật khẩu yếu : cần ít nhất 1 kí tự đặc biệt !");
}else{
    console.log("Mật khẩu mạnh ✅ ");
}

// bài 3:
const users = ['User 1', 'User 2', 'User 3', 'User 2', 'User 4'];
let uniqueUser = [];
let index = 0;

for( let i = 0 ; i < users.length; i ++){
    let duplicate = false;
    for( let j = 0 ; j < index ; j++){
        if(uniqueUser[j] === users[i]){
            duplicate = true;
            break;
        }
    }

    if(!duplicate){
        uniqueUser[index] = users[i];
        index++;
    }
}
console.log(uniqueUser);


// bài 4:
const numbers = [5, 2, 1, 9, 8, 0];

let max1 =-Infinity;
let max2 = -Infinity;

for(let i = 1; i < numbers.length ; i++){
    let num =numbers[i];
    if( num > max1){
        max2 = max1;
        max1 = num;
    }else if( num > max2 && num <max1){
        max2 = num ;
    }
}
console.log("Số lớn nhất:", max1); 
console.log("Số lớn thứ 2:", max2); 

// bài 5:
const numberS = [1, 3, 5, 7, 9, 11];
let inserted = false;
let newNumber = 2;

for( let i = 0; i < numberS.length ; i ++){
    if(numberS[i] > newNumber ){
        numberS.splice(i,0, newNumber);
        inserted = true;
        break;
    }
}
// if (!inserted) {
//   numberS.splice(numbers.length, 0, newNumber) ;
// }

console.log(numberS);