export const design = {
  colors: {
    black: "#2D2D2D",
    grey: "#6B6B6B",
    white: "#FFFFFF",
  },

  typography: {
    desktop: {
      h1: {
        font: "Instrument Serif",
        size: "46px",
        lineHeight: "130%",
        weight: 400,
      },
      h2: {
        font: "DM Sans",
        size: "30px",
        lineHeight: "130%",
        weight: 400,
      },
      h3: {
        font: "DM Sans",
        size: "30px",
        lineHeight: "130%",
        weight: 400,
      },
      p1: {
        font: "DM Sans",
        size: "18px",
        lineHeight: "150%",
        weight: 300,
      },
      p2: {
        font: "DM Sans",
        size: "16px",
        lineHeight: "150%",
        weight: 300,
      },
      p3: {
        font: "DM Sans",
        size: "14px",
        lineHeight: "150%",
        weight: 300,
      },
      btn: {
        font: "DM Sans",
        size: "15px",
        lineHeight: "130%",
        weight: 500,
      },
      cta: {
        font: "Instrument Serif",
        size: "40px",
        lineHeight: "130%",
        weight: 400,
      },
      n1: {
        font: "DM Sans",
        size: "22px",
        lineHeight: "150%",
        weight: 300,
      },
      n2: {
        font: "DM Sans",
        size: "16px",
        lineHeight: "150%",
        weight: 300,
      },
      n0: {
        font: "DM Sans",
        size: "16px",
        lineHeight: "150%",
        weight: 300,
      },
    },

    mobile: {
      h1: {
        font: "Instrument Serif",
        size: "40px",
        lineHeight: "130%",
        weight: 400,
      },
      h2: {
        font: "DM Sans",
        size: "28px",
        lineHeight: "130%",
        weight: 400,
      },
      h3: {
        font: "DM Sans",
        size: "28px",
        lineHeight: "130%",
        weight: 400,
      },
      p1: {
        font: "DM Sans",
        size: "15px",
        lineHeight: "150%",
        weight: 300,
      },
      p2: {
        font: "DM Sans",
        size: "15px",
        lineHeight: "150%",
        weight: 300,
      },
      p3: {
        font: "DM Sans",
        size: "13px",
        lineHeight: "150%",
        weight: 300,
      },
      btn: {
        font: "DM Sans",
        size: "15px",
        lineHeight: "130%",
        weight: 500,
      },
      cta: {
        font: "Instrument Serif",
        size: "40px",
        lineHeight: "130%",
        weight: 400,
      },
      n1: {
        font: "DM Sans",
        size: "18px",
        lineHeight: "150%",
        weight: 300,
      },
      n2: {
        font: "DM Sans",
        size: "15px",
        lineHeight: "150%",
        weight: 300,
      },
      n0: {
        font: "DM Sans",
        size: "15px",
        lineHeight: "150%",
        weight: 300,
      },
    },
  },

  layout: {
    maxWidth: {
      default: "1280px",
      article: "720px",
    },
    sidePadding: {
      desktop: "60px",
      mobile: "30px",
    },
    spacer: "250px",
    topButtonOffset: {
      desktop: "60px",
      mobile: "30px",
    },
    topContentOffset: "100px",
    noteIntroGap: "30px",
    articleHeadingGap: {
      desktop: "120px",
      mobile: "80px",
    },
    sectionGap: {
      desktop: "150px",
      mobile: "130px",
    },
  },

  button: {
    height: "50px",
    radius: "25px",
  },

  card: {
    radius: "20px",
  },

  shadow: {
    x: "35px",
    y: "30px",
    blur: "48px",
    spread: "0px",
    color: "#3366FF",
    opacity: 0.05,
  },

  stroke: {
    color: "#E5F4F2",
    weight: "1px",
  },

  slideshow: {
    interval: 4000,
    height: "60vh",
  },

  motion: {
    hoverTranslateY: "-2px",
    transition: "200ms ease",
  },
} as const;
