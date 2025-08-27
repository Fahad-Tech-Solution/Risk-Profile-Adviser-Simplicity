import React, { useEffect, useState } from "react";
import { ConfigProvider, Steps } from "antd";
import {
  FaBriefcase,
  FaCheck,
  FaGift,
  FaKey,
  FaMoneyCheckDollar,
  FaUser,
  FaPlus,
  FaChartLine,
  FaTriangleExclamation,
  FaGraduationCap,
  FaChartPie,
  FaMoneyBillWave,
  FaBuilding,
  FaUserTie,
  FaHeartPulse,
  FaRibbon,
  FaSyringe,
  FaBone,
  FaWineBottle,
  FaClipboardCheck,
  FaFileSignature,
  FaFileContract,
  FaClipboardList,
} from "react-icons/fa6";
import {
  MdFamilyRestroom,
  MdWaterDrop,
  MdOutlineBalance,
  MdOutlineTimeline,
  MdOutlineHomeWork,
  MdMonitorHeart,
  MdHealthAndSafety,
  MdOutlineHealthAndSafety,
} from "react-icons/md";
import {
  RiCoinsFill,
  RiDiscountPercentFill,
  RiStethoscopeLine,
} from "react-icons/ri";

import { useLocation, useNavigate } from "react-router-dom";
import { IoBriefcase, IoBriefcaseOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import { handleTouchFields, openNotification } from "../assets/Api/Api";
import { PiBrain } from "react-icons/pi";
import {
  GiFamilyHouse,
  GiKidneys,
  GiKneeCap,
  GiMeal,
  GiParachute,
} from "react-icons/gi";
import { FaHeartbeat, FaProcedures } from "react-icons/fa";
import ProgressBar from "../assets/Custom/ProgressBar/ProgressBar";
import { Grid } from "antd";
import CompRoutes from "../routes";

const TopStepsBar = (props) => {
  let {
    setFieldValue,
    handleBlur,
    values,
    validateForm,
    validateField,
    setFieldTouched,
    handleChange,
  } = props.FormickOBj;
  const sidebarWidth = props.collapsed ? "80px" : "250px"; // Adjust as needed

  const [items, setItems] = useState([]);
  const [currentStepComplete, setCurrentStepComplete] = useState(5);
  const { Pages } = CompRoutes;

  const location = useLocation();
  const navigate = useNavigate();

  const { md } = Grid.useBreakpoint();
  const isMobile = md;

  useEffect(() => {
    const currentPath = location.pathname;

    const currentIndex = Pages.findIndex(
      (page) => page.route === `${currentPath}`
    );

    const progressPercent =
      currentIndex !== -1 ? ((currentIndex + 1) / Pages.length) * 100 : 0;

    setCurrentStepComplete(progressPercent);

    const iconMap = {
      FaBriefcase,
      FaCheck,
      FaGift,
      FaKey,
      FaMoneyCheckDollar,
      FaUser,
      // FaHome,
      // FaQuestionCircle,
      MdFamilyRestroom,
      RiCoinsFill,
      FaPlus,
      FaChartLine,
      MdWaterDrop,
      FaTriangleExclamation,
      RiDiscountPercentFill,
      MdHealthAndSafety,
      MdOutlineBalance,
      FaGraduationCap,
      FaChartPie,
      MdOutlineTimeline,
      FaMoneyBillWave,
      MdOutlineHomeWork,
      IoBriefcaseOutline,
      IoBriefcase,
      AiOutlineDollarCircle,
      FaBuilding,
      BsClockHistory,
      FaUserTie,
      FaHeartPulse,
      RiStethoscopeLine,
      MdMonitorHeart,
      FaRibbon,
      FaSyringe,
      PiBrain,
      FaBone,
      GiKidneys,
      GiKneeCap,
      FaHeartbeat,
      FaProcedures,
      GiParachute,
      GiMeal,
      FaWineBottle,
      FaClipboardCheck,
      MdOutlineHealthAndSafety,
      GiFamilyHouse,
      FaFileSignature,
      FaFileContract,
      FaClipboardList,
    };

    let updatedItems = Pages.map((item, index) => {
      const IconComponent = iconMap[item.icon] || FaUser; // Default to FaUser if not found

      const fullRoute = `${currentPath}`;
      const isCurrentStep = fullRoute === item.route;

      let status;

      const globalIndex = index; // Map the local index to the global index

      if (globalIndex < currentIndex) {
        // Previous pages have been completed
        status = "finish";
      } else if (globalIndex === currentIndex) {
        // The current page is in progress
        status = "process";
      } else {
        // Future pages are yet to be completed
        status = "wait";
      }

      return {
        ...item,
        icon: (
          <span
            className={`rounded-circle text-light ${
              status == "finish"
                ? "bgColorIncomeGreen"
                : status == "process"
                ? "bgColorIncomeBlack"
                : "bgColorIncome2"
            }`}
            role="button"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px", // Adjust icon size here
              width: "2rem", // Adjust icon container size here
              height: "2rem", // Adjust icon container height here
            }}
            onClick={async () => {
              if (currentPath === "PersonalDetails") {
                const touch = await setFieldTouched("EmailAddress");
                if (!touch.EmailAddress) {
                  handleStepClick(`${item.route}`);
                } else {
                  openNotification(
                    "error",
                    "topRight",
                    "Warning Notification",
                    "Please! enter email before proceeding"
                  );
                }
              } else {
                let handleTouchFieldsResult = await handleTouchFields(
                  location,
                  setFieldTouched,
                  values,
                  validateForm
                );

                if (!handleTouchFieldsResult) return false;

                handleStepClick(`${item.route}`);
              }
            }}
          >
            <IconComponent />
          </span>
        ),
        status: status,
        subTitle: (
          <span
            style={{
              color:
                status == "finish"
                  ? "#36b446"
                  : status == "process"
                  ? "#000"
                  : "#808080",
              fontSize: "12px",
              width: "100%",
              fontWeight:
                status == "finish" || status == "process" ? "700" : "500",
            }}
          >
            {item.Title}
          </span>
        ),
      };
    });

    // ✅ Only show 3 steps at a time on mobile
    if (!isMobile) {
      const groupSize = 3; // how many steps per window
      const groupIndex = Math.floor(currentIndex / groupSize); // which group user is in

      const start = groupIndex * groupSize;
      const end = Math.min(start + groupSize, updatedItems.length);

      updatedItems = updatedItems.slice(start, end);
    }

    setItems(updatedItems);
  }, [location, Pages, values, isMobile]);

  const handleStepClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="pt-4 px-2 d-flex justify-content-center align-items-center overflow-auto ">
        <div style={{ width: !isMobile ? "100%" : "85%" }}>
          <ConfigProvider
            theme={{
              components: {
                Steps: {
                  customIconFontSize: 30,
                },
              },
              token: {
                colorPrimary: "#36b446",
                fontSize: 12,
                lineWidth: 4,
              },
            }}
          >
            <Steps
              items={items}
              labelPlacement="vertical"
              initial={0}
              responsive={false}
              status="process"
            />
          </ConfigProvider>
        </div>
      </div>
      <div className="pt-4 px-3 d-flex justify-content-center align-items-center overflow-auto ">
        <div className="w-100 px-4 mb-3">
          <ProgressBar progress={currentStepComplete} />
        </div>
      </div>
    </>
  );
};

export default TopStepsBar;
