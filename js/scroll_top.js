// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener('DOMContentLoaded', function () {
  // 「window.scroll」を使ってスクロールさせましょう
  // ボタンの表示・非表示のアニメーションは不要とします
  const scrollTopBtn = document.querySelector('.js-scroll-top');
  scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    });
  });
}, false);

window.addEventListener('scroll', function () {

  const scrollTopClass = document.querySelector('.scroll-top');

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 30) {
    scrollTopClass.classList.add('show');
  }else {
    scrollTopClass.classList.remove('show');
  };

});

