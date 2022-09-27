const prod = require("../models/product");
const cart = require("../models/cart");


exports.productDisplay = (req, res) => {
    const pro = prod.findAll();
    res.render("product", { products: pro });
}

exports.addItemToCart = (req, res) => {
    let item = prod.findById(req.body.myId)[0];
    cart.save(item);
    //res.send(String(item));
    prod.decreaseQuant(item);
    console.log(cart.getCart());
    res.redirect("product");
}