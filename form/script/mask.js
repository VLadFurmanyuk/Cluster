var element = document.getElementById('number');
var maskOptions = {
  mask: '0000000000',
  lazy: true,
}
var mask = new IMask(element, maskOptions);
