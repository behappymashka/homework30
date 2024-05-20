class Hamburger {
    constructor(size) {
        this.size = size;
        this.toppings = [];
        this.addons = [];
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    addAddon(addon) {
        this.addons.push(addon);
    }

    calculatePrice() {
        let price = this.size.price;
        for (let topping of this.toppings) {
            price += topping.price;
        }
        for (let addon of this.addons) {
            price += addon.price;
        }
        return price;
    }

    calculateCalories() {
        let calories = this.size.calories;
        for (let topping of this.toppings) {
            calories += topping.calories;
        }
        for (let addon of this.addons) {
            calories += addon.calories;
        }
        return calories;
    }

    getPrice() {
        return this.calculatePrice();
    }

    getCalories() {
        return this.calculateCalories();
    }
}