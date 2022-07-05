const Burger = function(size, toppings = [], discount = 0) {
    this.size = size;
    if (discount > 75) {
        discount = 0;
    }
    this.discount = discount;
    // ES5, ES5.1 ... < ES6 (ES2015)
    // if (!toppings) toppings = [];
    this.toppings = toppings;

    this.getPrice = () => {
        const price = this.toppings.reduce((price, topping) => price + topping.price, this.size.price);
        return price - (price / 100 * this.discount);
    };

    this.getKCal = () => {
        return this.toppings.reduce((kcal, topping) => kcal + topping.kcal, this.size.kcal);
    };

    this.addTopping = (topping) => {
        this.toppings.push(topping);
    };

    this.printRecipe = () => {
        console.log(
            `-------------
BURGER SIZE: ${this.size.label}
PRICE $${this.getPrice()} ${this.discount ? `DISCOUNT ${this.discount}%` : ''}
${this.getKCal()} kCal
toppings ${this.toppings.map(e => e.label).join(' | ')}
-------------`);
    };
}

Burger.BURGER_SIZE = {
    SMALL: {
        label: 'S',
        price: 50,
        kcal: 20
    },
    MEDIUM: {
        label: 'M',
        price: 75,
        kcal: 30
    },
    LARGE: {
        label: 'L',
        price: 100,
        kcal: 40
    }
};

Burger.TOPPINGS = {
    CHEESE: {
        label: 'Cheese',
        price: 10,
        kcal: 5
    },
    MUSHROOMS: {
        label: 'Mushrooms',
        price: 15,
        kcal: 5
    },
    FRIES: {
        label: 'Fries',
        price: 20,
        kcal: 10
    },
    BURGER: {
        label: 'Additional burger',
        price: 25,
        kcal: 15
    }
};

const hamBurger = new Burger(Burger.BURGER_SIZE.SMALL);
hamBurger.printRecipe();
console.log(hamBurger);

const cheeseBurger = new Burger(Burger.BURGER_SIZE.MEDIUM, [Burger.TOPPINGS.CHEESE], 30);
cheeseBurger.printRecipe();
console.log(cheeseBurger);

const royalBurger = new Burger(Burger.BURGER_SIZE.LARGE, [], 3, true);
royalBurger.addTopping(Burger.TOPPINGS.BURGER);
if (royalBurger.getPrice() < 250)
    royalBurger.addTopping(Burger.TOPPINGS.CHEESE);

if (royalBurger.getPrice() < 250)
    royalBurger.addTopping(Burger.TOPPINGS.FRIES);

if (royalBurger.getPrice() < 250)
    royalBurger.addTopping(Burger.TOPPINGS.MUSHROOMS);

royalBurger.printRecipe();
console.log(royalBurger);

const getPrice = royalBurger.getPrice;
console.log(`get price from ... ${getPrice()}`);

