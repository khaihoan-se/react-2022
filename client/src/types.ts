import { FC, LazyExoticComponent } from "react";

export interface Route {
  path: string;
  component: LazyExoticComponent<FC>;
}

export interface LayoutType {
  children: any;
}