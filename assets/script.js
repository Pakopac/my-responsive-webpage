window.onload = function(){
  var btnAll = document.querySelector('#btnAll');
  var btnPanorama = document.querySelector('#btnPanorama');
  var btnPortraits = document.querySelector('#btnPortraits');
  var btnMacro = document.querySelector('#btnMacro');
  var btnJournal = document.querySelector('#btnJournal');
  var allImg = document.querySelectorAll('.imgPortfolio');
  var img1 = document.querySelector('#img1');
  var img2 = document.querySelector('#img2');
  var img3 = document.querySelector('#img3');
  var img4 = document.querySelector('#img4');
  var img5 = document.querySelector('#img5');
  var img6 = document.querySelector('#img6');
  var img7 = document.querySelector('#img7');
  var img8 = document.querySelector('#img8');

  function displayAll(){
      for (var i=0; i < allImg.length ; i++){
          allImg[i].style.display = 'block'
      }
  }

  function hideImg(img) {
      for (var i=0; i < img.length; i++) {
          img[i].style.display = 'none'
      }
  }

  function allButton(btn){
      for (var i=0; i < btn.length; i++){
          btn[i].addEventListener('click',function () {
              for (var i=0; i < btn.length; i++) {
                  btn[i].classList.remove('buttonClick');
                  btn[i].classList.add('btnPortfolio');
              }
              displayAll();
              this.classList.remove('btnPortfolio');
              this.classList.add('buttonClick');
          })
      }
  }
  allButton([btnAll,btnPanorama,btnPortraits,btnMacro,btnJournal]);

  btnPanorama.addEventListener('click', function (){
      hideImg([img1,img4,img7])
  });

  btnPortraits.addEventListener('click', function () {
      hideImg([img2,img3])
  });

  btnMacro.addEventListener('click',function () {
      hideImg([img2,img4,img5,img6,img8])
  });

  btnJournal.addEventListener('click',function () {
      hideImg([img1,img3,img4,img7])
  })
};