<body>

  <button onclick="clickCounter()" >cilck</button>
  <button onclick="localStorage.clear()" >reset</button>
<script> 

function clickCounter(){
  if(localStorage.count){
          localStorage.count=Number(localStorage.count) +1; 
  }else{
    localStorage.count =1;
  }
  console.clear();
  console.log(localStorage.count);

}

   </script>

  </body>
