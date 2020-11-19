console.log("Hello, Space"); 
let name = "Arsen Manukjan";
let age  = 16;
let born = true;
let city = "Tallinn";
let commentary = "";
let drivinglicense = "";
console.log(`Character: ${name}. Age: ${age}. City: ${city}. `);
if(born){
    commentary = "born in 25 December.";
} else {
    commentary = "born in December 2003.";
}
console.log(`character ${name} ${commentary}`)
if(age < 16) {
   drivingLicense = `${name} is too young to drive a car©.`;
} else {
   drivingLicense = `${name} is old enough to drive a car©.`;
}
console.log(drivingLicense);
const html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>City: ${city}</li>
        <li>I ${commentary}</li>
        <li>${drivingLicense}</li>
    </ul>  



`;
document.body.innerHTML = html;