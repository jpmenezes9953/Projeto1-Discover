//função p/ mudar tela de fundo 
function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
  
    // pegar a tag img
    const img = document.querySelector("#profile img")
  
    // substituir a imagem
    if (html.classList.contains("light")) {
      // se tiver light mode, adicionar a imagem light
      img.setAttribute("src", "./assets/avatar-light.png")
      alt="Foto de Joao sorrindo"
    } else {
      // set tiver sem light mode, manter a imagem normal
      img.setAttribute("src", "./assets/avatar.png")
      alt="Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo."
    }
  }