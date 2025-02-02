const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Rolls-Royce",
    price: 450000,
    colors: [
      {
        code: "black",
        img: "./img/rolls.png",
      },
      {
        code: "white",
        img: "./img/rolls2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Bentley",
    price: 200000,
    colors: [
      {
        code: "black",
        img: "./img/bent.png",
      },
      {
        code: "red",
        img: "./img/bent2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Mercedes-Benz",
    price: 300000,
    colors: [
      {
        code: "black",
        img: "./img/merc.png",
      },
      {
        code: "red",
        img: "./img/merc2.png",
      },
    ],
  },
  {
    id: 4,
    title: "BMW",
    price: 350000,
    colors: [
      {
        code: "blue",
        img: "./img/bmw.png",
      },
      {
        code: "yellow",
        img: "./img/bmw2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Audi",
    price: 100000,
    colors: [
      {
        code: "red",
        img: "./img/audi.png",
      },
      {
        code: "black",
        img: "./img/audi2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
