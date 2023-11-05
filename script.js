document.getElementById('1').addEventListener('click', () => {
  document.querySelector('audio').play()
})

document.querySelector('button').addEventListener('dblclick', () => {
  document.querySelector('audio').pause()
})
