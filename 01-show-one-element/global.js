window.addEventListener("load", function(){
  const BUTTON = document.querySelector("#more_text_link")
  const TEXT_TO_SHOW = document.querySelector("#more_text_content")

  BUTTON.addEventListener('click', function(e) {
    TEXT_TO_SHOW.style.display = "initial"
    BUTTON.style.display = "none"
  })
});




















/*
  Atbildes uz jautājumiem


1. Pēc lapas restartēšanas teksts atkal būs paslēpts, jo restartējot lapu skripts arī restartējas.

2. Skripts nestrādās, jo vienkārši JS neredzēs visas html izveidotās klases/id jo būs ātrāk ielādējies nekā html.

3. Metode kas gaida signālu dokumenta par izpildītu eventu.


*/