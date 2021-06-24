function openNav() {
  document.getElementById('mySideNav').style.animation = 'expand 0.3s forwards'
  //closebtn
  document.getElementById('closeBtn').style.display = 'block'
  document.getElementById('closeBtn').style.animation = 'show 0.3s forwards'

  //overlay
  document.getElementById('overlay').style.display = 'block'
  document.getElementById('overlay').style.animation = 'show 0.3s'
}

function closeNav() {
  document.getElementById('mySideNav').style.animation = 'collapse 0.3s forwards'
  document.getElementById('closeBtn').style.animation = 'hide 0.3s'

  //overlay
  document.getElementById('overlay').style.animation = 'hide 0.3s'

  setTimeout(() => {
    document.getElementById('closeBtn').style.display = 'none'
    document.getElementById('overlay').style.display = 'none'
  }, 300)
}
