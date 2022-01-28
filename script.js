document.getElementById('button').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display = "flex";
  
  });
  document.querySelector('.close').addEventListener('click',function(){
      document.querySelector('.bg-modal').style.display = 'none'
  });

  var moon = document.getElementById("moon");
  moon.onclick = function(){
      document.body.classList.toggle("dark-theme");
      if(document.body.classList.contains("dark-theme")){
          moon.src = "image/sun.png";
      }else{
          moon.src = "image/moon.png";
  }
}

