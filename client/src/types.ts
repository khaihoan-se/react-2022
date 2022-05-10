import { FC, LazyExoticComponent } from "react";
export interface Route {
  path: string;
  component: LazyExoticComponent<FC>;
}
export interface LayoutType {
  children: any;
}
export interface IBreakpoints {
  xxsMin: number;
  xsMin: number;
  smMin: number;
  mdMin: number;
  lgMin: number;
}