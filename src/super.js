var a = 1;

function info() {
    for (var i = 10; i > a; i--) {
        console.log('info',i,a);
    }
}

document.getElementById("startButton").addEventListener("click", function(event) {
    // display the current click count inside the clicked div
    document.getElementById('test').innerHTML = "click count: " + event.detail;
    info();
    console.log(event);
});
