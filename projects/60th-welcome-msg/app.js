const submitButton = document.getElementById("submit");
submitButton.addEventListener('click',getMessage);
console.time("test");
console.log("testing testing");
console.log("testing testing");
console.log("testing testing");
console.log("testing testing");
function getMessage(){
    const userText = document.getElementById("input-text").value;
    if(userText===""){
        alert("Abe SALE message to daal");
    }
    document.getElementById("message").innerText = userText;
    document.getElementById("input-text").value = "";



}
console.timeEnd("test");