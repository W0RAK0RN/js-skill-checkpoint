// Question 5: Calculating Total Price in User's Cart

function calculateTotalPrice(cart) {
  // เริ่มเขียนโค้ดตรงนี้
  let tc=0;
  for(let item of cart){tc+=item.price*item.quantity;}
  return tc; // tc = total cost of the items in User's Cart
}
// ตัวอย่างการใช้งาน

const cart = [
  { name: "apple", price: 10, quantity: 2 },
  { name: "banana", price: 15, quantity: 1 },
  { name: "orange", price: 5, quantity: 3 },
];

console.log(calculateTotalPrice(cart)); // ผลลัพธ์จากการ Execute ตัว Function จะต้องได้: 50