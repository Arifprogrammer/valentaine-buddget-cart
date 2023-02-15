function quantityTotalByInput(id, quantityTotal, product){
    const valueString = document.getElementById(id);
    const value = parseInt(valueString.value);
    valueString.value = "";
    if(isNaN(value) || value < 0){
        alert("type a valid number");
    }
    const priceString = document.getElementById(quantityTotal);
    const price = parseInt(priceString.innerText);
    const productTotal = document.getElementById(product);
    productTotal.innerText = value * price;
}

function getBothQuantityTextl(id){
    const quantityTotal = document.getElementById(id);
    return quantityTotal.innerText = parseInt(quantityTotal.innerText);
}

function getTotal(){
    const chocolateTotal = getBothQuantityTextl("chocolate");
    const roseTotal = getBothQuantityTextl("rose");
    const diaryTotal = getBothQuantityTextl("diary");
    const total = chocolateTotal + roseTotal + diaryTotal;
    document.getElementById("total").innerText = total;
    return total;
}

document.getElementById("apply").addEventListener("click",function(){
    const promo = document.getElementById("promo-code");
    const allTotal = document.getElementById("all-total");
    if(promo.value == 101){
        allTotal.innerText = getTotal() - (getTotal() * .01);
    }
    else{
        allTotal.innerText = getTotal();
    }
    promo.value = "";
})