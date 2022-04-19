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