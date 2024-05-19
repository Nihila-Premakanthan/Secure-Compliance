import React, { lazy } from "react";
import { allRoutesPath } from "./routesPath";

import Home from "../pages/Home/Home";
import About from "../pages/Aboutus/Aboutus";
import Upcoming from "../pages/Upcoming";
import RegisterPage from "../pages/auth/register";
import LoginPage from "../pages/auth/login";
import ContactUs from "../pages/ContactUS/contactUS";
import AboutUs from "../pages/Aboutus/Aboutus";
import Pricing from "../pages/Pricing/Pricing"
import PricingPlans from "../pages/Pricing/Pricing";
import PaymentPage from "../pages/Pricing/Payment";
import Compliance from "../pages/Compliance/Compliance"
import Dashboard from "../pages/Compliance/Dashboard"
import ImageGallery from "../pages/Resources/Resources";
import Termsofsue from "../pages/TermsofUse/TermsofUse";
import Privacy from "../Components/Privacy/Privacy";

const publicRoute = [
  {
    path: allRoutesPath.HOME,
    element: <Home />,
  },
  {
    path: allRoutesPath.PRIVACY,
    element: <Privacy />,
  },
  {
    path: allRoutesPath.TERMSOFUSE,
    element: <Termsofsue />,
  },
  {
    path: allRoutesPath.RESOURCES,
    element: <ImageGallery />,
  },
  {
    path: allRoutesPath.ABOUT,
    element: <AboutUs />,
  },
 
    {
    path: allRoutesPath.PRICING,
    element: <PricingPlans />,
  },
  {
    path: allRoutesPath.PAYMENT,
    element: <PaymentPage />,
  },
  {
    path: allRoutesPath.CHECKLIST,
    element: <Compliance />,
  },
  {
    path: allRoutesPath.CONTACT,
    element: <ContactUs />,
  },
  {
    path: allRoutesPath.DASHBOARD,
    element: <Dashboard />,
  },

   {
    path: "*",
    element: <Upcoming />,
  },
];
const routes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "*",
    element: <RegisterPage />,
  },
];

export { routes, publicRoute };
