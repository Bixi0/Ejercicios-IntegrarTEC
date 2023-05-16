function sumEveryElement(numbers, tax, discount) {

    let totalSum = 0

    for (let i = 0; i < numbers.length; i++){
        totalSum += numbers[i]
    }

    totalSum *= tax

    if(discount) {
        totalSum -= totalSum * discount;
    }

    return totalSum.toFixed(2);
  }
  
  const numbers = [10, 20, 30];
  const tax = 0.05;
  let discount = 0.10;
  
  let totalPrice = sumEveryElement(numbers, tax, discount);

  console.log("Total: " + totalPrice);