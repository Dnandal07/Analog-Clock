setInterval(() => {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    hrt = 30 * h + m / 2;
    minut = 6 * m;
    second = 6 * s;

    hr.style.transform=`rotate(${hrt}deg)`;
    minute.style.transform=`rotate(${minut}deg)`;
    sec.style.transform=`rotate(${second}deg)`;
}, 1000);