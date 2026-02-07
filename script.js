// 1. Инициализация данных (из localStorage или пустой массив)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// 2. Поиск элементов в DOM
const cartList = document.getElementById('cart-list');
const cartTotal = document.getElementById('cart-total');
const cartCountElement = document.getElementById('cart-count');
const checkoutFormSection = document.querySelector('.checkout-form');
const menuItems = document.querySelectorAll('.menu__item');

// 3. Функция обновления интерфейса (ваша функция с мелкими правками)
const updateCart = () => {
  cartList.innerHTML = '';
  let total = 0;
  
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} — ${item.price} ₽`;
    cartList.appendChild(li);
    total += item.price;
  });
  
  cartTotal.textContent = `${total} ₽`;
  cartCountElement.innerText = cart.length;
  localStorage.setItem('cart', JSON.stringify(cart));
};

// 4. Логика добавления в корзину
menuItems.forEach(item => {
  const button = item.querySelector('.add-to-cart');
  const name = item.querySelector('h3').innerText;
  const price = parseInt(item.querySelector('.price').innerText);

  button.addEventListener('click', () => {
    cart.push({ name, price });
    updateCart();
  });
});

// 5. Очистка корзины
document.getElementById('clear-btn').addEventListener('click', () => {
  cart = [];
  updateCart();
});

// 6. Показ формы оформления
document.getElementById('checkout-btn').addEventListener('click', () => {
  if (cart.length > 0) {
    checkoutFormSection.style.display = 'block';
    checkoutFormSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    alert('Корзина пуста!');
  }
});

// 7. Обработка отправки формы
document.getElementById('order-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Спасибо за заказ! Мы свяжемся с вами в ближайшее время.');
  cart = [];
  updateCart();
  checkoutFormSection.style.display = 'none';
});

// Запускаем обновление при загрузке страницы, чтобы подтянуть данные из LocalStorage
updateCart();
