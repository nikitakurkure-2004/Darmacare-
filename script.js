let products = {
  data: [
    {
      productName: "Pixi Beauty Tonic",
      category: "Tonic",
      price: "30",
      image: "images/1.jpg",
    },
    {
      productName: "Purifying Cleanser",
      category: "Cleanser",
      price: "49",
      image: "images/2.jpg",
    },
    {
      productName: "Drunk Elephant Cream",
      category: "Cream",
      price: "99",
      image: "images/3.jpg",
    },
    {
      productName: "Naturiam Serum",
      category: "Serum",
      price: "29",
      image: "images/4.jpg",
    },
    {
      productName: "Hydrating Accelator",
      category: "FaceOil",
      price: "129",
      image: "images/5.jpg",
    },
    {
      productName: "Black Cream Face Mask",
      category: "FaceMask",
      price: "89",
      image: "images/6.jpg",
    },
    {
      productName: "Supergoop! Sunscreen",
      category: "Cream",
      price: "189",
      image: "images/7.jpg",
    },
    {
      productName: "Aztec Secret",
      category: "Clay",
      price: "49",
      image: "images/8.jpg",
    },
    {
      productName: "Acne Treatment",
      category: "Cream",
      price: "30",
      image: "images/9.jpg",
    },
    {
      productName: "Renee Rouleau",
      category: "FaceMask",
      price: "49",
      image: "images/10.png",
    },
    {
      productName: "May Lindstorm",
      category: "FaceOil",
      price: "99",
      image: "images/11.jpg",
    },
    {
      productName: "Mineral",
      category: "Moisturizer",
      price: "29",
      image: "images/12.jpg",
    },
    {
      productName: "Night Magic Face Oil",
      category: "FaceOil",
      price: "129",
      image: "images/13.jpg",
    },
    {
      productName: "Dr.Dennis Skincare",
      category: "FaceMask",
      price: "89",
      image: "images/14.jpg",
    },
    {
      productName: "Kiehl's Face Oil",
      category: "FaceOil",
      price: "189",
      image: "images/15.jpg",
    },
    {
      productName: "SkinCeuticals",
      category: "Cream",
      price: "49",
      image: "images/16.jpg",
    },{
      productName: "Pause Well-Aging",
      category: "Cream",
      price: "30",
      image: "images/17.png",
    },
    {
      productName: "Stacked Skincare",
      category: "Mask",
      price: "49",
      image: "images/18.jpg",
    },
    {
      productName: "Biossance Eye Cream",
      category: "Cream",
      price: "99",
      image: "images/19.jpg",
    },
    {
      productName: "Estee Lauder Night Repair",
      category: "Tonic",
      price: "29",
      image: "images/20.jpg",
    },
    {
      productName: "Avene Cream",
      category: "Cream",
      price: "129",
      image: "images/21.png",
    },
    {
      productName: "Shani Darden Serum",
      category: "Serum",
      price: "89",
      image: "images/22.jpg",
    },
    {
      productName: "Skin Fix Cream",
      category: "Cream",
      price: "189",
      image: "images/23.jpg",
    },
    {
      productName: "Chebulla Active Serum",
      category: "Serum",
      price: "89",
      image: "images/24.jpg",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};