document.getElementById('button1').addEventListener('click', () => {
  document.getElementById('audio1').play()
})

document.getElementById('button1').addEventListener('dblclick', () => {
  document.getElementById('audio1').pause()
})


document.getElementById('button2').onclick = function() {
  document.getElementById('div1').hidden = true;
}
