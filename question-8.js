// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
const FU = () => {return fetch("https://jsonplaceholder.typicode.com/users");};// FU = Fetching User :P
const HRe=(rs)=>{return rs.json();};// HRe = Handle the Response
const OnS=(d)=>{let newUsers=d.map(user => user.name);console.log(newUsers);}; // OnS = On Success  
FU().then(HRe).then(OnS);