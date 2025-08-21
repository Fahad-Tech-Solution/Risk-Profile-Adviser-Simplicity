import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "jspdf-autotable";

import { Spin } from "antd";
import LandingPage from "./LandingPage/LandingPage";
import CompRoutes from "../routes";
import { openNotification } from "../assets/Api/Api";

const Starter = () => {
  const [loadingState, setLoadingState] = useState(true);

  const navigate = useNavigate();
  const { Pages } = CompRoutes;

  useEffect(() => {
    // Ensure it runs only in browser
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const ref = params.get("ref");

      if (ref) {
        localStorage.setItem("ref", ref);
        console.log("Referral ID stored:", ref);
      }
    }
    setLoadingState(false);
  }, []);

  const initialValues = {
    // Define your initial form values here
    client: {
      Q1: 1,
      Q2: 1,
      Q3: 1,
      Q4: 1,
      Q5: 1,
      Q6: 1,
      Q7: 1,
      Q8: 1,
    },
    partner: {
      Q1: 1,
      Q2: 1,
      Q3: 1,
      Q4: 1,
      Q5: 1,
      Q6: 1,
      Q7: 1,
      Q8: 1,
    },
    joinedProfile: "No",
  };

  // let validationSchema = Yup.object().shape({});

  const onSubmit = (values) => {
    console.log("Form submitted with values:", values);

    try {
      // Handle form submission logic here
      // For example, you might send the values to an API or process them in some way
      openNotification(
        "success",
        "Form submitted successfully",
        "Your data has been saved."
      );
      // navigate("/Q1"); // Navigate to the first question page after submission
    } catch (error) {
      console.error("Error during form submission:", error);
      openNotification("error", "Form submission failed", error.message);
    }
  };

  let location = useLocation();

  const goToNextPage = () => {
    const currentIndex = Pages.findIndex(
      (page) => page.route === location.pathname
    );
    if (currentIndex !== -1 && currentIndex < Pages.length - 1) {
      const nextRoute = Pages[currentIndex + 1].route;
      navigate(nextRoute);
    }
  };

  const goToBackPage = () => {
    const currentIndex = Pages.findIndex(
      (page) => page.route === location.pathname
    );
    if (currentIndex > 0) {
      const prevRoute = Pages[currentIndex - 1].route;
      navigate(prevRoute);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({
        resetForm,
        isSubmitting,
        values,
        setFieldValue,
        handleChange,
        handleBlur,
        validateForm,
        validateField,
        setFieldTouched,
      }) => (
        <Form className="position-relative">
          {loadingState && (
            <div
              className="position-absolute top-0 d-flex justify-content-center align-items-center bg-gray"
              style={{
                width: "100%",
                height: "100%",
                zIndex: "1000",
                minHeight: "100vh",
              }}
            >
              <Spin
                size="large"
                style={{ width: "fit-content", height: "fit-content" }}
              ></Spin>
            </div>
          )}
          <Routes>
            {Pages.map((page, index) => (
              <Route
                path={page.route}
                element={React.cloneElement(page.element, {
                  resetForm,
                  isSubmitting,
                  values,
                  setFieldValue,
                  handleChange,
                  handleBlur,
                  validateForm,
                  validateField,
                  setFieldTouched,
                  goToNextPage,
                  goToBackPage,
                  key: page.key,
                  ...page,
                })}
              />
            ))}
            {/* Add more routes as needed */}
          </Routes>
        </Form>
      )}
    </Formik>
  );
};

export default Starter;
