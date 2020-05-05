function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function showContent() {
  var temp = document.getElementsByTagName("template")[0];
  var clon = temp.content.cloneNode(true);
  document.body.appendChild(clon);
}