  function changeDate(){

  var time = new Date();

  year = time.getFullYear();
  month = time.getMonth();
  day = time.getDate();
  hour = time.getHours();
  min = time.getMinutes();
  sec = time.getSeconds();

  document.querySelector(".year").innerHTML = year + " : ";
  document.querySelector(".month").innerHTML =  month +1 + " : ";
  document.querySelector(".day").innerHTML =  day + " : ";
  document.querySelector(".min").innerHTML =   min + " : ";
  document.querySelector(".hour").innerHTML =  hour  + " : ";
  document.querySelector(".second").innerHTML = sec;


document.querySelector(".time").innerHTML = time;
}

 setInterval (changeDate,1000);