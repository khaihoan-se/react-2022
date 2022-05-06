import { FC, LazyExoticComponent } from "react";

export interface Route {
  path: string;
  component: LazyExoticComponent<FC>;
}

export interface LayoutType {
  children: any;
}

export interface ImageType {
  className?: string;
  src: string;
  alt: string;
}

export interface IconType {
  className?: string;
}

export interface SliderType { // test prop slider
  banner: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export interface IBreakpoints {
  xxsMin: number;
  xsMin: number;
  smMin: number;
  mdMin: number;
  lgMin: number;
}