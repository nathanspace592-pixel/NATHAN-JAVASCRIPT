// const pi = 3.142;
// const radius = 7;

// const area = pi * radius * radius;
// const circumference = 2 * pi * radius;

// console.log(`Radius: ${radius}`);
// console.log(`Area: ${area}`);
// console.log(`Circumference: ${circumference}`);

// const pi = 3.142;
// const diameter = 14;
// const radius = diameter / 2;

// const area = pi * radius * radius;

// console.log(`Diameter: ${diameter}`);
// console.log(`Radius: ${radius}`);
// console.log(`Area: ${area}`);

// const notebookPrice = 200;
// const quantity = 3;
// const taxRate = 0.10;
// const discountRate = 0.05;

// const subtotal = notebookPrice * quantity;
// const discounted = subtotal * (1 - discountRate);
// const total = discounted * (1 + taxRate);

// console.log(`Subtotal: $${subtotal}`);
// console.log(`After discount (5%): $${discounted}`);
// console.log(`Total with tax (10%): $${total.toFixed(2)}`);

const totalMinutes = 350;
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;

console.log(`${totalMinutes} minutes is ${hours} hour(s) and ${minutes} minute(s).`);