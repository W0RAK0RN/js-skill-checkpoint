// Question #6: Calculating Total Price in User's Cart

function filterInStockProducts(products) {
  // เริ่มเขียนโค้ดตรงนี้
  const P=products.filter((products)=>{return products.quantity>0;});
  return P;// P = Products that had been filtered
}
  // ตัวอย่างการใช้งาน
  const products = [
    { name: "apple", quantity: 2 },
    { name: "banana", quantity: 0 },
    { name: "orange", quantity: 5 },
  ];
  
  console.log(filterInStockProducts(products));
  // ผลลัพธ์ที่ได้จากการ Execute Function คือ
  // [{ name: "apple", quantity: 2 }, { name: "orange", quantity: 5 }]
