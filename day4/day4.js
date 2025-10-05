// BÀi 1:
const arr = [1, 2, 3, 4, 5, 6];
// let squares =[];
// - Tạo mảng mới chứa bình phương của từng phần tử.
let squares= arr.map(function(num){
    return num * num ;
})
console.log("Bình phương trả về là :", squares);

// - Tạo mảng mới chứa các số chẵn trong mảng.

let evenNumber = arr.filter(function(num){
     return num % 2 === 0;
})
console.log( "số chẵn :", evenNumber);

// - Tạo mảng mới chứa các số bình phương nhưng chỉ lấy số lẻ.

let oddSquares = arr.map(function(num){
    return num *num;
}).filter(function(num){
    return num % 2 === 0;
})

console.log( "Bình Phương của số chẵn :", oddSquares);

// Bài 2:
const names = ["   hoang ", "AN", "  f8   ", "Education"];

// - Tạo mảng mới chứa các phần tử đã được xoá khoảng trắng thừa và viết thường toàn bộ.

let arr1 = names.map(function(a){
    return a.trim().toLowerCase();
})
console.log("Xóa khoảng trắng và viết thường toàn bộ ",arr1);

// - Tạo mảng mới viết chữ cái đầu hoa (Hoang, An, F8, Education)

// let arr2 = names.map(function(a){
//     return a.trim().toLowerCase();
// })
// console.log(arr2);

let arr2 = arr1.map(function(a){
    return a.charAt(0).toUpperCase() + a.slice(1);
})
console.log("Viết hoa chữ cái đầu tiên :", arr2);


// BÀi 3:
const nums = [3, 7, 2, 9, 12, 15, 18];

// - Lấy ra mảng mới chỉ chứa số lớn hơn hoặc bằng 10.

let number10 = nums.filter(function(a){
    return a >= 10 ;
})
console.log("Số lớn hơn hoặc bằng 10 :", number10);

// - Từ mảng mới trên, tạo mảng chỉ chứa số chia hết cho 3.

let nb1 = number10.filter(function(a){
    return a % 3 === 0;
})
console.log("Số chia hết cho 3:", nb1);

// - Với mảng ban đầu, tạo mảng mới tăng gấp đôi nhưng chỉ giữ lại số lẻ.

let nb2 = nums.filter(function(num){
   return num % 2 !== 0;
}).map(function(num){
    return num * 2 ;
})
console.log("Mảng mới tăng gấp đôi nhưng chỉ giữ lại số lẻ :",nb2);


//Bài 4:
const words = ["javascript", "php", "css", "html", "python", "java"];
// - Lọc ra các từ có độ dài >= 5.
let newArr = words.filter(function(a){
    return a.length >= 5;
})

console.log("Các từ có độ dài lớn hơn hoặc bằng 5 :", newArr);

// - Tạo mảng mới viết hoa toàn bộ.

let toUpperCase = words.map(function(a){
    return a.toUpperCase();
})
console.log(toUpperCase);

// - Tạo mảng mới viết ngược từng chuỗi (tpircsavaj, avaj...)

let reverseArray = words.map(function(a){
    return a.split("").reverse().join("");
})
console.log("Mảng mới viết ngược từng chuỗi", reverseArray);


// Bài 5


const myArr = [ 

  [1, 2, 3], 

  [4, 5, 6], 

  [7, 8, 9] 

];

let rowSum = myArr.map(function(number){
    return number.reduce(function(sum, num){
        return sum + num;
    },0)
})
console.log(" Mảng chứa tổng từng hàng :",rowSum);



// - Tạo mảng chứa tổng từng cột => [12, 15, 18]

// let colSum = [];
// // gọi i là cột , j là hàng
// for( let i = 0 ; i < myArr[0].length ; i++){
//     let sum = 0;
//     for( let j = 0 ; j < myArr.length; j++){
//         sum = sum + myArr[j][i];
//         console.log(`cột ${i}, hàng ${j}:`, myArr[j][i]);
//     }
//     colSum.push(sum);
// }
// console.log("Tổng từng cột",colSum);

let colSum = myArr.map(function(a,colNumber){
    return myArr.reduce(function(sum,row){
        return sum + row[colNumber]
    },0)
})
console.log("Tổng từng cột",colSum);

// - Lọc ra các hàng có tổng > 10.
let rowTotal = [];
let row10 = myArr.filter(function(num){
    let sum = 0;
    for(let i = 0 ; i < myArr.length ; i++){
        sum = sum + num[i];
    }
    return sum > 10;
})
console.log("Các hàng có tổng",row10);

// Bài 6:
const myArr1 = [ 

  ["hello", "world"], 

  ["javascript", "php"], 

  ["css", "html"] 

]

// - Tạo mảng mới viết hoa tất cả từ.
let newArr1 = myArr1.map(function(a){
    return a.map(function(word){
        return word.toUpperCase();
    })
})
console.log("Viết hoa tất cả các từ :",newArr1);

// - Lọc ra các từ có độ dài > 4.

let newArr2 = myArr1.map(function(a){
    return a.filter(function(word){
            return word.length > 4;
    })
})
console.log("các từ có độ dài > 4 :",newArr2);


// - Ghép tất cả thành 1 mảng 1 chiều.

let oneArr = myArr1.flat()
console.log('Mảng 1 chiều:',oneArr);

//BÀi 7:

const myArr3 = [ 

  [2, 4, 6], 

  [8, 10, 12], 

  [14, 16, 18] 

]
// - Lấy ra các phần tử trên đường chéo chính => [2, 10, 18].

let sin = myArr3.map(function(row,i){
    return row[i];
})
console.log("Đường chéo là :",sin);

// - Lấy ra các phần tử trên đường chéo phụ => [6, 10, 14].

const a = myArr3.length;
let antiSin = myArr3.map(function(row, i){
    return row[a - 1 - i];
})

console.log("Đường chéo phụ :", antiSin);


// - Tính tổng của đường chéo chính và phụ.


let totalSin = myArr3.map(function(row,i){
    return row[i];
}).reduce(function(sum,num){
    return sum + num ;
}, 0)
console.log("Tổng đườn chéo chính",totalSin);


let totalAntiSin =  myArr3.map(function(row, i){
    return row[a - 1 - i];
}).reduce(function(sum,num){
    return sum + num ;
}, 0)
console.log("tổng đường chéo phụ", totalAntiSin);

// bài 8:
const scores = [ 

  [8, 9, 7],   // học sinh 1 

  [6, 5, 7],   // học sinh 2 

  [10, 9, 8]   // học sinh 3 

]

// - Tính điểm trung bình của từng học sinh => [8, 6, 9].

let averages = scores.map(function(student){
    let sum = student.reduce(function(sum , num){
        return sum + num
    }, 0)
    return sum / student.length;
})
console.log("Điểm trung bình của mỗi hoc sinh là :",averages);

// - Lọc ra những học sinh có điểm trung bình >= 8.

let topStudents = scores.filter(function(student , numIndex){
    let ac = averages[numIndex];
    return ac >= 8;

})
console.log("những học sinh có điểm trung bình >= 8:" , topStudents);

// - Tạo mảng mới tăng tất cả điểm thêm 1 (nếu chưa vượt quá 10).

const increasedScores = scores.map(function(student){
    return student.map(function(scores){
        return scores < 10 ? scores + 1 : 10;
    })
})
console.log(increasedScores);
