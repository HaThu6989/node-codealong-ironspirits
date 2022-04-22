
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//ironborn-ecommerce: name of database 
mongoose
  .connect('mongodb://localhost/ironborn-ecommerce')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));


// Task: get all products with price above 30
Product.find({ price: { $gte: 30 } })
  .then(productsArr => console.log("Products with price above 30 ...", productsArr))
  .catch(error => console.log("error getting a product in DB", error));

// Bonus:
// - find a document by Id
Product.findById('6261495d150bffec93f07e87')
  .then(product => console.log("Product with id 6261495d150bffec93f07e87 ...", product))
  .catch(error => console.log("error getting a product in DB", error));


// Add `store: ["online"]` to all products in the DB
Product.updateMany({ store: "online" })
  .then(response => console.log("Product updated successful"))
  .catch(error => console.log("error updating a product in DB", error));


// Add the tag "best-sellers" to all products
Product.updateMany({ price: { $lt: 5 } }, { $push: { tags: "best-sellers" } })
  .then(response => console.log("products updated successfully"))
  .catch(err => console.log("error updating products from DB", err));

// example with findByIdAndUpdate: update the price of one product to + 40
Product.findByIdAndUpdate('6261495d150bffec93f07e87'
  , { price: 40 })
  .then(response => console.log("products updated successfully"))
  .catch(err => console.log("error updating products from DB", err));

//returnDocument: 'after'
Product.findByIdAndUpdate("6261339a879713ba8ae4b5d0", { price: 60 }, { returnDocument: 'after' })
  .then(productFromDB => {
    console.log("price of limonchelo was updated to 60")
    console.log(productFromDB)
  })
  .catch(err => console.log("error updating products from DB", err));


// Product.create({ title: "tequila", price: 35, hasStock: true, tags: ["spirits", "best-sellers"] })
//   .then(product => console.log("a new product was created", product))
//   .catch(error => console.log("error creating a product in DB", error));


/***insertMany Method***/
// const data = [
//   {
//       title: "Lambrusco Deluxe",
//       price: 22,
//       tags: ["drink"]
//   },
//   {
//       title: "Beer",
//       price: 2,
//       tags: ["drink"]
//   }
// ];

// Product.insertMany(data)
//   .then(product => console.log("a new product was created", product))
//   .catch(error => console.log("error creating a product in DB", error));


/***Creat Model***/
//Product: name of Model Product, ex: Product.find() / Product.delete() / ....
//{ title: String, price: Number }: schema of Model
// const Product = mongoose.model('Product', productSchema);



/***Creat Method***/
// Product.create({ title: "limoncello", price: 20 })
//   .then((product) => { console.log("a new product was created", product) })
//   .catch(error => console.log('Error connecting to mongo', error))

// Product.create({ title: "whisky", price: 105 })
//   .then(product => console.log("a new product was created", product))
//   .catch(error => console.log("error creating a product in DB", error));


/***Find Method***/
// Product.find({price: {$gt: 20} })
//   .then((allProducts) => { console.log(allProducts) })
//   .catch(error => console.log("error getting products from DB", error));


/***Lab today***/
// Recipe.create({ title: "kao shoi", price: 25 })
//   .then(product => {
//     console.log("a new product was created", product);
//     return Recipe.find()
//   })
//   .then()
//   .then(() => mongoose.connection.close())
//   .catch(error => console.log("error creating a product in DB", error));

// //Close connection: nếu để ngoài thế này sẽ đc thực thi trc then then then => return Recipe.find() ko đc thực hiện => cho close connection trong then
// mongoose.connection.close()

// // Dùng Promise.all
// const promiseOne = Recipe.create({title: "kao shoi"})
// const promiseTwo = Recipe.find()
// Promise.all([promiseOne, promiseTwo])


