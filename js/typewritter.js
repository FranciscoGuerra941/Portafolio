let i = 0;
let txt = 'Francisco Javier Guerra Cárdenas';
let speed = 50;


function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}