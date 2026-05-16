export const design = {
  cornerRadius: 20,
  buttonRadius: 999,
  buttonHeight: 50,
  featureHeight: 90,
  gutterSmall: 20,
  gutterLarge: 30,
  typography: {
    h1: {
      family: "Poppins",
      weight: 700,
      desktop: { size: "72px", lineHeight: "105%" },
      mobile: { size: "47px", lineHeight: "105%" },
    },
    h2: {
      family: "Poppins",
      weight: 700,
      desktop: { size: "62px", lineHeight: "110%" },
      mobile: { size: "38px", lineHeight: "130%" },
    },
    h3: {
      family: "Poppins",
      weight: 700,
      desktop: { size: "28px", lineHeight: "130%" },
      mobile: { size: "20px", lineHeight: "130%" },
    },
    h4: {
      family: "Poppins",
      weight: 700,
      desktop: { size: "34px", lineHeight: "120%" },
      mobile: { size: "21px", lineHeight: "130%" },
    },
    h5: {
      family: "Manrope",
      weight: 400,
      desktop: { size: "21px", lineHeight: "150%" },
      mobile: { size: "16px", lineHeight: "150%" },
    },
    h6: {
      family: "Manrope",
      weight: 700,
      desktop: { size: "21px", lineHeight: "150%" },
      mobile: { size: "18px", lineHeight: "150%" },
    },
    p: {
      family: "Manrope",
      weight: 400,
      desktop: { size: "16px", lineHeight: "150%" },
      mobile: { size: "16px", lineHeight: "150%" },
    },
    f: {
      family: "Manrope",
      weight: 200,
      desktop: { size: "15px", lineHeight: "150%" },
      mobile: { size: "14px", lineHeight: "150%" },
    },

  },
  colors: {
    white: "#ffffff",
    black: "#1d1d1f",
    lightGrey: "#f0f0f0",
    darkGrey: "#ececf0",
    lightGreyOnLightGrey: "#e2e2e2",
    linkColor: "#0891b2",
    linkHover: "#06b6d4",
    buttons: {
      primary: {
        background: "#2563eb",
        text: "#ffffff",
        hoverBackground: "#1d4ed8",
        hoverText: "#ffffff",
      },
      secondary: {
        background: "#f0f0f0",
        text: "#000000",
        hoverBackground: "#e8e8e8",
        hoverText: "#000000",
      },
    },
    curiosityCardPalettes: [
      {
        background: "#cffafe",
        text: "#2da1bd",
        hoverBackground: "#06b6d4",
      },
      {
        background: "#dbeafe",
        text: "#2563eb",
        hoverBackground: "#3b82f6",
      },
      {
        background: "#f3e8ff",
        text: "#9333ea",
        hoverBackground: "#a855f7",
      },
      {
        background: "#fce7f3",
        text: "#db2777",
        hoverBackground: "#ec4899",
      },
      {
        background: "#fee2e2",
        text: "#dc2626",
        hoverBackground: "#ef4444",
      },
      {
        background: "#ffedd5",
        text: "#ea580c",
        hoverBackground: "#f97316",
      },
      {
        background: "#fef9c3",
        text: "#ca8a04",
        hoverBackground: "#eab308",
      },
      {
        background: "#dcfce7",
        text: "#16a34a",
        hoverBackground: "#4ed27f",
      },
    ],
  },
} as const;
