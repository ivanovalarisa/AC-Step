function incrementInputValue(inpt, increment) {
    const val = inpt.value;
    if(typeof parseInt(val, 10) === "number" && !isNaN(parseInt(val, 10))) {
        if(parseInt(val, 10) + increment > -1) {
            inpt.value = parseInt(val, 10) + increment;
        }
    } else {
        inpt.value = 0;
    }
}

function hold(inpt, target) {
    let increment = 0;
    if(target.hasClass('icon-arrow_down')) {
        increment = -1;
    } else if (target.hasClass ('icon-arrow_up')) {
        increment = 1;
    }
    incrementInputValue(inpt, increment);
}