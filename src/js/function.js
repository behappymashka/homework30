function calculate() {
    const sizeValue = document.querySelector('input[name="size"]:checked').value;
    const size = sizeValue === 'small' ? SIZES.SMALL : SIZES.LARGE;

    const selectedTopping = document.querySelector('input[name="topping"]:checked');
    if (!selectedTopping) {
        alert("Выберите начинку!");
        return;
    }

    const myHamburger = new Hamburger(size);

    if (document.getElementById('cheese').checked) {
        myHamburger.addTopping(TOPPINGS.CHEESE);
    }
    if (document.getElementById('salad').checked) {
        myHamburger.addTopping(TOPPINGS.SALAD);
    }
    if (document.getElementById('potato').checked) {
        myHamburger.addTopping(TOPPINGS.POTATO);
    }

    if (document.getElementById('spice').checked) {
        myHamburger.addAddon(ADDONS.SPICE);
    }
    if (document.getElementById('mayo').checked) {
        myHamburger.addAddon(ADDONS.MAYO);
    }

    document.getElementById('result-price').innerText = "Стоимость: " + myHamburger.getPrice() + " тугриков";
    document.getElementById('result-calories').innerText = "Калорийность: " + myHamburger.getCalories();
}

function clearSelection() {

    document.querySelectorAll('input[name="topping"]:checked').forEach(radioButton => {
        radioButton.checked = false;
    });

    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        checkbox.checked = false;
    });

    document.getElementById('result-price').innerText = "Стоимость: ";
    document.getElementById('result-calories').innerText = "Калорийность: ";
}


