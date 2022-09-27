

let cart = null;

module.exports = class cart {

    static save(product) {

        if (cart) {

        } else {
            cart = { products: [], totalPrice: 0 };
            product.quantity = 1;
            cart.products.push(product);
            cart.totalPrice = product.price;
        }
    }

    static getCart() {
        return cart;
    }

}
