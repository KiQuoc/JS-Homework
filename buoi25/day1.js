
const PRODUCTS = [
    { id: 1, name: "Sản phẩm 1", price: 1000 },
    { id: 2, name: "Sản phẩm 2", price: 2000 },
    { id: 3, name: "Sản phẩm 3", price: 3000 },
    { id: 4, name: "Sản phẩm 4", price: 4000 },
];

let cart = [];

const renderProductList = () => {
    const productListBody = document.getElementById('product-list-body');
    productListBody.innerHTML = PRODUCTS.map((product, index) => {
        return `
            <tr>
                <td>${index + 1}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>
                    <input type="number" min="1" value="1" id="qty-input-${product.id}" data-product-id="${product.id}">
                    <button onclick="addToCart(${product.id})">Thêm vào giỏ</button>
                </td>
            </tr>
        `;
    }).join('');
};

const addToCart = (productId) => {
    const product = PRODUCTS.find(p => p.id === productId);
    const qtyInput = document.getElementById(`qty-input-${productId}`);
    const quantity = parseInt(qtyInput.value) || 1;

    if (quantity <= 0) {
        alert("Số lượng phải lớn hơn 0!");
        return;
    }

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity
        });
    }
    qtyInput.value = 1; 
    renderCart();
};

const renderCart = () => {
    const cartBody = document.getElementById('cart-body');
    const cartFooter = document.getElementById('cart-footer');
    let totalQuantity = 0;
    let totalPrice = 0;

    if (cart.length === 0) {
        cartBody.innerHTML = '<tr><td colspan="6" style="text-align:center;">Giỏ hàng trống</td></tr>';
        cartFooter.innerHTML = '';
        return;
    }

    cartBody.innerHTML = cart.map((item, index) => {
        const subtotal = item.price * item.quantity;
        totalQuantity += item.quantity;
        totalPrice += subtotal;

        return `
            <tr>
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>
                    <input type="number" min="1" value="${item.quantity}" class="cart-qty-input" data-item-id="${item.id}">
                </td>
                <td>${subtotal.toLocaleString('vi-VN')}</td>
                <td><button onclick="confirmDelete(${item.id})">Xóa</button></td>
            </tr>
        `;
    }).join('');

    cartFooter.innerHTML = `
        <tr>
            <td colspan="3" style="text-align: right; font-weight: bold;">Tổng</td>
            <td id="total-qty">${totalQuantity}</td>
            <td id="total-price">${totalPrice.toLocaleString('vi-VN')}</td>
            <td></td>
        </tr>
    `;
};
const confirmDelete = (itemId) => {
    const itemName = cart.find(item => item.id === itemId)?.name;
    const isConfirmed = confirm(`Bạn có chắc chắn muốn xóa sản phẩm ${itemName} này không?`);
    if (isConfirmed) {
        cart = cart.filter(item => item.id !== itemId);
        renderCart();
    }
};

const updateCart = () => {
    const qtyInputs = document.querySelectorAll('#cart-table .cart-qty-input');
    qtyInputs.forEach(input => {
        const itemId = parseInt(input.dataset.itemId);
        const newQuantity = parseInt(input.value);
        
        const itemToUpdate = cart.find(item => item.id === itemId);
        
        if (itemToUpdate && newQuantity > 0) {
            itemToUpdate.quantity = newQuantity;
        } else if (itemToUpdate && newQuantity <= 0) {
            alert(`Số lượng cho sản phẩm ${itemToUpdate.name} phải lớn hơn 0. Đã tự động xóa sản phẩm.`);
            cart = cart.filter(item => item.id !== itemId);
        }
    });
    renderCart();
};

const clearCart = () => {
    const isConfirmed = confirm("Bạn có chắc chắn muốn xóa toàn bộ giỏ hàng không?");
    
    if (isConfirmed) {
        cart = [];
        renderCart();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    renderProductList();
    renderCart();
    document.getElementById('update-cart-btn').addEventListener('click', updateCart);
    document.getElementById('clear-cart-btn').addEventListener('click', clearCart);
});