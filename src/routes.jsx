import React from "react";
import LandingPage from "./Components/LandingPage/LandingPage";
import LandingPageImg from "./assets/Images/RiskReward.png";
import RiskQuestions from "./Components/RiskQuestions/RiskQuestions";

const CompRoutes = {
  Pages: [
    {
      Title: "Landing Page",
      route: "/",
      element: <LandingPage />,
      imgUrl: LandingPageImg,
    },
    {
      Title: "Question 1",
      route: "/Q1",
      element: <RiskQuestions />,
      question:
        "<div className='d-inline-block text-green'>Question 1: Accessibility of your Funds - Desired Liquidity.</div> Based on your stated goals, how long do you envisage these funds can be invested before you require access to them?",
      choices: [
        "Less than one year",
        "1 – 3 years",
        "3 – 5 years",
        "More than 5 years",
      ],
    },
    // {
    //   Title: "404",
    //   route: "*",
    //   element: <NotFound />, // <-- Catch-all route
    // },
  ],
};

export default CompRoutes;
