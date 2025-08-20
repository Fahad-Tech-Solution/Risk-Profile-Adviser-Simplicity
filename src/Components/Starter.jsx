import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "jspdf-autotable";

import { Spin } from "antd";
import LandingPage from "./LandingPage/LandingPage";
import CompRoutes from "../routes";

const Starter = () => {
  const [loadingState, setLoadingState] = useState(true);

  const navigate = useNavigate();
  const { Pages } = CompRoutes;

  useEffect(() => {
    // console.log("Starter component mounted");
    setLoadingState(false);
  });

  const initialValues = {
    // Define your initial form values here
  };
  let validationSchema = Yup.object().shape({});

  const onSubmit = () => {};

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
      validationSchema={validationSchema}
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
              style={{ width: "100%", height: "100%", zIndex: "1000" }}
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
