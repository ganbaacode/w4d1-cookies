const prodList = [
    { id: 1, name: "bitcoin", price: 15000, quantity: 5 },
    { id: 2, name: "ethereum", price: 1200, quantity: 20 },
    { id: 3, name: "xrp", price: 0.45, quantity: 6000 }
]

class product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.price = price;
        this.name = name;
        this.quantity = quantity;
    }

    get quantity() {
        return this.quantity;
    }


    static findAll() {
        return prodList;
    }

    static decreaseQuant(x) {
        if (x.quantity > 0) {
            x.quantity -= 1;
        }

    }

    static findById(i) {
        return prodList.filter(x => x.id == i);
    }
}



module.exports = product;