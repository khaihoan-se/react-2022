import { FC, LazyExoticComponent } from "react";

export interface Router {
    path: string;
    component: LazyExoticComponent<FC>;
}