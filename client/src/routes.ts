import { Route } from "./types"
import { lazy } from "react";

const Home = lazy(() => import("pages/Home"));
const Products = lazy(() => import("pages/Products"));
const Blog = lazy(() => import("pages/Blog"));
const Login = lazy(() => import("pages/Login"));
const Developer = lazy(() => import("pages/Developer"));

export const routes: Route[] = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/products",
        component: Products
    },
    {
        path: "/blog",
        component: Blog
    },
    {
        path: "/developer",
        component: Developer
    },
    {
        path: "/login",
        component: Login
    }
];
