import { login, signup } from './frontend-auth.js';
import { addProduct, getProducts } from './backend-products.js';
import { addToCart, getCart } from './backend-cart.js';

// Função para renderizar a lista de produtos
const renderProducts = async () => {
    const productsList = document.getElementById('products');
    productsList.innerHTML = '';
    const productsSnapshot = await getProducts();
    productsSnapshot.forEach(doc => {
        const product = doc.data();
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price}`;
        const addToCartBtn = document.createElement('button');
        addToCartBtn.textContent = 'Add to Cart';
        addToCartBtn.onclick = () => addToCart(currentUser.uid, product);
        li.appendChild(addToCartBtn);
        productsList.appendChild(li);
    });
};

// Função para renderizar o carrinho de compras
const renderCart = async () => {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    const cartSnapshot = await getCart(currentUser.uid);
    cartSnapshot.forEach(doc => {
        const item = doc.data();
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
    });
};

// Manipulador de eventos para login
document.getElementById('login-btn').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
        const userCredential = await login(email, password);
        currentUser = userCredential.user;
        alert('Login successful');
        await renderProducts();
        await renderCart();
    } catch (error) {
        alert('Login failed: ' + error.message);
    }
});

// Manipulador de eventos para cadastro
document.getElementById('signup-btn').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
        const userCredential = await signup(email, password);
        currentUser = userCredential.user;
        alert('Signup successful');
        await renderProducts();
        await renderCart();
    } catch (error) {
        alert('Signup failed: ' + error.message);
    }
});

// Variável para armazenar o usuário logado
let currentUser = null;

// Renderizar produtos ao carregar a página
window.onload = async () => {
    await renderProducts();
    if (currentUser) {
        await renderCart();
    }
};
