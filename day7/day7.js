// BAi 1:
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
  { id: 2, name: "Phone", category: "Electronics", price: 800 },
  { id: 3, name: "Shirt", category: "Clothing", price: 40 },
  { id: 4, name: "Shoes", category: "Clothing", price: 60 },
  { id: 5, name: "Headphones", category: "Electronics", price: 150 },
];

//- Lọc ra các sản phẩm thuộc danh mục "Electronics".
const Electronics = products.filter(function(item){
    return item.category === "Electronics";
})
console.log("Sản phẩm Electronics:",Electronics);
// - Tính tổng giá của tất cả sản phẩm trong danh mục "Electronics".

const totalElectronicsPrice = Electronics.reduce(function(acr,item){
    return acr + item.price;
},0);
console.log("Tổng giá Electronics: ",totalElectronicsPrice);

// Chuyển đổi mảng sản phẩm thành một object, trong đó key là category, value là mảng các sản phẩm thuộc danh mục đó.

const objectCategory = products.reduce(function(acr,item){
    if(!acr[item.category]){
        acr[item.category] = [];
    }
    acr[item.category].push(item)
    return acr;
},{});

console.log("Nhóm theo category:",objectCategory);

// Bài 2:
const students = [
  { id: 1, name: "An", scores: { math: 8, english: 7, science: 9 } },
  { id: 2, name: "Bình", scores: { math: 6, english: 8, science: 7 } },
  { id: 3, name: "Châu", scores: { math: 9, english: 6, science: 8 } },
];
// - Tính điểm trung bình của từng học viên.

const averageStudents = students.map(function(student){
    const totalScores = Object.values(student.scores);
    const avg = totalScores.reduce(function(sum,item){
        return sum + item
    },0) / totalScores.length;
    return { ...student, average: avg };
})
console.log("Danh sách có điểm trung bình:", averageStudents);
// - Tìm học viên có điểm trung bình cao nhất.

const averageMax = averageStudents.reduce(function(avgMax,number){
    if(number.average > avgMax){
        return number;
    }
    return avgMax;
});
console.log("học viên có điểm trung bình cao nhất :", averageMax);

// - Sắp xếp danh sách học viên theo điểm trung bình giảm dần.
const sortedStudents = averageStudents.sort(function(a,b){
    return b.average -a.average;
})
console.log("danh sách học viên theo điểm trung bình giảm dần :", sortedStudents);

// Bài 3:
const orders = [
  {
    orderId: 101,
    customer: "John",
    items: [{ name: "Laptop", price: 1000, quantity: 1 }],
  },
  {
    orderId: 102,
    customer: "Alice",
    items: [
      { name: "Phone", price: 500, quantity: 2 },
      { name: "Charger", price: 50, quantity: 3 },
    ],
  },
  {
    orderId: 103,
    customer: "Bob",
    items: [{ name: "Headphones", price: 200, quantity: 2 }],
  },
];

// - Tính tổng tiền của từng đơn hàng.

const totalOrder = orders.map(function(order){
    let total = 0;
    for(let i = 0 ; i < order.items.length; i++){
        const item = order.items[i];
        total += item.price * item.quantity;
    }
    return { ...order, total: total };
})
console.log("tổng tiền của từng đơn hàng",totalOrder);

// - Tìm khách hàng có đơn hàng có tổng tiền cao nhất.

const maxOrder = totalOrder.reduce(function(sumMax,number){
    if(number.total > sumMax){
        return number
    }
    return sumMax;
})
console.log("khách hàng có đơn hàng có tổng tiền cao nhất",maxOrder);

// - Gộp danh sách tất cả các sản phẩm từ các đơn hàng, nhóm theo tên sản phẩm và tính tổng số lượng của mỗi sản phẩm.

const productGroupt = orders.flatMap(function(order){
    return order.items;
}).reduce(function(acc,item){
    if(!acc[item.name]){
        acc[item.name]= {name: item.name , totalQuantity: item.quantity}
    }else{
        acc[item.name].totalQuantity += item.quantity;
    }
    return acc;
},{});
console.log("Tổng số lượng mỗi sản phẩm:",productGroupt);



// BÀi 4:
const employees = [
  { id: 1, name: "Mai", department: "IT", salary: 1200 },
  { id: 2, name: "Nam", department: "HR", salary: 800 },
  { id: 3, name: "Hà", department: "IT", salary: 1500 },
  { id: 4, name: "Linh", department: "Marketing", salary: 900 },
  { id: 5, name: "Phúc", department: "IT", salary: 1100 },
];
// - Tính tổng lương của từng phòng ban.

const totalSalary = employees.reduce(function(acc,number){
    if(!acc[number.department]){
        acc[number.department]= number.salary;
    }else{
        acc[number.department]+= number.salary
    }
    return acc;
},{});
console.log("tổng lương của từng phòng ban :",totalSalary);

// tìm nhân viên có mức lương cao nhất trong mỗi phòng ban.
const highestSalary = employees.reduce(function(acc, emp){
    if(!acc[emp.department]){
        acc[emp.department]= emp;
    } else if(emp.salary > acc[emp.department].salary){
        acc[emp.department] = emp;
    }
    return acc
},{});
console.log(highestSalary);

