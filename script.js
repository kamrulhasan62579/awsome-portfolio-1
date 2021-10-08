// যে সকল আমি পারসি না ইন্টারনেট সারা তার লিস্ট
// $(document).ready(function(){
//     $(window).scroll(function(){
//         if (this.scrollY > 20) {
//             $('.navbar').addClass("sticky")
//         }else{
//             $('.navbar').removeClass("sticky")

//         }
//     });
//     // toggle menu script
//     // $('.menu-btn').click(function(){
//     //     $('.navbar .menu').toggleClass("acti")
//     // })
// })

// duration script start  ::: jegula ami pari 
setInterval(() => {
    const day = document.querySelector(".day .num")
    const hour = document.querySelector(".hour .num")
    const minute = document.querySelector(".minute .num")
    const second = document.querySelector(".second .num")

    let currentDate = new Date().getTime();
    let lunchDate = new Date("oct 08, 2021 13:00:00");
    let duration =  currentDate - lunchDate ;

    let days = Math.floor(duration / (1000*60*60*24));
    let hours = Math.floor((duration % (1000*60*60*24)) / (1000*60*60));
    let minutes = Math.floor((duration % (1000*60*60)) / (1000*60));
    let seconds = Math.floor((duration % (1000*60)) / (1000));

    day.innerHTML = days;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;

    if (days < 10) {
        day.innerHTML = "0" + days; 
    }
    if (hours < 10) {
        hour.innerHTML = "0" + hours; 
    }
    if (minutes < 10) {
        minute.innerHTML = "0" + minutes; 
    }
    if (seconds < 10) {
        second.innerHTML = "0" + seconds; 
    }
}, 1000);