
  const countDownDate = new Date("December 24, 2022 00:00:00").getTime();
  const interval = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.querySelector("h2#eveClock").innerHTML = days + "d" + hours + "h" + minutes + "m" + seconds + "s";

    if(distance < 0) {
      clearInterval(x);
      document.getElementsById("eveClock").innerHTML = "D-day";
    }
  },1000);