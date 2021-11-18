const btn = document.getElementById("btn");

function trackUserHandler(){
    navigator.geolocation.getCurrentPosition(
        (posData) => {
            console.log("inside posData");
            setTimeout(() => {
                    console.log(posData);
                },3000
            );
        },
        (error) => {
            console.log(error);
        }
    )
    console.log("chechking async nature");
}

btn.addEventListener("click", trackUserHandler);