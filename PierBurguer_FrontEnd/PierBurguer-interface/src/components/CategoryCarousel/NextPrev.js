const grande = document.getElementById('grande')

let v = 0;
function Moviment(mov){
  const grande = document.getElementById('grande')
  if(mov == 0 && v != 0 ){
    v = v - 1
  }
  if(mov == 1){
    v += mov 
  }
  //el.getBoundingClientRect(); Obtem As cordenadas da tag subondo que el seja uma tag importada pelo getelementbyid
  let i = v * -239.8
  let numberofchildrens = grande.childElementCount;
  let tamanho = 0;
  if((numberofchildrens * 239) > window.screen.width){
    for(let a = 0; (window.screen.width / a) > 239.8 ; a++ ){
      tamanho = a
    }
  }else{
    tamanho = tamanho = 4
  }

  let again = (numberofchildrens - tamanho)
  if(v < again + 1 ){
  grande.style.transform = `translateX(${i}px)`
  }
  
  if(v > (again)){
    v = again 
  }
}

export default Moviment

