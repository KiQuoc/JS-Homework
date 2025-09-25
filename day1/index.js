// Bai1:
let age = 25;
console.log("Tôi năm nay", age , "tuổi");

// Bai2:
let PI = 3.14159;
let r = 5;
let sCircle = PI * r ** 2;
console.log( 'Diện tích hình tròn là ', sCircle);

// Bai3:
let a = 7;
let b = 3;
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a  / b;
let remainder = a % b;
console.log('Tổng :', sum);

console.log('Hiệu :', difference);

console.log('Tích :', product);

console.log('Thương :', quotient);

console.log('Chia lấy dư :', remainder);

// Bai4:
let name = "";
let defaultName = "Khách";
let displayName = name || defaultName;
console.log(displayName);

// Bai5:
let ageQuoc = 20;
let hasLicense = true;

if( ageQuoc >= 18 && hasLicense){
    console.log("Đủ điều kiện")
}else{
    console.log("Không đủ điều kiện")
}

// Bai6:

let username = ""
let password = ""
let boolean = (username !== "") && (password !== "")
console.log(boolean)

// Bai7:
let salePrice = 70000;
let discountRate = 0.3;

let price = salePrice / ( 1 - discountRate);
console.log("Giá gốc của sản phẩm :",price);


// Bai8:
let a1 = 3;
let b1= 2;
console.log("b1 =", a1 , "a1 =", b1)