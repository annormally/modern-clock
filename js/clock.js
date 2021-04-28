function clock() {

    var hours = document.getElementById('hours');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');

    var h = new Date().getHours();
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();

    hours.innerHTML = h;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
}

var interval = setInterval(clock, 1000);
