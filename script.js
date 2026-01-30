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
