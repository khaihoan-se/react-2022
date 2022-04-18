import { Route } from "./types"
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

export const routes: Route[] = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
    }
]
