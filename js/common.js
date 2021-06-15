const searchEl = document .querySelector('.search');
const searchInputEl = searchEl .querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});
//  input가 소속되어있는 서치라는 클래스가 가지고있는 
//  div요소 아무곳이나 눌러도 포커스가 됌

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
  // 변수에 어떤 html의 속성을 지정
});

searchInputEl.addEventListener('blur', function () {
  //blur = 포커스가 해제되면
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); 
//getFullYear();를 통해 숫자를 반환시켜 해당년도가 
//바뀌면 this-year라는 클래스에 글자내용으로 삽입