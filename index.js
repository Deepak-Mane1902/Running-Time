const currentTime=()=>{
    let curTime = new Date().toLocaleTimeString();
    document.getElementById("clock").innerText=curTime;
}

setInterval(() => {
    currentTime();
}, 1000);