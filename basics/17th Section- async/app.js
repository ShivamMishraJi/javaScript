const button = document.getElementById("btn");

// const setTimer = duration => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("done!");
//         }, duration);
//     });
//     return promise;
// };

function trackUserHandler(){
    navigator.geolocation.getCurrentPosition((posData)=>{
        setTimer(2000).then(data => {
            
        });

    },error => {
        console.log(error);
    });
}

function trackUserHandler(){
    // console.log("Clicked!");
    navigator.geolocation.getCurrentPosition(posData => {
            // console.log("inside posData Callback");
            setTimer(2000).then(data => {
                console.log(data,posData);
            });

    }, error => {
        console.log(error);
    }
    );
    console.log("Getting position co-ordinates...")
}

button.addEventListener("click",trackUserHandler)

// let result = 0;

// for(let i=0; i<100000000; i++){
//     result += i;
// }

// console.log(result);