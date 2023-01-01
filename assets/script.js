function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  
  // pegar a tag img
  const img = document.querySelector("#profile img")
  
  // substiruir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute('src', './assets/profile-light.png')
  }else {
    //se tiver light mode, adicionar imagem light
    img.setAttribute('src', './assets/profile.png')
  }  
    // html.classList.remove("light")
    // html.classList.add("light")
  }
  

