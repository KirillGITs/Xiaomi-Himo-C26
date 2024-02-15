function changeImage(color) {
  var imageElement = document.getElementById('productImage');

  switch (color) {
    case 'gray':
      imageElement.src = './imgs/gray.png'; // Замените на фактический путь к вашему серому изображению
      break;
    case 'white':
      imageElement.src = './imgs/himo_c26_10wwwww02.png'; // Замените на фактический путь к вашему белому изображению
      break;
    case 'red':
      imageElement.src = './imgs/red.png'; // Замените на фактический путь к вашему красному изображению
      break;
    default:
      break;
  }
}
