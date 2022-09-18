export const spacings = {
  space01: "0.4rem",
  space02: "0.8rem",
  space03: "1.2rem",
  space04: "1.6rem",
  space05: "2.4rem",
  space06: "3.2rem",
  space07: "4rem",
  space08: "4.8rem",
  space09: "5.6rem",
  space10: "6.4rem",
  space11: "7.2rem",
  space12: "8rem",
  space13: "8.8rem",
  space14: "9.6rem",
} as const;

const lightMode = {
  background: "#FFFFFF",
  border: "#f7f7f7",
  text: "#1d1d1d",
  grey: "#888888",
  primary: "#0ACF83",
};

let theme = lightMode;

// if (typeof window !== 'undefined') {
//   const userTheme = window.localStorage.getItem('theme')
//   theme = userTheme === 'dark' ? darkMode : lightMode
// }

export const primaryColors = theme;

export const font = {
  light: 300,
  normal: 400,
  semiBold: 600,
  bold: 700,
  sizes: {
    xSmall: "1.2rem",
    small: "1.4rem",
    normal: "1.6rem",
    large: "1.8rem",
    heading06: "2rem",
    heading05: "2.4rem",
    heading04: "2.8rem",
    heading03: "3.2rem",
    heading02: "3.6rem",
    heading01: "4.2rem",
  },
  lineHeight: {
    xSmall: "1.8rem",
    small: "2.1rem",
    normal: "2.4rem",
    large: "2.7rem",
    heading06: "2.8rem",
    heading05: "2.9rem",
    heading04: "3.4rem",
    heading03: "3.8rem",
    heading02: "4.3rem",
    heading01: "5rem",
  },
  family: {
    Roboto: "'Roboto', sans-serif",
  },
} as const;

export const ZIndex = {
  base: 10,
  dropdown: 15,
  menu: 20,
  overlay: 30,
  modal: 40,
} as const;

export const breakpoints = {
  small: "576px",
  normal: "650px",
  medium: "768px",
  large: "992px",
  xlarge: "1200px",
  xxlarge: "1400px",
  xxxlarge: "1700px",
} as const;

export const shadows = {
  project: "rgb(68, 68, 68, 0.1) 0px 15px 20px 5px",
  projectMobile: "rgb(68, 68, 68, 0.1) 0px 4px 9px 5px",
};
