import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mainColor: string;
    gray: {
      light: string;
      medium: string;
    };
    bgColor: string;
  }
}
