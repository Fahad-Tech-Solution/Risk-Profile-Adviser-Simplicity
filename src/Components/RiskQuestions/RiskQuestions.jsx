import React from "react";
import { Image } from "react-bootstrap";

import parse from "html-react-parser";

import ClientPic from "../../assets/SVG/single-2.svg";
import PartnerPic from "../../assets/SVG/couple-2.svg";

const RiskQuestions = (props) => {
  const { setFieldValue, values, handleChange } = props;
  const { question, key, imgUrl } = props;
  const { choices = [] } = props;

  const handleRadioChange = (type, index) => {

    const isSimpleValue = typeof values[`${type}.${key}`] === "number";

    // Update the state accordingly
    if (isSimpleValue) {
      setFieldValue(`${type}.${key}`, index);
    } else {
      setFieldValue(`${type}.${key}`, index);
    }
  };


    return (
      <div>
        <div className="d-flex justify-content-start align-items-center gap-4">
          <div style={{ width: "7%" }}>
            <Image src={imgUrl} alt={key} fluid />
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
              <div style={{ width: "2%", marginTop: "-10px" }}>
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
                    name={`client.${key}`}
                    value={index}
                    checked={values?.client?.[key] === index}
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
          <div className="RiskCard">
            <h4 className="mainHeading d-flex justify-content-start align-items-center  gap-2 ">
              <div style={{ width: "2%" }}>
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
                    name={`partner.${key}`}
                    value={index}
                    checked={values?.partner?.[key] === index}
                    onChange={() => handleRadioChange("partner", index)}
                  />
                  {elem}
                </label>
                <br />
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    );
};

export default RiskQuestions;
