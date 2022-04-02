//скрипт должен быть в конце html, иначе не сработает(так как не увидит элементов )

let captionsList = document.querySelectorAll('.caption-item');
let unitsList = document.querySelectorAll('.unit');
console.log(captionsList)

captionsList.forEach(function (item, index) {
  item.addEventListener('mouseover', function () {
     unitsList[index].classList.add('hovered');
  });
  
  item.addEventListener('mouseout', function () {
     unitsList[index].classList.remove('hovered');
  });
});