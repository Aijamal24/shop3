// Функция для обработки поиска
document.getElementById('search-btn').addEventListener('click', performSearch);
document.getElementById('search-input').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') performSearch();
});

function performSearch() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();

  const products = document.querySelectorAll('.product');

  let found = false;

  products.forEach(product => {
    const productName = product.querySelector('h3').innerText.toLowerCase();
    if (productName.includes(searchTerm)) {
      product.style.display = 'block'; // Показываем подходящий товар
      found = true;
    } else {
      product.style.display = 'none'; // Скрываем товар, если он не подходит
    }
  });

  if (!found) {
    alert('Ничего не найдено!');
  }
}

// Функция для очистки корзины
function clearCart() {
  cart = []; // Очищаем массив корзины
  localStorage.setItem("cart", JSON.stringify(cart)); // Сохраняем пустую корзину в localStorage
  updateCart(); // Обновляем отображение корзины
  alert("Корзина очищена!");
}

// Привязываем обработчик к кнопке
document.getElementById("clearCartButton").addEventListener("click", clearCart);


const products = {
    wallet1: {
      name: "Кожаный кошелек",
      images: ["img/wallet/bdkny1.jpg", "img/wallet/bdkny3.jpg"],
      description: "Кошелек от dkny",
      price: "5500C"
    },
    wallet2: {
      name: "Кожаный кошелек",
      images: ["img/wallet/mkwr1.jpg", "img/wallet/mkwr2.jpg", "img/wallet/mkwr3.jpg"],
      description: "Набор кошелек + ремень",
      price:"8900c"
    },
    wallet3: {
      name: "Кожаный кошелек",
      images: ["img/wallet/mkmwb3.jpg", "img/wallet/mkmwb2.jpg", "img/wallet/mkmwb1.jpg"],
      description: "Кошелек + кошелек",
      price: "6500c"
    },
    wallet4: {
      name: "Кошелек MK",
      images: ["img/wallet/mkwabr.jpg", "img/wallet/mkwabr2.jpg", "img/wallet/mkwabr1.jpg"],
      description: "Кошелек коричневый",
      price: "7500c"
    },
    wallet5: {
      name: "Кошелек MK",
      images: ["img/wallet/mkwabrbr.jpg", "img/wallet/mkwabrbr1.jpg", "img/wallet/mkwabrbr2.jpg"],
      description: "Кошелек коричневый моногамма",
      price: "7500c"
    },
    wallet6: {
      name: "Кошелек MK",
      images: ["img/wallet/mkwawh1.jpg", "img/wallet/mkwawh3.jpg", "img/wallet/mkwawh2.jpg"],
      description: "Кошелек белый монограмма ",
      price: "7500c"
    },
    wallet7: {
      name: "Кошелек MK",
      images: ["img/wallet/mkwbl1.jpg", "img/wallet/mkwbl3.jpg", "img/wallet/mkwbl2.jpg"],
      description: "Черный крокодил от МК",
      price: "5500c"
    },
    wallet8: {
      name: "Кошелек MK",
      images: ["img/wallet/mkwbr1.jpg", "img/wallet/mkwbr2.jpg"],
      description: "Корочневый от МК",
      price: "5500c"
    },
    wallet9: {
      name: "Кошелек MK",
      images: ["img/wallet/mkwgr.jpg", "img/wallet/mkwgr2.jpg"],
      description: "Серый крокодил от МК",
      price: "5500c"
    },
    wallet10: {
      name: "Кошелек MK",
      images: ["img/wallet/mkwwh1.jpg", "img/wallet/mkwwh2.jpg", "img/wallet/mkwwh3.jpg"],
      description: "Белый монограмма от МК",
      price: "5500c"
    },
    wallet11: {
      name: "Кошелек MK",
      images: ["img/wallet/mkwwhk.jpg", "img/wallet/mkwwhk2.jpg", "img/wallet/mkwwhk3.jpg"],
      description: "Белый крокодил от МК",
      price: "5500c"
    },
    wallet12: {
      name: "Кошелек MK",
      images: ["img/wallet/thwb2.jpg", "img/wallet/thwb1.jpg", "img/wallet/thwb3.jpg"],
      description: "Высококачественный кожаный кошелек ",
      price: "5500с"
    },
    

    bag1: {
      name: "Рюкзак CK ",
      images: ["img/bag/ckruksak3.jpg", "img/bag/ckruksak2.jpg", "img/bag/ckruksak1.jpg"],
      description: "Рюкзак от CK",
      price: "8500c"
    },
    bag2: {
      name: "Сумка ALDO",
      images: ["img/bag/platoc1.jpg", "img/bag/platoc2.jpg", "img/bag/platoc3.jpg"],
      description: "Сумка от ALDO",
      price: "8500c"
    },
    bag3: {
      name: "Сумка MK",
      images: ["img/bag/mkcbwh1.jpg", "img/bag/mkcbwh3.jpg", "img/bag/mkcbwh2.jpg"],
      description: "Багет от MK",
      price: "13000c"
    },
    bag4: {
      name: "Сумка MK",
      images: ["img/bag/mkbagwh2.jpg", "img/bag/mkbagwh3.jpg", "img/bag/mkbagwh1.jpg"],
      description: "Crossbody от MK",
      price: "8900c"
    },
    bag5: {
      name: "Сумка Guess",
      images: ["img/bag/gcbbl1.jpg", "img/bag/gcbbl2.jpg", "img/bag/gcbbl3.jpg"],
      description: "Crossbody от Guess",
      price: "8500c"
    },
    bag6: {
      name: "Сумка KARL",
      images: ["img/bag/karlcat2.jpg", "img/bag/karlcat1.jpg", "img/bag/karlcat3.jpg"],
      description: "Crossbody От KARL",
      price: "10000c"
    },
    bag7: {
      name: "Сумка CК",
      images: ["./img/bag/photo_2024-11-22_19-59-33.jpg", "./img/bag/photo_2024-11-22_19-59-40.jpg", "./img/bag/photo_2024-11-22_19-59-47.jpg"],
      description: "Сумка  от CК",
      price: "8500c"
    },
    bag9: {
      name: "Сумка CK",
      images: ["img/bag/ckbag1.jpg", "img/bag/ckbag2.jpg", "img/bag/ckbag3.jpg"],
      description: "Сумка от CK",
      price: "9500c"
    },
    bag10: {
      name: "Сумка CK",
      images: ["img/bag/ckcb1.jpg", "img/bag/ckcb2.jpg", "img/bag/ckcb3.jpg"],
      description: "Crossbody от CK",
      price: "8500c"
    },
    bag11: {
      name: "Сумка Guess",
      images: ["img/bag/gbc1.jpg", "img/bag/gbc2.jpg", "img/bag/gbc3.jpg"],
      description: "Багет от Guess",
      price: "7500c"
    },
    bag12: {
      name: "Сумка CK",
      images: ["img/bag/ckbbag1.jpg", "img/bag/ckbbag2.jpg", "img/bag/ckbbag3.jpg"],
      description: "Сумка от CK",
      price: "9500c"
    },
    bag13: {
      name: "Сумка MK",
      images: ["img/bag/mkcbbr1.jpg", "img/bag/mkcbbr2.jpg", "img/bag/mkcbbr3.jpg"],
      description: "Crossbody От MK",
      price: "10000c"
    },
    bag14: {
      name: "Сумка MK",
      images: ["img/bag/mkcbpink1.jpg", "img/bag/mkcbpink2.jpg", "img/bag/mkcbpink3.jpg"],
      description: "Crossbody От MK",
      price: "10000c"
    },
    bag15: {
      name: "Сумка CK ",
      images: ["img/bag/ckbagwh.jpg","img/bag/ckbagwh1.jpg", "img/bag/ckbagwh2.jpg", "img/bag/ckbagwh3.jpg"],
      description: "Сумка от CK",
      price: "8900c"
    },
    bag16: {
      name: "Сумка DKNY",
      images: ["img/bag/dknycb1.jpg", "img/bag/dknycb2.jpg"],
      description: "Cкossbody от DKNY ",
      price: "10000c"
    },
    bag17: {
      name: "Рюкзак от CK",
      images: ["img/bag/ckruksakbr.jpg", "img/bag/ckruksakbr1.jpg", "img/bag/ckruksakbr2.jpg"],
      description: "Рюкзак от CK",
      price: "6500c"
    },
    bag18: {
      name: "Рюкзак от KARL",
      images: ["img/bag/ruksak2.jpg", "img/bag/ruksak.jpg", "img/bag/ruksak1.jpg", "img/bag/ruksak3.jpg"],
      description: "Рюкзак от KARL",
      price: "9500c"
    },
    bag19: {
      name: "Рюкзак от Guess",
      images: ["img/bag/gruksakbr1.jpg", "img/bag/gruksakbr2.jpg", "img/bag/gruksakbr3.jpg", ],
      description: "Рюкзак от Guess",
      price: "6500c"
    },
    bag20: {
      name:"Рюкзак от Guess",
      images: ["img/bag/gruksakbl1.jpg",  "img/bag/gruksakbl3.jpg", ],
      description: "Рюкзак от Guess",
      price: "6500c"
    },
    bag21: {
      name: "Сумка через плечо",
      images: ["img/bag/gcbbr1.jpg", "img/bag/gcbbr2.jpg", "img/bag/gcbbr3.jpg", ],
      description: "Crossbody от Guess",
      price: "6500c"
    },
    bag22: {
      name: "Сумка KARL",
      images: ["img/bag/karlbagbl1.jpg", "img/bag/karlbagbl2.jpg", "img/bag/karlbagbl3.jpg", ],
      description: "Сумка от KARL",
      price: "12000c"
    },
    bag23: {
      name: "Сумка KARL",
      images: ["img/bag/karlhr1.jpg", "img/bag/karlhr2.jpg", "img/bag/karlhr.jpg", ],
      description: "Cумка от KARL",
      price: "8000c"
    },
    bag24: {
      name: "Сумка DKNY",
      images: ["img/bag/dknybag1.jpg", "img/bag/dknybag2.jpg", "img/bag/dknybag3.jpg"],
      description: "Сумка от DKNY",
      price: "6500c"
    },
    bag25: {
      name: "Сумка MK",
      images: ["img/bag/mkcbbl1.jpg", "img/bag/mkcbbl2.jpg", "img/bag/mkcbbl3.jpg"],
      description: "Crossbody от  MK",
      price: "10000"
    },
    bag26: {
      name: "Сумка CK",
      images: ["img/bag/ckbagbrbl1.jpg", "img/bag/ckbagbrbl2.jpg", "img/bag/ckbagbrbl3.jpg"],
      description:"Crossbody от CK",
      price: "7000c"
    },
    bag27: {
      name: "Сумка Guess",
      images: ["img/bag/gbag1.jpg", "img/bag/gbag2.jpg", "img/bag/gbag3.jpg"],
      description: "Багет от Guess",
      price: "8500c"
    },
    bag28: {
      name: "Сумка MK",
      images: ["img/bag/mkbagbl1.jpg", "img/bag/mkbagbl2.jpg", "img/bag/mkbagbl3.jpg"],
      description: "Crossbody от MK",
      price: "9900c"
    },
    bag29: {
      name: "Сумка KARL",
      images: ["img/bag/rainbow1.jpg", "img/bag/rainbow2.jpg", "img/bag/rainbow3.jpg"],
      description: "Сумка  от KARL",
      price: "11000с"
    },

    bag8: {
      name: "Сумка MK",
      images: ["img/bag/mkbm1.jpg", "img/bag/mkbm2.jpg", "img/bag/mkbm3.jpg"],
      description: "Сумка  от МК",
      price: "12000с"
    },




    shoes1: {
      name: "Туфли MK",
      images: ["img/boot/mkpink1.jpg", "img/boot/mkpink2.jpg", "img/boot/mkpink3.jpg"],
      description: "37-40р",
      price: "7500с"
    },
    shoes2: {
      name: "Балетки MK",
      images: ["img/boot/mkbrown1.jpg", "img/boot/mkbrown2.jpg", "img/boot/mkbrown3.jpg"],
      description: "36/38р",
      price: "7500с"
    },
    shoes3: {
      name: "Кеды KARL",
      images: ["img/boot/karlbkwh3.jpg", "img/boot/karlbkwh2.jpg", "img/boot/karlbkwh1.jpg"],
      description: "37/38р",
      price: "9900c"
    },
    shoes4: {
      name: "Кеды KARL",
      images: ["img/boot/karlblack1.jpg", "img/boot/karlblack3.jpg", "img/boot/karlblack2.jpg"],
      description: "38р",
      price: "11000с"
    },
    shoes5: {
      name: "Кеды KARL",
      images: ["img/boot/karlh3.jpg", "img/boot/karlh1.jpg", "img/boot/karlh2.jpg"],
      description: "39р",
      price: "8500c"
    },
    shoes6: {
      name: "Кеды KARL",
      images: ["img/boot/karlwh3.jpg", "img/boot/karlwh1.jpg", "img/boot/karlwh2.jpg"],
      description: "36/37р",
      price: "8900с"
    },
    shoes7: {
      name: "Кроссовки LEVIS",
      images: ["img/boot/leviboot1.jpg", "img/boot/leviboot2.jpg", "img/boot/leviboot3.jpg"],
      description: "37р",
      price: "8500с"
    },

    shoes8: {
      name: "Балетки MK",
      images: ["img/boot/mkbalbl1.jpg", "img/boot/mkbalbl2.jpg", "img/boot/mkbalbl3.jpg"],
      description: "39р",
      price: "7500с"
    },
    shoes9: {
      name: "Балетки MK",
      images: ["img/boot/mkbalbr1.jpg", "img/boot/mkbalbr2.jpg", "img/boot/mkbalbr3.jpg"],
      description: "37р",
      price: "9000с"
    },
    shoes10: {
      name: "Балетки MK",
      images: ["img/boot/mkbalwh1.jpg", "img/boot/mkbalwh2.jpg", "img/boot/mkbalwh.jpg"],
      description: "38р",
      price:"9000с"
    },
    shoes11: {
      name: "Туфли MK",
      images: ["img/boot/mkblack1.jpg", "img/boot/mkblack2.jpg", ],
      description: "36/37Р",
      price: "8500р"
    },
    shoes12: {
      name: "Кроссовки MK",
      images: [ "img/boot/mkbootbl1.jpg", "img/boot/mkbootbl2.jpg"],
      description: "38р",
      price: "10000с"
    },
    shoes13: {
      name: "Кроссовки MK",
      images: ["img/boot/mkbootblu1.jpg", "img/boot/mkbootblu2.jpg", "img/boot/mkbootblu3.jpg"],
      description: "39р",
      price: "10500с"
    },
    shoes14: {
      name: "Кроссовки MK",
      images: ["img/boot/mkbootsbl1.jpg", "img/boot/mkbootsbl2.jpg", "img/boot/mkbootsbl3.jpg"],
      description: "37/38р",
      price: "9900с"
    },
    shoes15: {
      name: "Кеды TH",
      images: ["img/boot/thbootgr1.jpg", "img/boot/thbootgr2.jpg", "img/boot/thbootgr3.jpg"],
      description: "37р",
      price: "6500c"
    },


    boot1: {
      name: "Ботинки",
      images: ["img/boot/levibootbl1.jpg", "img/boot/levibootbl2.jpg", "img/boot/levibootbl3.jpg"],
      description: "40/41р",
      price: "7500с"
    },

    boot2: {
      name: "Ботинки",
      images: ["img/boot/mch1.jpg", "img/boot/mch2.jpg", "img/boot/mch3.jpg"],
      description: "43р",
      price: "6500с"
    },

    boot3: {
      name: "Ботинки",
      images: ["img/boot/mfl1.jpg", "img/boot/mfl2.jpg", "img/boot/mfl.jpg"],
      description: "40/41.5р",
      price: "7500с"
    },

    boot4: {
      name: "Ботинки",
      images: ["img/boot/mth1.jpg", "img/boot/mth2.jpg", "img/boot/mth3.jpg"],
      description: "42р",
      price: "6000с"
    },

    boot5: {
      name: "Ботинки",
      images: ["img/boot/mleo1.jpg", "img/boot/mleo2.jpg", "img/boot/mleo3.jpg"],
      description: "42р",
      price: "7500с"
    },

    boot6: {
      name: "Ботинки",
      images: ["img/boot/mle1.jpg", "img/boot/mle2.jpg", "img/boot/mle3.jpg"],
      description: "41р",
      price: "7500с"
    },

    boot7: {
      name: "Ботинки",
      images: ["img/boot/mthbr1.jpg", "img/boot/mthbr2.jpg", "img/boot/mthbr3.jpg"],
      description: "40/41р",
      price: "8500с"
    },

    boot8: {
      name: "Ботинки",
      images: ["img/boot/mthb1.jpg", "img/boot/mthb2.jpg", "img/boot/mthb3.jpg"],
      description: "41р",
      price: "8000с"
    },



  };

  
  
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  function showProductDetails(productId) {
    const product = products[productId];
    const productInfo = document.getElementById("product-info");
  
    let imagesHtml = '';
    product.images.forEach(img => {
      imagesHtml += `<img src="${img}" alt="${product.name}" class="product-detail-img">`;
    });
  
    productInfo.innerHTML = `
      <h2>${product.name}</h2>
      <div class="product-images">${imagesHtml}</div>
      <p>${product.description}</p>
      <p><strong>Цена:</strong> ${product.price}</p>
      <button class="add-to-cart" onclick="addToCart('${productId}')">Добавить в корзину</button>
    `;
  
    document.getElementById("product-details").style.display = "flex";
  }
  
  function closeProductDetails() {
    document.getElementById("product-details").style.display = "none";
  }
  
  function addToCart(productId) {
    cart.push(products[productId]);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
    closeProductDetails();
  }
  
  function updateCart() {
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
  
    cartCount.innerText = cart.length;
  
    if (cart.length > 0) {
      cartItems.innerHTML = '';
      cart.forEach(product => {
        cartItems.innerHTML += `<p>${product.name} - ${product.price}</p>`;
      });
    } else {
      cartItems.innerHTML = "<p>Корзина пуста.</p>";
    }
  }
  
  function closeCart() {
    document.getElementById("cart").style.display = "none";
  }
  
  document.querySelector(".cart-btn").addEventListener("click", function() {
    document.getElementById("cart").style.display = "flex";
  });

  document.getElementById("checkout-btn").addEventListener("click", function() {
    window.location.href="https://wa.me/996702078631";//ссылка на WhatsApp
});
  
  updateCart();

  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  const carousel = document.querySelector('.product-carousel');

  leftArrow.addEventListener('click', () => {
      carousel.scrollBy({ left: -300, behavior: 'smooth' });
  });

  rightArrow.addEventListener('click', () => {
      carousel.scrollBy({ left: 300, behavior: 'smooth' });
  });
  
