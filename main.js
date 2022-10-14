const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCard = document.querySelector('#shoppingCartContainer');
const iconShopping = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive')
}

// Hide menu

iconMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
  const shoppingCardOpen = !shoppingCard.classList.contains('inactive');

  if(shoppingCardOpen) {
    shoppingCard.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}

// Hide and show shopping card

iconShopping.addEventListener('click', toggleShoppingCard);

function toggleShoppingCard() {

  const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');

  if (isMobileMenuOpen) {
      mobileMenu.classList.add('inactive');
  }
  shoppingCard.classList.toggle('inactive');
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'TV',
  price: 120,
  image: 'https://images.pexels.com/photos/704555/pexels-photo-704555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
  name: 'MacBook Pro',
  price: 120,
  image: 'https://images.pexels.com/photos/249538/pexels-photo-249538.jpeg?auto=compress&cs=tinysrgb&w=600'
});
productList.push({
  name: 'Iphone',
  price: 120,
  image: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

function toggleAsideCart(products) {
  for (product of products) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card')

    const img = document.createElement('img');
    img.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info')

    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productInfoFigure = document.createElement('figure');

    const productInfoImg = document.createElement('img');
    productInfoImg.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productInfoImg)
    productInfoDiv.append(productPrice, productName)
    productInfo.append(productInfoDiv, productInfoFigure);
    productCard.append(img, productInfo)

    cardsContainer.appendChild(productCard)
  }
}

toggleAsideCart(productList)