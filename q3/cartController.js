const cart = require("../models/cart");

exports.showItems = (req, res) => {
    let myCart = cart.findAll();
    res.render("cart", { cart: myCart });
}


