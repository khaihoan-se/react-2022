import { Route } from "./types"
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const Blog = lazy(() => import("./pages/Blog"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Styleguide = lazy(() => import("./pages/Styleguide"));

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
        path: "/about",
        component: About
    }, 
    {
        path: "/contact",
        component: Contact
    },
    {
        path: "/styleguide",
        component: Styleguide
    }
];
