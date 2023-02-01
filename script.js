let sideMenu = document.getElementById("sidemenu");
function openMenu(){
    sideMenu.style.right = "0";
}
function closeMenu(){
    sideMenu.style.right = "-200px";
}

//-----------------------------------contact form------------------------------------------- 

  const scriptURL = 'https://script.google.com/macros/s/AKfycbycDX_impNLvHlHCeAboq25e1lrXQgkVpsgo5wwgObzH-QKwfS8me6dBXaIDcEpkpIK/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg =document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
            msg.innerHTML = "Message send successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

