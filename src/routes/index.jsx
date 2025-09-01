import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import App from "../App";
import Flights from "@/pages/Flights/Flights";
import Hotels from "@/pages/hotels/Hotels";
import ContactPage from "@/pages/Contact/Contact";
import Cruises from "@/pages/Cruises/Cruises";
import PrivacyPolicyPage from "@/pages/PrivacyPolicy/PrivacyPolicyPage";
import TermsConditionsPage from "@/pages/TermsConditions/TermsConditionsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/flights",
                element: <Flights />
            },
            {
                path: "/hotels",
                element: <Hotels />
            },
            {
                path: "/contact",
                element: <ContactPage />
            },
            {
                path: "/cruises",
                element: <Cruises />
            },
            {
                path: "privacy-policy",
                element: <PrivacyPolicyPage />
            },
            {
                path: "terms-and-conditions",
                element: <TermsConditionsPage />
            }
        ]
    },
]);

export default router;
