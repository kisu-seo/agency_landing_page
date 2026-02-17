/**
 * 모바일 네비게이션 토글 기능
 * 햄버거 메뉴 버튼을 클릭하면 네비게이션 메뉴가 열리고 닫힙니다.
 */

// DOM 요소 선택
const menuToggle = document.querySelector('.header__menu-toggle');
const navigation = document.querySelector('.navigation');

/**
 * 메뉴 토글 함수
 * 메뉴를 열고 닫는 기능을 수행합니다.
 */
function toggleMenu() {
  // 'is-open' 클래스를 토글 (있으면 제거, 없으면 추가)
  const isOpen = navigation.classList.toggle('is-open');
  
  // aria-expanded 속성 업데이트 (접근성)
  // 스크린 리더 사용자에게 메뉴가 열렸는지 닫혔는지 알려줌
  menuToggle.setAttribute('aria-expanded', isOpen);
  
  // aria-label 텍스트 업데이트
  menuToggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
}

/**
 * 메뉴 외부 클릭 시 닫기
 * 사용자가 메뉴 바깥을 클릭하면 메뉴를 자동으로 닫습니다.
 */
function closeMenuOnOutsideClick(event) {
  // 클릭한 요소가 메뉴나 메뉴 버튼이 아닌 경우
  if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) {
    // 메뉴가 열려있다면 닫기
    if (navigation.classList.contains('is-open')) {
      toggleMenu();
    }
  }
}

/**
 * ESC 키로 메뉴 닫기
 * 키보드 사용자를 위한 접근성 기능
 */
function closeMenuOnEscape(event) {
  // ESC 키를 눌렀을 때 (키 코드: 27 또는 key: 'Escape')
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    toggleMenu();
    // 포커스를 메뉴 버튼으로 이동 (키보드 네비게이션 개선)
    menuToggle.focus();
  }
}

/**
 * 반응형: 화면 크기가 768px 이상이면 메뉴 자동 닫기
 * 데스크탑에서는 항상 메뉴가 표시되므로, 모바일 메뉴 상태를 초기화합니다.
 */
function closeMenuOnResize() {
  // 화면 너비가 768px 이상 (태블릿/데스크탑)
  if (window.innerWidth >= 768 && navigation.classList.contains('is-open')) {
    navigation.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', '메뉴 열기');
  }
}

// 이벤트 리스너 등록
menuToggle.addEventListener('click', toggleMenu);
document.addEventListener('click', closeMenuOnOutsideClick);
document.addEventListener('keydown', closeMenuOnEscape);
window.addEventListener('resize', closeMenuOnResize);

/**
 * 페이지 로드 완료 후 실행
 * 모든 이미지와 리소스가 로드된 후 실행할 코드를 작성합니다.
 */
window.addEventListener('load', () => {
  // 페이지 로드 완료 시 실행할 코드 (현재는 없음)
  console.log('🎨 Sunnyside Agency 페이지가 로드되었습니다!');
});
