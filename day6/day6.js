//BÀi 1:
const users = [ 

  { name: "An", age: 25 }, 

  { name: "Bình", age: 30 }, 

  { name: "Chi", age: 22 }, 

];


// - In ra tên của tất cả người dùng:
console.log("Danh sách tên người dùng:");
users.forEach(function(users){
    console.log(users.name);
})

// - Tìm người có tuổi lớn nhất
let oldest = users[0];
for(let i = 1 ; i < users.length; i++){
    if(users[i].age > oldest.age){
        oldest = users[i];
    }
}

console.log("NGười có tuổi cao nhất là :", oldest.name , "-", oldest.age);

// - Tính tuổi trung bình của tất cả người dùng. :
let totalAge = 0;
for( let i = 0; i < users.length ; i++){
    totalAge = totalAge + users[i].age;
}
let averageAge =  totalAge / users.length;


console.log("Tuổi trung bình của người dùng là :", averageAge);


// Bài 2

// Cho trước mảng sau:

const products = [ 

  { name: "Laptop", price: 15000000 }, 

  { name: "Mouse", price: 250000 }, 

  { name: "Keyboard", price: 800000 }, 

];

// - Tạo mảng mới chỉ chứa tên sản phẩm.

const productNames = products.map(function(product){
    return product.name;
})
console.log("Tên các sản phẩm:", productNames);

// - Tính tổng giá trị tất cả sản phẩm.

const totalPrice = products.reduce(function(sum, product){
    return sum + product.price;
},0)

console.log("Tổng giá trị tất cả sản phẩm là:", totalPrice);

//- Lọc ra sản phẩm có giá lớn hơn 1 triệu.

const expensiveProducts = products.filter(function(a){
    return a.price > 1000000;
})
console.log("sản phẩm có giá lớn hơn 1 triệu:",expensiveProducts);


// Bài 3

// Cho trước mảng sau

const students = [ 

  { name: "Lan", scores: [8, 9, 7] }, 

  { name: "Huy", scores: [6, 5, 7] }, 

  { name: "Minh", scores: [9, 8, 10] }, 

];

// - Tính điểm trung bình của từng học sinh.

const averagePoint = students.map(function(students){
let total = students.scores.reduce(function(sum,score){
    return sum + score;
},0);
let average = total / students.scores.length;
    return { name: students.name, average: average };
})

console.log("điểm trung bình của từng học sinh :",averagePoint);//Lan:8, Huy:6, Minh:9


// - Trả về danh sách học sinh đạt loại giỏi (điểm TB >= 8).

const goodStudents = averagePoint.filter(function(a){
    return a.average >= 8;
})
console.log("danh sách học sinh đạt loại giỏi (điểm TB >= 8)",goodStudents);

//- Sắp xếp học sinh theo điểm trung bình giảm dần.

let decreasingScore = averagePoint.sort(function(a, b){
    return b.average - a.average;
})
console.log("điểm trung bình giảm dần:",decreasingScore);

// Bài 4

// Cho trước mảng sau:

const posts = [ 

  { 

    id: 1, 

    title: "JavaScript cơ bản", 

    tags: ["js", "basic"], 

    comments: [ 

      { user: "An", text: "Hay quá!" }, 

      { user: "Bình", text: "Rất dễ hiểu" }, 

    ], 

  }, 

  { 

    id: 2, 

    title: "Học React không khó", 

    tags: ["react", "js"], 

    comments: [{ user: "Chi", text: "Cảm ơn chia sẻ" }], 

  }, 

];

// - In ra tất cả title kèm số lượng comments của từng bài viết.
posts.forEach(function(post){
    console.log(`Bài viết: ${post.title} - Có ${post.comments.length} bình luận`);
})

// - Tạo mảng mới chứa tất cả tags (không trùng lặp).

const uniqueTags = posts.reduce(function(acr, post){
  post.tags.forEach(function(tag){
    if(!acr.includes(tag)){
      acr.push(tag);
    }
  });
  return acr;
}, []);

console.log("Tất cả tags (không trùng lặp):", uniqueTags);


// - Tìm tất cả các bình luận của user "An".

const anComment = posts.flatMap(function(post){
    return post.comments;
}).filter(function(comments){
    return comments.user === "An"
})

console.log(" tất cả các bình luận của user 'An'", anComment);

