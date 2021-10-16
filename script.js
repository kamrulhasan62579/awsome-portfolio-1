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



// for animation text ::::::::::::::::::::
var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