//  Bài 5:
const watchHistory = [
  { userId: 1, videoId: "A1", duration: 10 },
  { userId: 2, videoId: "B1", duration: 15 },
  { userId: 1, videoId: "A1", duration: 20 },
  { userId: 3, videoId: "C1", duration: 30 },
  { userId: 2, videoId: "B1", duration: 5 },
  { userId: 1, videoId: "A2", duration: 25 },
  { userId: 3, videoId: "C1", duration: 15 },
];
// - Tính tổng thời gian xem của từng video.
const totalVideoTime = watchHistory.reduce(function(acc, item){
    if(!acc[item.videoId]){
        acc[item.videoId] = item.duration;
    }else{
        acc[item.videoId] += item.duration;
    }
    return acc;
},{});
console.log(" tổng thời gian xem của từng video :",totalVideoTime);

// - Tìm video được xem nhiều nhất (dựa trên tổng thời gian).

const videoWatch = Object.entries(totalVideoTime).reduce(function(acc,cr){
    if(cr > acc){
        return cr;
    }
    return acc;
});
console.log(videoWatch);

//- Nhóm lịch sử xem theo userId, trong đó mỗi userId sẽ chứa danh sách các video mà họ đã xem và tổng thời gian xem mỗi video.

// BÀi 6:
const matches = [
  { teamA: "A", teamB: "B", scoreA: 2, scoreB: 1 },
  { teamA: "C", teamB: "D", scoreA: 1, scoreB: 3 },
  { teamA: "A", teamB: "C", scoreA: 2, scoreB: 2 },
  { teamA: "B", teamB: "D", scoreA: 0, scoreB: 1 },
  { teamA: "A", teamB: "D", scoreA: 3, scoreB: 1 },
];

const teamStats = matches.reduce(function (acc, match) {
    if(!acc[match.teamA]){
        acc[match.teamA] = {team: match.teamA , win:0, lose: 0, draw:0};
    }
    if(!acc[match.teamB]){
        acc[match.teamB] ={ team: match.teamB , win : 0, lose: 0 , draw :0};

    }
    //kết quả
    if(match.scoreA > match.scoreB){
      acc[match.teamA].win++;
      acc[match.teamB].lose++;
    }else if(match.scoreA < match.scoreB){
        acc[match.teamB].win++;
        acc[match.teamA].lose++;
    }else{
        acc[match.teamA].draw++;
        acc[match.teamB].draw++;
    }
    return acc;
},{});
console.log( teamStats);

// BÀi 7 :

const groupByProject = (emp) => {
  const result = {};

  emp.forEach(employees => {
    employees.projects.forEach(project => {
      if (!result[project]) {
        result[project] = [];
      }
      result[project].push(emp.name); 
    });
  });

  return result;
};

const grouped = groupByProject(emp);
console.log(grouped);

const staffProject = () => {
  const grouped = groupByProject();
  return Object.entries(grouped).reduce((max, [proj, emps]) => 
    emps.length > max[1].length ? [proj, emps] : max
  );
};

// Bài 8:
// 8.1
const getAverageRatings = (reviews) => {
  const grouped = {};

  reviews.forEach(review => {
    if (!grouped[review.productId]) {
      grouped[review.productId] = [];
    }
    grouped[review.productId].push(review.rating);
  });

  const averages = {};
  for (const productId in grouped) {
    const ratings = grouped[productId];
    const avg = ratings.reduce((sum, r) => sum + r, 0) / ratings.length;
    averages[productId] = avg;
  }

  return averages;
};

const averageRatings = getAverageRatings(reviews);
console.log(averageRatings);

// 8.2
const findHighestRatedProduct = (averageRatings) => {
  let maxProduct = null;
  let maxAvg = 0;

  for (const productId in averageRatings) {
    if (averageRatings[productId] > maxAvg) {
      maxAvg = averageRatings[productId];
      maxProduct = productId;
    }
  }

  return { productId: maxProduct, averageRating: maxAvg };
};

const highestRated = findHighestRatedProduct(averageRatings);
console.log(highestRated);


// 8.3
const groupReviewsByProduct = (reviews) => {
  return reviews.reduce((acc, review) => {
    if (!acc[review.productId]) acc[review.productId] = [];
    acc[review.productId].push({ userId: review.userId, rating: review.rating });
    return acc;
  }, {});
};

const groupedReviews = groupReviewsByProduct(reviews);
console.log(groupedReviews);


// Bài 9:
const calculateBalances = (tr) => {
  const balances = {};

  transactions.forEach(tx => {
    if (!balances[tx.account]) {
      balances[tx.account] = 0;
    }
    if (tx.type === "deposit") {
      balances[tx.account] += tx.amount;
    } else if (tx.type === "withdraw") {
      balances[tx.account] -= tx.amount;
    }
  });

  return balances;
};

const balances = calculateBalances(tr);
console.log(balances);


// 9.2
const findHighestBalanceAccount = (balances) => {
  let maxAccount = null;
  let maxBalance = -Infinity;

  for (const account in balances) {
    if (balances[account] > maxBalance) {
      maxBalance = balances[account];
      maxAccount = account;
    }
  }

  return { account: maxAccount, balance: maxBalance };
};

const highestBalance = findHighestBalanceAccount(balances);
console.log(highestBalance);