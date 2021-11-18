const btn = document.getElementById("btn");

const setTimer = duration => {
    // promise object creattion from Promise Constructor/Class
    //promise object takes a function as a parameter
    //that function takes 2 parameters - resolve, reject.
    // which are also functions sent by the browser
    
    const promise = new Promise((resolve, reject) => {
        setTimeout(()=> {
            // resolve();
            resolve("Done with Promise in resolve");
        },duration);
    });
    return promise;
};

const getLocation = opts => {
    const promise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((success)=>{
            resolve(success);
        },
        (error)=>{
            reject(error);
            // console.log(error);
        },opts);
    });
    return promise;
} 


async function trackUserHandler(){
    // navigator.geolocation.getCurrentPosition((position)=>{console.log()}, ()=>{})
    // let positionData;

    try{
        const posData = await getLocation();
        const timerData = await setTimer(3000);
    }catch(error){
        console.log(error);
    }
    console.log(posData,timerData);
    // getLocation()
    // .then((posData)=>{
    //     positionData = posData;
    //     // console.log("inside promisified getLocation "+posData);
    //     return setTimer(3000);
    // },(err)=>{
    //     console.log(err);

    // })
    // .then((data)=>{
    //     console.log(data,positionData);
    //     // data -- "Done with Promise in resolve" from line 12
    // });

    // navigator.geolocation.getCurrentPosition(
    //     (posData) => {

    //         console.log("inside posData");
            
    //         setTimer(3000).then( (data="shivam") => {
    //             console.log(data,posData);
    //         });
    //         // setTimeout(() => {
    //         //         console.log(posData);
    //         //     },3000
    //         // );
    //      },
    //     (error) => {
    //         console.log(error);
    //     }
    // );

    setTimer(3000).then(() => {
        console.log("niche wala timer")
    });

    // setTimeout(() => {
    //     console.log("niche wala timer")
    // },5000);
    console.log("chechking async nature");
}

btn.addEventListener("click", trackUserHandler);