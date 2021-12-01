// const btn = document.getElementById('btn');
// btn.addEventListener('click',main);

// // const setTimer = (duration) => {
// //     const promise = new Promise((resolve,reject)=>{
// //         setTimeout(()=>{
// //             resolve();            
// //         },duration);
// //     });
// //     return promise;
// // }

// let currSeconds = 0;
// let timeDuration = 10;

// const startIdleTimer = () =>{
//     console.log("inside startIdleTimer");
//         currSeconds++;
//         if(currSeconds>5){
//             console.log(`idle for ${currSeconds}. Logging Out!!`);
//         }
        
// }

// // const resetTimer = () => {
// //     console.log("inside resetTimer");
// //     currSeconds = 0;
// //     // timeDuration--;

// // }

// function main(){
//     console.log("inside main");
//     while(timeDuration>1){

//         setTimeout(()=>{
//             startIdleTimer();
//             if(window.onmousemove || window.onmousedown ||window.ontouchstart || window.onclick ||window.onkeypress){
//                 currSeconds = 0;
//             }
//         },1000);  
//         timeDuration--;
//     // });
//     }
//     console.log("outside of while loop");

// }

// // main();
///////////////////////////////////////////////////////////////////////////////
const btn = document.getElementById('btn');
btn.addEventListener('click',idleTimer);
function idleTimer(){
    let t;

    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer;
    window.ontouchstart = resetTimer; 
    window.onclick = resetTimer;
    window.onkeypress = resetTimer;
    
    function resetTimer(){
        clearTimeout(t);
        // setTimeout(timer,1000);
        setInterval(timer,1000);
    }

    function timer(){
        // if(t>)
        // let a = 0;
        // setInterval(()=>{
        //     console.log("t: "+t);
        // },1000);
        console.log("inside timer");
        // return t;
    }
}
