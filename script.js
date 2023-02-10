function toggleMode() {
  const html = document.getElementById('light')
  html.classList.toggle('light')

  const img = document.querySelector('#profile img')

  if (html.classList.contains("light")) {
    img.setAttribute('src', './Assets/avatar_escuro.png')
  } else {
    img.setAttribute('src', './Assets/avatar_claro.png')
  }
}
