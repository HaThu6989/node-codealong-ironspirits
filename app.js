const express = require('express')
const app = express()

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static('public'));



/* Routes  */

app.get("/", (req, res, next) => {
  // res.sendFile(__dirname + '/views/home.html');
  res.render('home');
})


app.get("/about", (req, res, next) => {
  // res.sendFile(__dirname + '/views/about.html');
  res.render('about');
})

app.get("/contact", (req, res, next) => {
  // res.sendFile(__dirname + '/views/contact.html');
  res.render('contact');
})

app.get("/limoncello", (req, res, next) => {
  // res.sendFile(__dirname + '/views/product-limoncello.html');
  // res.render("view", info)
  const data = {
    title: "Limoncello",
    price: 20,
    imageFile: "limoncello.jfif",
    stores: ["Online", "Albacete", "Freiburg", "Amsterdam"]
  }
  res.render("product", data); //product = name file products.hbs
});


app.get("/whisky", (req, res, next) => {
  // res.sendFile(__dirname + '/views/product-whisky.html');
  const data = {
    title: "Single Malt Whisky Yamakazi",
    price: 105,
    imageFile: "whisky.jfif"
  }
  res.render("product", data);

});


app.get("/tequila", (req, res, next) => {
  // res.sendFile(__dirname + '/views/product-tequila.html');
  const data = {
    title: "Tequila Don Julio",
    price: 35,
    // imageFile: "tequila.jfif"
  }
  res.render("product", data);
});


app.listen(3001, () => {
  console.log("server listening to requests ...c");
});