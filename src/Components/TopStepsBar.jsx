import React, { useEffect, useState } from "react";
import { message } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { handleTouchFields, openNotification } from "../assets/Api/Api";
import ProgressBar from "../assets/Custom/ProgressBar/ProgressBar";
import CompRoutes from "../routes";

const PRIMARY_GREEN = "#22c55e";
const MUTED = "#9ca3af";
const LINE = "#e5e7eb";
const WARNING = "rgb(245, 158, 11)";
const WARNING_BG = "rgb(255, 247, 213)";

const TopStepsBar = ({
  FormickOBj = {},
  lockedStepKeys = [],
  conflicts = [],
}) => {
  const { values, validateForm, setFieldTouched } = FormickOBj;
  const { Pages } = CompRoutes;

  const navigate = useNavigate();
  const location = useLocation();

  const [stepData, setStepData] = useState([]);
  const [currentStepComplete, setCurrentStepComplete] = useState(0);

  useEffect(() => {
    const currentPath = location.pathname;
    const steps = Pages.filter((page) => page.route && page.route !== "/");
    const activeIndex = steps.findIndex((step) => step.route === currentPath);

    const progressPercent =
      activeIndex >= 0 ? ((activeIndex + 1) / steps.length) * 100 : 0;

    setCurrentStepComplete(progressPercent);
    setStepData(steps);
  }, [location.pathname, Pages]);

  const handleStepClick = async (route) => {
    if (route === "/cards" && conflicts.length > 0) {
      message.warning(
        "Please review the inconsistencies before proceeding to the results step.",
      );
      return;
    }

    const currentPath = location.pathname;
    if (currentPath === "/PersonalDetails") {
      await setFieldTouched?.("EmailAddress", true, false);
      navigate(route);
      return;
    }

    const handleTouchFieldsResult = await handleTouchFields(
      location,
      setFieldTouched,
      values,
      validateForm,
    );

    if (!handleTouchFieldsResult) return;

    navigate(route);
  };

  const activeIndex = stepData.findIndex(
    (step) => step.route === location.pathname,
  );

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        style={{
          position: "relative",
          marginBottom: 28,
          paddingTop: 8,
          width: "70%",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "2%",
            right: "2%",
            top: 30,
            height: 2,
            background: LINE,
            zIndex: 0,
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            position: "relative",
            zIndex: 1,
            gap: 2,
            overflowX: "auto",
            paddingBottom: 4,
            paddingInline: 20,
          }}
        >
          {stepData.map((step, index) => {
            const active = index === activeIndex;
            const completed = index < activeIndex;
            const warningActive =
              lockedStepKeys.includes(step.route) && activeIndex > index;
            const icon = step.icon || (completed ? "✔️" : index + 1);
            const label = step.Title ?? step.route;

            return (
              <div
                key={step.route}
                role="button"
                onClick={() => handleStepClick(step.route)}
                style={{
                  flex: "1 1 56px",
                  minWidth: 52,
                  maxWidth: 120,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  background: "none",
                  border: "none",
                  padding: "5px 2px",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: warningActive
                      ? WARNING_BG
                      : active || completed
                        ? PRIMARY_GREEN
                        : "#fff",
                    border: warningActive
                      ? `2px solid ${WARNING}`
                      : active || completed
                        ? `2px solid ${PRIMARY_GREEN}`
                        : `2px solid ${LINE}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    lineHeight: 1,
                    boxShadow: warningActive
                      ? "0 0 0 4px rgba(245, 159, 11, 0.35)"
                      : active
                        ? "0 0 0 4px rgba(34, 197, 94, .15)"
                        : "none",
                    color: warningActive ? WARNING : undefined,
                  }}
                >
                  <span>{icon}</span>
                  {warningActive ? (
                    <span
                      style={{
                        position: "absolute",
                        top: -4,
                        right: -4,
                        width: 14,
                        height: 14,
                        borderRadius: "50%",
                        background: "red",
                        color: "#fff",
                        fontSize: 8,
                        fontWeight: 800,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 0 0 2px #fff",
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      !
                    </span>
                  ) : null}
                </div>
                <span
                  style={{
                    marginTop: 8,
                    fontSize: 9,
                    lineHeight: 1.2,
                    textAlign: "center",
                    color: warningActive
                      ? WARNING
                      : active
                        ? PRIMARY_GREEN
                        : completed
                          ? "rgb(55, 65, 81)"
                          : MUTED,
                    fontWeight:
                      warningActive || active || completed ? 700 : 400,
                    display: "block",
                    padding: "0 23px",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className="pt-4 px-3 d-flex justify-content-center align-items-center overflow-auto ">
        <div className="w-100 px-4 mb-3">
          <ProgressBar progress={currentStepComplete} />
        </div>
      </div> */}
    </div>
  );
};

export default TopStepsBar;
