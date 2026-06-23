import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { Col, Grid, Radio, Row, Space } from "antd";
import parse from "html-react-parser";
import ClientPic from "../../assets/SVG/single-2.svg";
import PartnerPic from "../../assets/SVG/couple-2.svg";
import TopStepsBar from "../TopStepsBar";
import CButton from "../../assets/Custom/CButton";
import { useLocation } from "react-router-dom";

const RiskQuestions = (props) => {
  const location = useLocation();

  const [isLastPage, setIsLastPage] = useState(false);

  const { setFieldValue, values, goToNextPage, goToBackPage } = props;
  const { question, inputName, imgUrl, choices = [], icon } = props;

  const { md } = Grid.useBreakpoint();
  const isMobile = md;

  useEffect(() => {
    setIsLastPage(location.pathname === "/Q8");
  }, [location.pathname]);

  const includePartner = values?.joinedProfile === "No";
  const participantCards = [
    { key: "client", name: "Client" },
    ...(includePartner ? [{ key: "partner", name: "Partner" }] : []),
  ];

  const handleAnswerChange = (participant, stepKey, value) => {
    setFieldValue(`${participant}.${stepKey}`, value);
  };

  return (
    <>
      <TopStepsBar FormickOBj={props} />

      <div className="container mt-2 mb-5">
        <div
          className="d-flex justify-content-start align-items-center"
          style={{
            gap: 20,
            marginBottom: 32,
            padding: "16px 20px",
            background: "rgb(249, 250, 251)",
            borderRadius: 12,
            border: "1px solid rgba(0, 0, 0, 0.06)",
          }}
        >
          <div
            style={{
              fontSize: 56,
              flexShrink: 0,
              lineHeight: 1,
            }}
          >
            {icon}
          </div>
          <div style={{ width: "90%" }}>
            <h5
              className="my-3"
              style={{
                fontSize: 15,
                fontFamily: "Arial",
                fontWeight: 600,
                color: "rgb(17, 24, 39)",
                lineHeight: 1.6,
              }}
            >
              {parse(question) || "No Question Added"}
            </h5>
          </div>
        </div>

        <div
          className="my-3 Risk-fade-in-fwd"
          style={{ display: "flex", flexDirection: "column", gap: 24 }}
        >
          <Row gutter={[16, 16]}>
            {participantCards.map((participant) => (
              <Col xs={24} lg={24} key={participant.key}>
                <div>
                  <Row style={{ marginBottom: 14 }}>
                    <Col md={24}>
                      <div
                        style={{
                          fontSize: 18,
                          fontWeight: 700,
                          fontFamily: "Arial",
                          color: "rgb(17, 24, 39)",
                        }}
                        className="d-flex align-items-center justify-content-start"
                      >
                        {participant.key === "client" ? "🧑" : "👥"}
                        &nbsp;
                        {participant.name}
                        {values?.[participant.key]?.[inputName] !== null &&
                          values?.[participant.key]?.[inputName] !==
                            undefined && (
                            <div
                              className="ms-auto"
                              style={{
                                fontSize: 11,
                                fontWeight: 700,
                                fontFamily: "Arial",
                                color: "rgb(22, 163, 74)",
                                borderRadius: 99,
                                border: "1px solid rgb(187, 247, 208)",
                                background: "rgb(240, 253, 244)",
                                padding: "0px 10px",
                              }}
                            >
                              + {values?.[participant.key]?.[inputName] + 1} pts
                            </div>
                          )}
                      </div>
                    </Col>
                  </Row>

                  <Radio.Group
                    value={values?.[participant.key]?.[inputName]}
                    onChange={(event) =>
                      handleAnswerChange(
                        participant.key,
                        inputName,
                        event.target.value,
                      )
                    }
                    style={{ width: "100%" }}
                  >
                    <Space direction="vertical" style={{ width: "100%" }}>
                      {choices.map((choice, index) => {
                        const selected =
                          values?.[participant.key]?.[inputName] === index;
                        return (
                          <Radio
                            key={`${participant.key}-${inputName}-${index}`}
                            value={index}
                            style={{
                              fontSize: 14,
                              fontWeight: 400,
                              fontFamily: "Arial",
                              color: "rgb(17, 24, 39)",
                              border: selected
                                ? "1.5px solid #22C55E"
                                : "1.5px solid rgb(229, 231, 235)",
                              background: selected
                                ? "rgba(34, 197, 94, 0.08)"
                                : "#ffffff",
                              width: "100%",
                              display: "flex",
                              alignItems: "start",
                              justifyContent: "start",
                              gap: 12,
                              padding: "10px 0px 10px 14px",
                              cursor: "pointer",
                              borderRadius: 10,
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                                justifyContent: "space-between",
                                gap: 12,
                                width: "100%",
                              }}
                            >
                              <div style={{ flex: 1, minWidth: 0 }}>
                                {choice}
                              </div>
                              <div
                                style={{
                                  fontSize: 12,
                                  fontWeight: 700,
                                  fontFamily: "Arial",
                                  color: selected
                                    ? "#22C55E"
                                    : "rgb(156, 163, 175)",
                                  whiteSpace: "nowrap",
                                  flexShrink: 0,
                                }}
                              >
                                {index + 1} pts
                              </div>
                            </div>
                          </Radio>
                        );
                      })}
                    </Space>
                  </Radio.Group>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <div className="d-flex flex-md-row flex-column justify-content-between align-items-center mt-4">
          <CButton
            text="Back"
            size="large"
            htmlType="button"
            onClick={goToBackPage}
            className="mt-3 customBtn"
          />

          <CButton
            text={isLastPage ? "Submit" : "Next"}
            size="large"
            type="primary"
            htmlType={isLastPage ? "submit" : "button"}
            className="p-3 mt-3 customBtn"
            onClick={goToNextPage}
          />
        </div>
      </div>
    </>
  );
};

export default RiskQuestions;
