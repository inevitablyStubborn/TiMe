let a;
let date;
let time;
let formal = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined, formal);
    time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    document.getElementById("clock-time").innerHTML = `${time}` + " on " + `${date}`;
}, 1000);