import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

import parse from "html-react-parser";

import ClientPic from "../../assets/SVG/single-2.svg";
import PartnerPic from "../../assets/SVG/couple-2.svg";
import TopStepsBar from "../TopStepsBar";
import CButton from "../../assets/Custom/CButton";
import { Grid } from "antd";
import { useLocation } from "react-router-dom";

const RiskQuestions = (props) => {
  const location = useLocation();

  const [isLastPage, setIsLastPage] = useState(); // safer than props.route

  const { setFieldValue, values, handleChange } = props;
  const { question, inputName, imgUrl } = props;
  const { goToNextPage, goToBackPage } = props;
  const { choices = [] } = props;

  const { md, sm, xs } = Grid.useBreakpoint();
  const isMobile = md;

  const handleRadioChange = (type, index) => {
    const isSimpleValue = typeof values[`${type}.${inputName}`] === "number";

    // Update the state accordingly
    if (isSimpleValue) {
      setFieldValue(`${type}.${inputName}`, index);
    } else {
      setFieldValue(`${type}.${inputName}`, index);
    }
  };

  useEffect(() => {
    setIsLastPage(location.pathname === "/Q8");
  }, [location.pathname]);

  return (
    <>
      <TopStepsBar FormickOBj={props} />
      <div className="container mt-2 mb-5">
        <div className="d-flex flex-md-row flex-column justify-content-start align-items-center gap-4">
          <div
            onClick={() => {
              console.log(props);
            }}
            style={{ width: !isMobile ? "25%" : "7%" }}
          >
            <Image src={imgUrl} alt={inputName} fluid />
          </div>
          <div className="" style={{ width: "90%" }}>
            <h5 className="my-3">
              <b>{parse(question) || "No Question Added"}</b>
            </h5>
          </div>
        </div>

        <div className="my-3 Risk-fade-in-fwd">
          <h5 className="my-3 d-none">
            <b>{question || "No Question Added"}</b>
          </h5>
          <div className="RiskCard">
            <h4 className="mainHeading d-flex justify-content-start align-items-center  gap-2 ">
              <div
                style={{ width: !isMobile ? "7%" : "2%", marginTop: "-10px" }}
              >
                <Image src={ClientPic} alt="Client" fluid />
              </div>

              <b>Client</b>
            </h4>
            {choices.map((elem, index) => (
              <React.Fragment key={`client-${index}`}>
                <label htmlFor={`client-${index}`} className="myLabel my-1">
                  <input
                    className="mx-2"
                    type="radio"
                    id={`client-${index}`}
                    name={`client.${inputName}`}
                    value={index}
                    checked={values?.client?.[inputName] === index}
                    onChange={() => handleRadioChange("client", index)}
                  />
                  {elem}
                </label>
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>

        {values.joinedProfile === "No" && (
          <div className="RiskCard Risk-fade-in-fwd">
            <h4 className="mainHeading d-flex justify-content-start align-items-center  gap-2 ">
              <div style={{ width: !isMobile ? "7%" : "2%" }}>
                <Image src={PartnerPic} alt="partner" fluid />
              </div>
              <b>Partner</b>
            </h4>
            {choices.map((elem, index) => (
              <React.Fragment key={`partner-${index}`}>
                <label htmlFor={`partner-${index}`} className="myLabel my-1">
                  <input
                    className="mx-2"
                    type="radio"
                    id={`partner-${index}`}
                    name={`partner.${inputName}`}
                    value={index}
                    checked={values?.partner?.[inputName] === index}
                    onChange={() => handleRadioChange("partner", index)}
                  />
                  {elem}
                </label>
                <br />
              </React.Fragment>
            ))}
          </div>
        )}

        <div className="d-flex flex-md-row flex-column justify-content-between align-items-center mt-4">
          <CButton
            text="Back"
            size="large"
            htmlType="button" // HTML form submission behavior
            onClick={goToBackPage} // Formik's handleSubmit
            className=" mt-3 customBtn"
          />

          <CButton
            text={isLastPage ? "Submit" : "Next"}
            size="large"
            type="primary" // AntD style
            htmlType={isLastPage ? "submit" : "button"}
            className="p-3 mt-3 customBtn"
            onClick={goToNextPage} // Formik's handleSubmit
          />
        </div>
      </div>
    </>
  );
};

export default RiskQuestions;
