import React from "react";

import DynamicYesNo from "../../assets/Custom/DynamicYesNo/DynamicYesNo";
import { Container, Image } from "react-bootstrap";
import CButton from "../../assets/Custom/CButton";

const LandingPage = (props) => {
  const {
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
    imgUrl,
  } = props;
  return (
    <Container className="my-5">
      <h3
        className="text-center text-green "
        onClick={() => {
          console.log(JSON.stringify(values));
        }}
      >
        <b>RISK PROFILE QUESTIONNAIRE</b>
      </h3>

      <div className="d-flex justify-content-center">
        <Image src={imgUrl} fluid />
      </div>

      <h5 className="text-center">RISK PROFILER: YOUR ATTITUDE TO INVESTING</h5>
      <p className="text-center">
        The Risk Profiler is a tool that can assist you in determining your
        tolerance to risk and how that relates to particular investments. Your
        risk profile is not the only information you should take into account
        before making an investment decision. These tools do not take into
        account your individual investment objectives, financial situation or
        particular needs.
      </p>
      <p className="text-center">
        Because of this, before making any investment decision you should
        consider whether the funds matched to your risk profile are appropriate
        in light of your individual investment objectives, financial
        circumstances and needs. This may include your need to access funds, any
        pre-existing financial commitments you may have and what other financial
        assets that you own.
      </p>
      <p className="text-center">
        This Risk Profiler questionnaire poses a series of questions and assigns
        a weighting (score) against your responses. Your overall score will
        reflect your approximate Risk profile based on certain industry
        standards
      </p>

      {/* question  */}
      <div className="mb-3">
        <label className="form-label w-100 text-center">
          Would you like to answer this questionnaire individually or as a
          couple?
        </label>
        {/* switch button style */}
        <div className="d-flex justify-content-center mt-3">
          <div className="w-25">
            <DynamicYesNo
              name={`joinedProfile`}
              values={values}
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <CButton
          text="Start"
          type="primary" // AntD style
          htmlType="button" // HTML form submission behavior
          size="large"
          style={{ width: "35%" }}
          onClick={goToNextPage} // Formik's handleSubmit
        />
      </div>
    </Container>
  );
};

export default LandingPage;
