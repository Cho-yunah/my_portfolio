const $imagesWrapper = document.querySelector('.images-wrapper');
const $slideImg = document.querySelectorAll('.slide-img');
const $prevBtn = document.querySelector('.prev-btn');
const $nextBtn = document.querySelector('.next-btn');
const imgLength = $slideImg.length; // image 전체 길이
let imageCount = 1;

$imagesWrapper.style.transform = `translateX(-${600 * imageCount}px)`;

// clone Node
let cloneFirstNode = $slideImg[0].cloneNode(true);
let cloneLastNode = $slideImg[imgLength - 1].cloneNode(true);

// cloneNode 앞뒤로 붙이기
$imagesWrapper.appendChild(cloneFirstNode);
$imagesWrapper.insertBefore(cloneLastNode, $imagesWrapper.firstElementChild);

// image slide 이동 함수
const moveToNextImage = () => {
  $imagesWrapper.style.transform = `translateX(-${600 * imageCount}px)`;
  $imagesWrapper.style.transition = '300ms';
};

// next image로 이동하기
$nextBtn.onclick = () => {
  imageCount++;
  if (imageCount <= imgLength + 1) moveToNextImage();
  if (imageCount === imgLength + 1) {
    setTimeout(() => {
      $imagesWrapper.style.transform = `translateX(-${600 * imageCount}px)`;
      $imagesWrapper.style.transition = 'none';
    }, 300);
    imageCount = 1;
  }
};

// prev image로 이동하기
$prevBtn.onclick = () => {
  imageCount--;
  if (imageCount >= 0) moveToNextImage();
  if (imageCount === 0) {
    setTimeout(() => {
      $imagesWrapper.style.transform = `translateX(-${600 * imgLength}px)`;
      $imagesWrapper.style.transition = 'none';
    }, 300);
    imageCount = imgLength;
  }
};

// 3초에 한번씩 자동으로 이동
/*const startChangeImage = () => {
  setInterval(() => {
    imageCount++;
    if (imageCount <= imgLength + 1) moveToNextImage();
    if (imageCount === imgLength + 1) {
      setTimeout(() => {
        $imagesWrapper.style.transform = `translateX(-${600 * imageCount}px)`;
        $imagesWrapper.style.transition = 'none';
      }, 300);
      imageCount = 1;
    }
  }, 2500);
};
startChangeImage();*/
