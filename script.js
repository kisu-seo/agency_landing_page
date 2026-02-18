/**
 * Mobile Navigation Toggle & Interaction Scripts
 * 
 * 1. 모바일 햄버거 메뉴 토글 기능 (열기/닫기)
 * 2. 접근성(A11y) 및 UX 개선을 위한 이벤트 핸들링 (외부 클릭, ESC 키)
 * 3. 리사이즈 시 불필요한 애니메이션 방지
 */

// DOM 요소 캐싱: 반복적인 DOM 탐색 비용을 줄이기 위해 변수에 저장합니다.
const menuToggle = document.querySelector('.header__menu-toggle');
const navigation = document.querySelector('.navigation');

/**
 * 메뉴 토글 함수
 * - 'is-open' 클래스를 추가/제거하여 메뉴의 가시성을 제어합니다.
 * - [접근성] aria-expanded 속성을 업데이트하여 스크린 리더에게 현재 상태를 알립니다.
 */
function toggleMenu() {
  const isOpen = navigation.classList.toggle('is-open');

  // 스크린 리더 사용자가 버튼의 상태(열림/닫힘)를 인지할 수 있도록 합니다.
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
}

/**
 * 메뉴 외부 클릭 감지 함수
 * - [UX] 사용자가 메뉴 영역 밖을 클릭했을 때 메뉴를 닫아주어 편의성을 높입니다.
 */
function closeMenuOnOutsideClick(event) {
  // 클릭된 요소(event.target)가 네비게이션이나 토글 버튼 내부에 포함되지 않는 경우
  if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) {
    if (navigation.classList.contains('is-open')) {
      toggleMenu();
    }
  }
}

/**
 * ESC 키 감지 함수
 * - [접근성/UX] 키보드 사용자가 ESC 키를 눌러 메뉴를 쉽게 닫을 수 있도록 합니다.
 * - 메뉴가 닫힌 후 포커스를 다시 토글 버튼으로 이동시켜 키보드 흐름을 유지합니다.
 */
function closeMenuOnEscape(event) {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    toggleMenu();
    menuToggle.focus(); // 포커스 복귀로 접근성 향상
  }
}

/**
 * 리사이즈 시 메뉴 상태 초기화
 * - 모바일에서 메뉴를 열어둔 채로 창 크기를 키웠을 때, 
 *   데스크탑 레이아웃에서도 모바일 메뉴 스타일이 남아있는 버그를 방지합니다.
 */
function closeMenuOnResize() {
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

window.addEventListener('load', () => {
  console.log('🎨 Sunnyside Agency 페이지가 로드되었습니다!');
});


/**
 * Resize Animation Stopper (Debouncing 적용)
 * - 창 크기를 조절(Resize)하는 동안 CSS transition이 발생하여 레이아웃이 깨지거나 
 *   잔상이 남는 현상을 방지합니다.
 * - [성능] setTimeout을 사용한 디바운싱(Debouncing) 기법으로, 
 *   리사이즈가 끝난 후 0.4초 뒤에만 클래스를 제거하여 불필요한 연산을 줄입니다.
 */
let resizeTimer;
window.addEventListener('resize', () => {
  // 1. 리사이즈 시작: 애니메이션 방지 클래스 추가
  document.body.classList.add('resize-animation-stopper');

  // 2. 타이머 초기화: 리사이즈 중에는 타이머가 계속 리셋되어 클래스 제거가 지연됨
  clearTimeout(resizeTimer);

  // 3. 리사이즈 종료: 0.4초 동안 리사이즈 이벤트가 없으면 클래스 제거 (애니메이션 재개)
  resizeTimer = setTimeout(() => {
    document.body.classList.remove('resize-animation-stopper');
  }, 400);
});