import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "jspdf-autotable";

import { notification, Spin } from "antd";
import LandingPage from "./LandingPage/LandingPage";
import CompRoutes from "../routes";
import { openNotification, PostAxios } from "../assets/Api/Api";
import ThankYou from "./ThankYou";

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
      question1: 1,
      question2: 1,
      question3: 1,
      question4: 1,
      question5: 1,
      question6: 1,
      question7: 1,
      question8: 1,
    },
    partner: {
      question1: 1,
      question2: 1,
      question3: 1,
      question4: 1,
      question5: 1,
      question6: 1,
      question7: 1,
      question8: 1,
    },
    joinedProfile: "No",
  };

  // let validationSchema = Yup.object().shape({});

  const onSubmit = async (values) => {
    console.log("Form submitted with values:", values);
    setLoadingState(true);
    try {
      // Handle form submission logic here
      let api = "http://localhost:7000/api/riskProfile/external/Add";
      // let api = "http://192.168.3.41:7000/api/riskProfile/external/Add";
      // let api = "https://as.denarowealth.com.au/api/riskProfile/external/Add";

      let obj = { ...values };
      obj.token = localStorage.getItem("ref") || "";

      console.log("Submitting to API:", api, obj);

      let res = await PostAxios(api, obj);
      console.log("API response:", res);

      if (res) {
        // For example, you might send the values to an API or process them in some way
        openNotification(
          "success",
          "topRight",
          "Form submitted successfully",
          "Your data has been saved."
        );
        navigate("/thankyou");
      }
      // Navigate to the first question page after submission
    } catch (error) {
      console.error("Error during form submission:", error);
      openNotification(
        "error",
        "topRight",
        "Form submission failed",
        error?.response?.data?.message ||
          error?.message ||
          "Some thing went wrrong please try Later"
      );
    } finally {
      setLoadingState(false);
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
                key={index + page.route} // ✅ use route as unique key
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
                  ...page,
                })}
              />
            ))}

            <Route path={"/thankyou"} element={<ThankYou />} />
            {/* Add more routes as needed */}
          </Routes>
        </Form>
      )}
    </Formik>
  );
};

export default Starter;
