const { categories } = require("../content/data/categories.json");

type MaterialColor = {
  lighter?: string;
  light: string;
  main: string;
  dark: string;
  contrastText: string;
};

type TextColor = {
  primary: string;
  secondary: string;
  disabled: string;
  hint: string;
};

type CommonColor = {
  black: string;
  white: string;
};

type BackgroundColor = {
  paper: string;
  default: string;
  level2: string;
  level1: string;
  dark1: string;
  dark2: string;
};

type ActionColor = {
  active: string;
  hover: string;
  hoverOpacity: number;
  selected: string;
  selectedOpacity: number;
  disabled: string;
  disabledBackground: string;
  disabledOpacity: number;
  focus: string;
  focusOpacity: number;
  activatedOpacity: number;
};

type GreyColor = {
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
  A100?: string;
  A200?: string;
  A400?: string;
  A700?: string;
};

type SingleCategoryColor = {
  foreground: string;
  background: string;
};

type CategoryColor = {
  trending: SingleCategoryColor;
  jcbParts: SingleCategoryColor;
  autoParts: SingleCategoryColor;
  nut: SingleCategoryColor;
  bolt: SingleCategoryColor;
  agricultureParts: SingleCategoryColor;
};

type Config = {
  common: CommonColor;
  primary: MaterialColor;
  secondary: MaterialColor;
  error: MaterialColor;
  warning: MaterialColor;
  success: MaterialColor;
  grey: GreyColor;
  text: TextColor;
  background: BackgroundColor;
  action: ActionColor;
  category: CategoryColor;
};

export const configColors: Config = {
  common: {
    black: "#1E2839",
    white: "#FFFFFF",
  },

  primary: {
    lighter: "#ACC8FE",
    light: "#3162BD",
    main: "#035AFC",
    dark: "#0803FC",
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: "#fff",
    light: "#faf",
    dark: "#fff ",
    contrastText: "#fff",
  },

  error: {
    light: "#FF9983",
    main: "#FF3232",
    dark: "#B71934",
    contrastText: "#fff",
  },
  warning: {
    light: "#FFD588",
    main: "#FFA93A",
    dark: "#B7661D",
    contrastText: "#fff",
  },
  success: {
    light: "#C3EE70",
    main: "#7CC918",
    dark: "#4B900C",
    contrastText: "#fff",
  },
  grey: {
    100: "#F4F4F5",
    200: "#E9EAEB",
    300: "#E9EAEF",
    400: "#B5BDC9",
    500: "#616161",
  },

  text: {
    primary: "#1E2839",
    secondary: "#616161",
    disabled: "#1E283920",
    hint: "#1E283920",
  },

  background: {
    paper: "#FFFFFF",
    default: "#FFFFFF",
    level2: "#3162BD",
    level1: "#F4F4F5",
    dark1: "#0803FC",
    dark2: "#0B0D17",
  },
  action: {
    active: "#035AFC",
    hover: "#0803FC10",
    hoverOpacity: 0.1,
    selected: "#0803FC08",
    selectedOpacity: 0.08,
    disabled: "#616161",
    disabledBackground: "#E9EAEF38",
    disabledOpacity: 0.38,
    focus: "#0803FC12",
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },

  category: {
    trending: {
      foreground: categories.trending.colors.foreground,
      background: categories.trending.colors.background,
    },
    jcbParts: {
      foreground: categories.jcbParts.colors.foreground,
      background: categories.jcbParts.colors.jcbParts,
    },

    agricultureParts: {
      foreground: categories.agricultureParts.colors.foreground,
      background: categories.jcbParts.colors.agricultureParts,
    },

    nut: {
      foreground: categories.nut.colors.foreground,
      background: categories.jcbParts.colors.nut,
    },
    bolt: {
      foreground: categories.bolt.colors.foreground,
      background: categories.jcbParts.colors.bolt,
    },

    autoParts: {
      foreground: categories.autoParts.colors.foreground,
      background: categories.jcbParts.colors.autoParts,
    },
  },

  // Status: Not Implemented
  /* type: "light", */
  /* divider: "#1E283920", */
  /* "contrastThreshold": 3, */
  /* "tonalOffset": 0.2, */
  /* info: {
    light: "#64b5f6",
    main: "#2196f3",
    dark: "#1976d2",
    contrastText: "#fff",
  }, */
};
