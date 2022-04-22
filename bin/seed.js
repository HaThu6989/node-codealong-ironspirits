const mongoose = require('mongoose');
const Product = require("../models/Product.model");


mongoose
  .connect('mongodb://localhost/ironborn-ecommerce')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));


const products = [
  {
    title: "Limoncello",
    price: 20,
    imageFile: "limoncello.jfif",
  },
  {
    title: "Single Malt Whisky Yamakazi",
    price: 105,
    imageFile: "whisky.jfif"
  },
  {
    title: "Tequila Don Julio",
    price: 35,
    imageFile: "tequila.jfif"
  },
  {
    title: "Lambrusco",
    price: 18,
  }
];


Product.insertMany(products)
  .then(response => {
    console.log(`${response.length} products created!`);
    console.log(response);

  })
  .catch(err => {
    console.log("error creating products in DB");
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });


