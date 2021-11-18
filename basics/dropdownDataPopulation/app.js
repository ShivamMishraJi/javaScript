const selectCountry = document.getElementById("selectCountry");
const country = document.getElementById("#country");
const liElement = document.querySelector("li");

// const countryArr = ["India", "US", "UK", "Nigeria", "Canada"];

// var result;
// function populateDropdownData(){
//     console.log("inside populateDropdownData method");
// }
// populateDropdownData();
// console.log("type of: "+typeof(populateDropdownData));

// function getArrayData(){
//     for(elm of countryArr){
//       let li = document.createElement("li");
//       let elmData = document.createTextNode(elm);
//       li.appendChild(elmData);
      
//       document.getElementById("country").appendChild(li);
      
//     }
//   }
//getArrayData();

function makeGetRequest(path) {
    axios.get(path).then(
        (response) => {
            // result = response.data;
            // console.log(result);

            for(let i of response.data){
                let countryData = i.username;


                let li = document.createElement("li");
                let liData = document.createTextNode(countryData);
                // let liData = li.createTextNode(countryData);
                li.appendChild(liData); 
                document.getElementById("country").appendChild(li); 
                // console.log(i.username);
            }
        },
        (error) => {
            console.log(error);
        }
    );
}
makeGetRequest('https://jsonplaceholder.typicode.com/users');

// liElement.addEventListener("click",(e) => {

//     console.log(e.target.value);
// })
// const obj = {
//     name: "Shivam",
//     age: 25,
//     country: "India" 
// };

// // console.log("this is an object: "+obj);
// const obj1 = JSON.stringify(obj);
// console.log("this is an JSON object: "+obj1);




