export function validate(){

  const alertPassword1 = document.getElementById('validSAmePassword1')
  const alertPassword2 = document.getElementById('validSAmePassword2')
  const inputPassword = document.getElementById('password')
  const inputPasswordConfirm = document.getElementById('ConfirmPassword')
  const size = inputPassword.value.length
  if(inputPasswordConfirm.value != inputPassword.value 
    &&  inputPassword.value.length >= size 
    &&  inputPasswordConfirm.value.length >= size){
    alertPassword1.innerHTML = 'The passaword need be the same'
    alertPassword2.innerHTML = 'The passaword need be the same'
  }else{
    alertPassword1.innerHTML = ''
    alertPassword2.innerHTML = ''
  }
}

