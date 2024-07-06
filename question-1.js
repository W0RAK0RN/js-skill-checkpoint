// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
inventory.apple.quantity = 200;inventory.orange = { price: 20, quantity: 300 };
let pt=0;// pt = Total Value of the items
for (let t in inventory){pt=pt+(inventory[t].price*inventory[t].quantity)} // Noodles :3
console.log(`Total inventory value: ${pt} Baht`);