"use strict";

window.runTask = function () {
  // 1. Celsius -> Fahrenheit
  let celsius = 25;
  let fahrenheit = (celsius * 9) / 5 + 32;
  console.log("Celsius:", celsius);
  console.log("Fahrenheit:", fahrenheit);

  // 2. Days in month -> hours and minutes
  let daysInMonth = 30;
  let hoursInMonth = daysInMonth * 24;
  let minutesInMonth = hoursInMonth * 60;
  console.log("Days in month:", daysInMonth);
  console.log("Hours in month:", hoursInMonth);
  console.log("Minutes in month:", minutesInMonth);

  // 3. Health and energy
  let health = 100;
  let energy = 80;
  health = health - 20;
  energy = energy - 15;
  console.log("Health after damage:", health);
  console.log("Energy after actions:", energy);

  // 4. Discount
  let totalPrice = 1500;
  let discount = 0.1;
  let discountedPrice = totalPrice * (1 - discount);
  console.log("Total price:", totalPrice);
  console.log("Discounted price:", discountedPrice);

  // 5. Math.floor()
  const floatNumber = 12.78;
  const roundedDown = Math.floor(floatNumber);
  console.log("Rounded down:", roundedDown);

  // 6. parseFloat()
  const floatString = "45.67";
  const parsedFloat = parseFloat(floatString);
  console.log("Parsed float:", parsedFloat);

  // 7. parseInt()
  const intString = "123";
  const parsedInt = parseInt(intString);
  console.log("Parsed int:", parsedInt);

  // 8. Math.sqrt()
  let number = 64;
  let sqrtNumber = Math.sqrt(number);
  console.log("Square root:", sqrtNumber);

  // 9. parseInt() + toString()
  const integer = 42;
  const stringNumber = "256";

  const convertedInt = parseInt(stringNumber);
  console.log("Converted to int:", convertedInt);

  const convertedString = integer.toString();
  console.log("Converted to string:", convertedString);
};