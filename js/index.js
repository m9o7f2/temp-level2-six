var $list = document.getElementById("lis"),
  $click = document.getElementById("click");
var $cheack = true;
$click.onclick = function () {
  if ($cheack == true) {
    $click.src = "img/icon-close.svg";
    $list.classList.add("show");
    $cheack = false;
  } else {
    $click.src = "img/icon-hamburger.svg";
    $list.classList.remove("show");
    $cheack = true;
  }
};
