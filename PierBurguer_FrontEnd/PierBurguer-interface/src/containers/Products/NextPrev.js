import { number } from "prop-types";


let cont = 0;
function Moviment(id){
   const position = document.getElementById(`gridmenu`)
  // if(mov == 0 && v != 0 ){
  //   v = v - 1
  // }
  // if(mov == 1){
  //   v += mov
  // }

  
  // grande.style.transform = `translateX(${i}px)`
  if(window.screen.width <= 495){ 
    const middle =  (window.screen.width/2);
    if(id.clientX >= (middle + (middle/3))){
      cont++
      const backup = -(cont * 50)
      position.style.transform = `translateX(${backup}vw)`
    }
    if(id.clientX <= (middle - (middle/3))){
      
      if(cont >= 1){
      const backup = (-(cont * 50)) + 50  
      position.style.transform = `translateX(${backup}vw)`  
      cont--
      }
      
    }
    console.log(middle);
  }
}
  

export default Moviment

