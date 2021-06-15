const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // badgeEl.style.display = 'none';
    // gsap.to(요소, 지속시간, 옵션{}); = 애니메이션 동작
    gsap.to(badgeEl, .6, {
      opacity: 0,
      // ,써야됌
      // 오퍼시티 0 = 투명
      display: 'none'
      // js에서는 '' 붙여줘야 인식
    });

    // 버튼 보이기
    gsap.to('#to-top', .2, {
      x: 0
    });
  } else {
    // 배지 보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      // 오퍼시티 1 = 다시 나타남
      display: 'block'
    });
    //버튼 숨기기
    gsap.to('#to-top', .2, {
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 시간(밀리세컨드))

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
    //화면 위치를 해당 픽셀 옮겨줌(버튼 클릭시 맨위로 가는기능)
  });
});



// 이미지 시간차로 나타내는법


const fadeEls = document.querySelectorAll('.visual .fade-in'); 
//뒤에 명시하는 선택자들을 전부 찾아서 fadeEls라는 변수에 할당
fadeEls.forEach(function (fadeEl, index) {
  // 페이드인 이라는 요소들을 반복하는데 
  // 단수의 형태로 받아서 사용 가능
  gsap.to(fadeEl, 1, {
    delay:(index + 1) *.7, // 0.7, 1.4, 2.1, 2.7초씩 딜레이
    // index = 0부터 시작하는 제로 베이스드 넘버링
    opacity: 1
  });
});
// html에서 찾은 페이드인이라는 요소들의 갯수만큼 
//포이치에 적은 함수가 실행된다

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  // 방향: 수직
  autoplay: true,
  loop: true
  //4번째 슬라이드 후 다시 1번째로
});
//자바스크립트 문법으로 스와이퍼라는 함수를 실행

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true, 
  autoplay: {
    delay: 5000 // 500밀리세컨드 = 0.5초
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    // 버튼을 누르면 이전,다음으로 동작하게하는 기능
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
// 프로모션이라는 클래스를 가진 요소를 찾아서 프로모션엘리먼트
// 라는 변수에다가 할당하고
const promotionToggleBtn = document.querySelector('.toggle-promotion');
// 토글-프로모션이라는 클래스를 가진 요소를 찾아서 프로모션토글버튼
// 이라는 변수에다가 할당
let isHidePromotion = false;
// 프로모션 영역이 숨겨져있지 않다
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  // ! = not = 반대값을 반환
  if (isHidePromotion) {
    // true일 시 숨김 처리
    promotionEl.classList.add('hide');
  } else {
    // false일 시 보임 처리
    promotionEl.classList.remove('hide');
  }
  // 프로모션토글버튼을 클릭을 하면 어떤 함수가 실행이 되고
  // 그 함수에서 isHidePromotion의 값을 측정해서 그것에
  // 반대값을 다시 할당
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  // JS 애니메이션 라이브러리
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    { // 옵션
    y: size,
    //소문자 y
    repeat: -1, // 무한
    yoyo: true, // 명령이 끝난 후 자연스럽게 돌아가기
    ease: Power1.easeInOut,
    delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 페이지 처음과 끝을 0~1로 잡고 
                     // 해당 부분을 지날때 셋클래스토글을 실행함
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
    // 메소드 체이닝
});