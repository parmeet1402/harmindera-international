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

type Config = {
  common: CommonColor;
  primary: MaterialColor;
  error: MaterialColor;
  warning: MaterialColor;
  success: MaterialColor;
  grey: GreyColor;
  text: TextColor;
  background: BackgroundColor;
  action: ActionColor;
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
    /*  "600": "#757575",
    "700": "#616161",
    "800": "#424242",
    "900": "#212121",
    A100: "#d5d5d5",
    A200: "#aaaaaa",
    A400: "#303030",
    A700: "#616161", */
  },

  text: {
    primary: "#1E2839",
    secondary: "#1E283950",
    disabled: "#1E283920",
    hint: "#1E283920",
  },

  background: {
    paper: "#FFFFFF",
    default: "#FFFFFF",
    level2: "#3162BD",
    level1: "#F4F4F5",
  },
  action: {
    active: "#035AFC",
    hover: "#0803FC",
    hoverOpacity: 0.04,
    selected: "#0803FC",
    selectedOpacity: 0.08,
    disabled: "#616161",
    disabledBackground: "#E9EAEF",
    disabledOpacity: 0.38,
    focus: "#0803FC",
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
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
  /*   secondary: {
    main: "rgb(220, 0, 78)",
    light: "rgb(227, 51, 113)",
    dark: "rgb(154, 0, 54)",
    contrastText: "#fff",
  },
  */
};
