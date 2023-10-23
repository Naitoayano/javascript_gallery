// JavaScript

const main = document.querySelector('#main-image');
const thumbs = document.querySelectorAll('.thumb');
const text = document.querySelector('#caption');

thumbs.forEach(function(item, index) {
  item.onclick = function() {
    // console.log(this.dataset.image);
    main.src = this.dataset.image;
  }
});



  //マウスオーバー
thumbs.forEach(function(item, index) {
    item.onmouseover = function() {
      main.src = this.dataset.image;
      text.textContent = this.title;
    }
  });

  //イベントリスナー
//thumbs.forEach(function (item, index) {
//    function change() {
//      main.src = this.dataset.image;
//    }
//    item.addEventListener('mouseover', change);
//  });