# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Tablet: 768px
- Desktop: 1024px (original design: 1440px)

### Breakpoints

반응형 디자인을 위한 브레이크포인트입니다. **Mobile-First** 접근법을 사용하는 것을 권장합니다.

| Device | Min Width | CSS Media Query |
|--------|-----------|------------------|
| Mobile | 375px | (기본 스타일) |
| Tablet | 768px | `@media (min-width: 768px)` |
| Desktop | 1024px | `@media (min-width: 1024px)` |


## Colors

### Neutral

- **White**: `#FFFFFF` / `rgb(255, 255, 255)` / `hsl(0°, 100%, 100%)`
- **Black**: `#000000` / `rgb(0, 0, 0)` / `hsl(0°, 0%, 0%)`

### Green

- **Green 800**: `#24554A` / `rgb(36, 85, 74)` / `hsl(167°, 40%, 24%)`
- **Green 600**: `#3E7467` / `rgb(62, 116, 103)` / `hsl(166°, 30%, 35%)`
- **Green 500**: `#458D7E` / `rgb(69, 141, 126)` / `hsl(167°, 34%, 41%)`
- **Green 300**: `#90D4C6` / `rgb(144, 212, 198)` / `hsl(168°, 44%, 70%)`

### Grey

- **Grey 950**: `#24303E` / `rgb(36, 48, 62)` / `hsl(212°, 27%, 19%)`
- **Grey 600**: `#5B636D` / `rgb(91, 99, 109)` / `hsl(213°, 9%, 39%)`
- **Grey 550**: `#808397` / `rgb(128, 131, 151)` / `hsl(232°, 10%, 55%)`
- **Grey 400**: `#A7AAAD` / `rgb(167, 170, 173)` / `hsl(210°, 4%, 67%)`

### Blue

- **Blue 950**: `#052C3B` / `rgb(5, 44, 59)` / `hsl(197°, 84%, 13%)`
- **Blue 800**: `#19536C` / `rgb(25, 83, 108)` / `hsl(198°, 62%, 26%)`

### Red

- **Red 400**: `#FE7766` / `rgb(254, 119, 102)` / `hsl(7°, 99%, 70%)`

### Yellow

- **Yellow 500**: `#FAD400` / `rgb(250, 212, 0)` / `hsl(51°, 100%, 49%)`

## Typography

### Font Families

- **Fraunces**: 사용 가중치 700 (Bold), 900 (Black)
  - Google Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces)
- **Barlow**: 사용 가중치 600 (SemiBold)
  - Google Fonts: [Barlow](https://fonts.google.com/specimen/Barlow)

### Text Presets

#### Fraunces Black (heading 스타일)

| Preset | Font Size | Line Height | Letter Spacing |
|--------|-----------|-------------|----------------|
| Text Preset 1 | 56px | 125% (70px) | 9px |
| Text Preset 2 | 42px | 125% (52.5px) | 6px |
| Text Preset 3 | 40px | 125% (50px) | 0px |
| Text Preset 4 | 32px | 125% (40px) | 0px |
| Text Preset 5 | 28px | 125% (35px) | 0px |
| Text Preset 6 | 20px | 125% (25px) | 4px |
| Text Preset 7 | 18px | 125% (22.5px) | 0px |
| Text Preset 8 | 15px | 165% (24.75px) | 1px |

#### Barlow SemiBold (body/UI 스타일)

| Preset | Font Size | Line Height | Letter Spacing |
|--------|-----------|-------------|----------------|
| Text Preset 9 | 20px | 125% (25px) | 0px |
| Text Preset 10 | 18px | 165% (29.7px) | 0px |
| Text Preset 11 | 16px | 170% (27.2px) | 0px |
| Text Preset 12 | 14px | 180% (25.2px) | 0px |

## Spacing System

디자인에서 사용하는 일관된 간격 값입니다. CSS Variables로 정의하여 사용하세요.

| Name | Pixels | rem (16px 기준) |
|------|--------|-----------------|
| spacing-0 | 0px | 0rem |
| spacing-100 | 8px | 0.5rem |
| spacing-200 | 16px | 1rem |
| spacing-300 | 24px | 1.5rem |
| spacing-400 | 32px | 2rem |
| spacing-500 | 40px | 2.5rem |
| spacing-600 | 48px | 3rem |
| spacing-700 | 56px | 3.5rem |
| spacing-900 | 72px | 4.5rem |
| spacing-1000 | 80px | 5rem |

## Icons

We provide the required social icons. But, if you prefer, you can use a font icon library. Some suggestions can be found below:

- [Font Awesome](https://fontawesome.com)
- [IcoMoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)

## CSS Variables 권장 구조

```css
:root {
  /* Colors - Neutral */
  --color-white: #FFFFFF;
  --color-black: #000000;
  
  /* Colors - Green */
  --color-green-800: #24554A;
  --color-green-600: #3E7467;
  --color-green-500: #458D7E;
  --color-green-300: #90D4C6;
  
  /* Colors - Grey */
  --color-grey-950: #24303E;
  --color-grey-600: #5B636D;
  --color-grey-550: #808397;
  --color-grey-400: #A7AAAD;
  
  /* Colors - Blue */
  --color-blue-950: #052C3B;
  --color-blue-800: #19536C;
  
  /* Colors - Accent */
  --color-red-400: #FE7766;
  --color-yellow-500: #FAD400;
  
  /* Typography */
  --font-heading: 'Fraunces', serif;
  --font-body: 'Barlow', sans-serif;
  
  /* Spacing */
  --spacing-0: 0;
  --spacing-100: 0.5rem;
  --spacing-200: 1rem;
  --spacing-300: 1.5rem;
  --spacing-400: 2rem;
  --spacing-500: 2.5rem;
  --spacing-600: 3rem;
  --spacing-700: 3.5rem;
  --spacing-900: 4.5rem;
  --spacing-1000: 5rem;
  
  /* Breakpoints */
  --breakpoint-tablet: 768px;
  --breakpoint-desktop: 1024px;
}
```

## Responsive Design (반응형 디자인)

### Mobile-First 접근법

기본 스타일은 모바일을 기준으로 작성하고, 태블릿과 데스크탑에서는 미디어 쿼리를 사용하여 필요한 스타일만 덮어씌웁니다.

```css
/* 기본 스타일 (Mobile: 375px) */
.hero__title {
  font-size: 2rem;              /* 32px */
  padding: var(--spacing-400);  /* 32px */
}

/* 태블릿 (Tablet: 768px 이상) */
@media (min-width: 768px) {
  .hero__title {
    font-size: 2.625rem;          /* 42px */
    padding: var(--spacing-600);  /* 48px */
  }
}

/* 데스크탑 (Desktop: 1024px 이상) */
@media (min-width: 1024px) {
  .hero__title {
    font-size: 3.5rem;            /* 56px */
    padding: var(--spacing-900);  /* 72px */
  }
}
```

### Grid Layout 예시

CSS Grid를 사용하여 반응형 레이아웃을 구현하는 예시입니다.

```css
/* 모바일: 1열 레이아웃 */
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-400);
}

/* 태블릿: 2열 레이아웃 */
@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-600);
  }
}

/* 데스크탑: 3열 또는 4열 레이아웃 */
@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacing-900);
  }
}
```


