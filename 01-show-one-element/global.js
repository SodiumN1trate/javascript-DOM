window.addEventListener("load", function(){
  const button = document.querySelector("#more_text_link")
  const textToShow = document.querySelector("#more_text_content")
  textToShow.style.display = "none"


  button.addEventListener('click', function(e) {
      textToShow.style.display = "initial"
      button.style.display = "none"
  })
});



/*
  Atbildes uz jautājumiem


1. Pēc lapas restartēšanas teksts atkal būs paslēpts, jo restartējot lapu skripts arī restartējas.

2. Skripts nestrādās, jo vienkārši JS neredzēs visas html izveidotās klases/id jo būs ātrāk ielādējies nekā html.

3. Metode kas gaida signālu dokumenta par izpildītu eventu.


*/