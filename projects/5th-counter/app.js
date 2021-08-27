const lowerCntBtn = document.getElementById('lowerCount');
const addCntBtn = document.getElementById('addCount');

lowerCntBtn.addEventListener('click',lowerCount);
addCntBtn.addEventListener('click',addCount);

let i = 0;
function lowerCount(){
    i--;
    if(i<0){
        document.getElementById('counterValue').style.color = 'red';    
    }
    document.getElementById('counterValue').innerText = i;

}

function addCount(){
    i++;
    if(i>=0){
        document.getElementById('counterValue').style.color = 'green';    
    }
    document.getElementById('counterValue').innerText = i;
}










/* <div class="main-container">
        <h1>Counter</h1>
        <h2 id="counterValue">0</h2>
        <button id="lowerCount">Lower Count</button>
        <button id="addCount">Add Count</button>
    </div> */