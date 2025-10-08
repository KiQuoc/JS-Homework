//Bài 1:
function hasNegative(numbers){
    return numbers.some(function(num){
        return num < 0;
    })
}

console.log(hasNegative([1,-2,3]));

// Bài 2:
function isAllEven(numbers){
    return numbers.every(function(num){
        return num % 2 === 0;
    })
}

console.log(isAllEven([2,6,4,8]));

// Bài 3:
function findDivisibleBy5(numbers){
    return numbers.find(function(num){
        return num % 5 === 0;
    })
}

console.log(findDivisibleBy5([5,10,15,20,25]));

// Bài 4 :
function findLastNegative(numbers){
    return numbers.findLast(function(num){
        return num < 0;
    })
}

console.log(findLastNegative([-2,3,5,-7]));

//BÀi 5:
function findFirstOddIndex(numbers){
    return numbers.findIndex(function (num) {
        return num % 2 !== 0;
    })
}
console.log(findFirstOddIndex([2,4,5,7,9,8]));// index = 2 tương đương với 5

// BÀi 6:
function findLastGreaterThan50(numbers){
    return numbers.findLastIndex(function(num){
        return num > 50 ;
    })
}

console.log(findLastGreaterThan50([50,60,90,100]));// index = 3 == 100

// Bài 7:

function sum(numbers){
    return numbers.reduce(function(sum,num){
        return sum + num ;
    })
    
}
console.log(sum([24,5,7,9,2]));

//Bài 8:
function multiplyAll(numbers){
    return numbers.reduce(function(product , num){
        return product * num;
    })
}
console.log(multiplyAll([24,5,7,9,2]));

//Bài 9:
function longestStringLength(strings){
    let max = 0;
    for(let i = 0 ; i < strings.length ; i++){
        if(strings[i].length > max){
            max = strings[i];
        }
    }
    return max;
}
console.log(longestStringLength(["F8", "Education", "JavaScript", "JS"]));

// bài 10:
function hasPrime(numbers){
    return numbers.some(function(value, index){
        if(value < 2){
            return false;
        }
        for(let i = 2; i < value; i ++){
            if(value % i === 0){
                return false;
            }
            
        }
        return true;
    })
}
console.log(hasPrime([1,5,6,8,9,10]));


