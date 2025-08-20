import React from "react";
// import logo from "./Images/Logo.png"
import logo from "./Images/Logo-2.png";
import { components } from "react-select";
import EmploymentStatus from "../Components/QuestionSets/EmploymentStatus";

import OccupationalFinancialInformation from "../assets/Images/OccupationalFinancialInformation.png";
import IncomeInformation from "../Components/QuestionSets/IncomeInformation";
import WorkEnvironment from "../Components/QuestionSets/WorkEnvironment";
import WeeklyWorkHours from "../Components/QuestionSets/WeeklyWorkHours";
import SelfEmploymentDetails from "../Components/QuestionSets/SelfEmploymentDetails";
import HeartDiseaseConditions from "../Components/QuestionSets/HeartDiseaseConditions";
import HighBloodPressureHighCholesterol from "../Components/QuestionSets/HighBloodPressureHighCholesterol";
import RespiratoryConditions from "../Components/QuestionSets/RespiratoryConditions";
import CancerTumorsCysts from "../Components/QuestionSets/CancerTumorsCysts";
import Diabetes from "../Components/QuestionSets/Diabetes";
import MentalHealthConditions from "../Components/QuestionSets/MentalHealthConditions";
import BackNeckPain from "../Components/QuestionSets/BackNeckPain";
import StrokeNeurologicalConditions from "../Components/QuestionSets/StrokeNeurologicalConditions";
import LiverKidneyGastrointestinalConditions from "../Components/QuestionSets/LiverKidneyGastrointestinalConditions";
import ArthritisJointDisorders from "../Components/QuestionSets/ArthritisJointDisorders";
import HIVAIDSOtherImmuneSystemDisorders from "../Components/QuestionSets/HIVAIDSOtherImmuneSystemDisorders";
import SurgeriesOperations from "../Components/QuestionSets/SurgeriesOperations";
import LifestyleInformation from "../Components/QuestionSets/LifestyleInformation";
import HazardousActivitiesSports from "../Components/QuestionSets/HazardousActivitiesSports";
import FamilyMedicalHistory from "../Components/QuestionSets/FamilyMedicalHistory";
import Declaration from "../Components/QuestionSets/Declaration";
import HealthMedicalConditions from "../Components/QuestionSets/HealthMedicalConditions";
import LifestyleInformationQuestions from "../Components/QuestionSets/LifestyleInformationQuestions";
import FamilyMedicalHistoryQuestion from "../Components/QuestionSets/FamilyMedicalHistoryQuestion";

import Health__Medical_History from "./Images/Health__Medical_History.png";
import DiabetesImg from "./Images/Diabetes.png"; // this image is also used in Family Medical History
import asthma from "./Images/asthma.png";
import ribbon from "./Images/ribbon.png";
import arthritis from "./Images/arthritis.png";
import injury from "./Images/injury.png";
import psychology from "./Images/psychology.png"; // this image is also used in Family Medical History
import liver from "./Images/liver-cancer.png";
import HIV from "./Images/ribbon-HIV.png";
import headache from "./Images/headache.png";
import surgery from "./Images/surgery.png";
import health from "./Images/High_Blood_Pressure_or_High_Cholesterol.png";
import alertImage from "./Images/image.png";

import overseas from "./Images/OccupationalFinancialInformation.png";
import smoke from "./Images/life-Q1-smoke.png";
import vape from "./Images/life-Q2-vape.png";
import alcohal from "./Images/life-Q3-alcohal.png";
import drugs from "./Images/life-Q4-drugs.png";
import alpine from "./Images/alpine.png";
import travel from "./Images/travel-and-tourism.png";

import heart from "./Images/Family-Q1-heart.png";
import lung_cancer from "./Images/Family-Q2-lung-cancer.png";

const Content = {
  Pages: [
    {
      img: logo,
      Question: "-2",
      route: "/",
      condition: (CRObject) => false,
    },
    {
      img: logo,
      Question: "-1",
      route: "/Disclosure",
      condition: (CRObject) => false,
    },
    {
      description: "Your Personal information",
      Title: "Personal Details",
      statusStep: 0,
      icon: "FaUser",
      route: "/PersonalDetails",
      key: "PersonalDetails",
      condition: (CRObject) => true,
      InnerPages: [
        {
          Title: "Personal Details",
          statusStep: 10,
          icon: "FaUser",
          route: "/",
          key: "PersonalDetails",
          condition: (CRObject) => true,
        },
      ],
    },
    {
      description: "it has few Questions you need to answer",
      Title: "Occupational/Financial Information",
      statusStep: 0,
      icon: "RiCoinsFill",
      route: "/OccupationalFinancialInformation",
      key: "OccupationalFinancialInformation",
      imgUrl: OccupationalFinancialInformation,
      condition: (CRObject) => true,
      InnerPages: [
        {
          Title: "Employment Status",
          statusStep: 20,
          icon: "MdOutlineHomeWork",
          route: "/",
          key: "EmploymentStatus",
          components: <EmploymentStatus />,
          condition: (CRObject) => true,
        },
        // {
        //     Title: 'Second Occupation',
        //     statusStep: 30,
        //     icon: 'IoBriefcase',
        //     route: '/Q2',
        //     key: "SecondOccupation",
        //     components: <EmploymentStatus />,
        //     condition: (CRObject) => false,
        // },
        // {
        //     Title: 'Income Information',
        //     statusStep: 40,
        //     icon: 'AiOutlineDollarCircle',
        //     route: '/Q3',
        //     key: "IncomeInformation",
        //     components: <IncomeInformation />,
        //     condition: (CRObject) => false,
        // },
        // {
        //     Title: 'Work Environment',
        //     statusStep: 50,
        //     icon: 'FaBuilding',
        //     route: '/Q4',
        //     key: "workEnvironment",
        //     components: <WorkEnvironment />,
        //     condition: (CRObject) => false,
        // },
        // {
        //     Title: 'Weekly Work Hours',
        //     statusStep: 60,
        //     icon: 'BsClockHistory',
        //     route: '/Q5',
        //     key: "weeklyWorkHours",
        //     components: <WeeklyWorkHours />,
        //     condition: (CRObject) => false,
        // },
        // {
        //     Title: 'Self-Employment Details',
        //     statusStep: 70,
        //     icon: 'FaUserTie',
        //     route: '/Q6',
        //     key: "SelfEmploymentDetails",
        //     components: <SelfEmploymentDetails />,
        //     // condition: (CRObject) => { return CRObject[`EmploymentStatus_EmploymentType`] === "Self-employed" }
        //     condition: (CRObject) => false
        // },
      ],
    },
    {
      description: "it has few Questions you need to answer",
      Title: "Health & Medical History",
      statusStep: 0,
      icon: "MdOutlineHealthAndSafety",
      route: "/Health_MedicalHistory",
      key: "Health_MedicalHistory",
      condition: (CRObject) => true,
      InnerPages: [
        {
          Title: "Health & Medical conditions",
          statusStep: 10,
          icon: "FaClipboardCheck",
          route: "/",
          key: "healthMedicalConditions",
          components: <HealthMedicalConditions />,
          condition: (CRObject) => true,
        },
        {
          Title: "Heart disease or conditions",
          statusStep: 20,
          icon: "FaHeartPulse",
          route: "/Q1",
          key: "heartDiseaseConditions",
          components: <HeartDiseaseConditions />,
          condition: (CRObject) => {
            return CRObject[`heartDiseaseConditions_DynamicYesNo`] === "Yes";
          },
        },
        {
          Title: "High Blood Pressure or High Cholesterol",
          statusStep: 30,
          icon: "RiStethoscopeLine",
          route: "/Q2",
          components: <HighBloodPressureHighCholesterol />,
          key: "HighBloodPressureHighCholesterol",
          condition: (CRObject) => {
            return (
              CRObject[`HighBloodPressureHighCholesterol_DynamicYesNo`] ===
              "Yes"
            );
          },
        },
        {
          Title: "Respiratory conditions",
          statusStep: 40,
          icon: "MdMonitorHeart",
          route: "/Q3",
          components: <RespiratoryConditions />,
          key: "RespiratoryConditions",
          condition: (CRObject) => {
            return CRObject[`RespiratoryConditions_DynamicYesNo`] === "Yes";
          },
        },
        {
          Title: "Cancer, Tumors, or Cysts",
          statusStep: 50,
          icon: "FaRibbon",
          route: "/Q4",
          key: "CancerTumorsCysts",
          components: <CancerTumorsCysts />,
          condition: (CRObject) => {
            return CRObject[`CancerTumorsCysts_DynamicYesNo`] === "Yes";
          },
        },
        {
          Title: "Diabetes (Type 1 or Type 2)",
          statusStep: 60,
          icon: "FaSyringe",
          route: "/Q5",
          key: "Diabetes",
          components: <Diabetes />,
          condition: (CRObject) => {
            return CRObject[`Diabetes_DynamicYesNo`] === "Yes";
          },
        },
        {
          Title: "Mental Health Conditions",
          statusStep: 70,
          icon: "MdOutlineHealthAndSafety",
          route: "/Q6",
          key: "MentalHealthConditions",
          components: <MentalHealthConditions />,
          condition: (CRObject) => {
            return CRObject[`MentalHealthConditions_DynamicYesNo`] === "Yes";
          },
        },
        {
          Title: "Back or Neck Pain",
          statusStep: 80,
          icon: "FaBone",
          route: "/Q7",
          key: "BackNeckPain",
          components: <BackNeckPain />,
          condition: (CRObject) => {
            return CRObject[`BackNeckPain_DynamicYesNo`] === "Yes";
          },
        },
        {
          Title: "Stroke or Neurological Conditions",
          statusStep: 10,
          icon: "PiBrain",
          route: "/Q8",
          key: "StrokeNeurologicalConditions",
          components: <StrokeNeurologicalConditions />,
          condition: (CRObject) => {
            return (
              CRObject[`StrokeNeurologicalConditions_DynamicYesNo`] === "Yes"
            );
          },
        },
        {
          Title: "Liver, Kidney, or Gastrointestinal Conditions",
          statusStep: 20,
          icon: "GiKidneys",
          route: "/Q9",
          key: "LiverKidneyGastrointestinalConditions",
          components: <LiverKidneyGastrointestinalConditions />,
          condition: (CRObject) => {
            return (
              CRObject[`LiverKidneyGastrointestinalConditions_DynamicYesNo`] ===
              "Yes"
            );
          },
        },
        {
          Title: "Arthritis or Joint Disorders",
          statusStep: 30,
          icon: "GiKneeCap",
          route: "/Q10",
          key: "ArthritisJointDisorders",
          components: <ArthritisJointDisorders />,
          condition: (CRObject) => {
            return CRObject[`ArthritisJointDisorders_DynamicYesNo`] === "Yes";
          },
        },
        {
          Title: "HIV/AIDS or other Immune System Disorders",
          statusStep: 40,
          icon: "FaHeartbeat",
          route: "/Q11",
          key: "HIVAIDSOtherImmuneSystemDisorders",
          components: <HIVAIDSOtherImmuneSystemDisorders />,
          condition: (CRObject) => {
            return (
              CRObject[`HIVAIDSOtherImmuneSystemDisorders_DynamicYesNo`] ===
              "Yes"
            );
          },
        },
        {
          Title: "Surgeries or Operations",
          statusStep: 50,
          icon: "FaProcedures",
          route: "/Q12",
          key: "SurgeriesOperations",
          components: <SurgeriesOperations />,
          condition: (CRObject) => {
            return CRObject[`SurgeriesOperations_DynamicYesNo`] === "Yes";
          },
        },
      ],
    },
    {
      description: "it has few Questions you need to answer",
      Title: "Lifestyle Information",
      statusStep: 0,
      icon: "MdFamilyRestroom",
      route: "/LifestyleInformation",
      key: "LifestyleInformation",
      condition: (CRObject) => true,
      InnerPages: [
        {
          Title: "Lifestyle Information",
          statusStep: 60,
          icon: "GiFamilyHouse",
          route: "/",
          key: "LifestyleInformation",
          components: <LifestyleInformationQuestions />,
          condition: (CRObject) => true,
        },
        {
          Title: "Lifestyle Information Details",
          statusStep: 60,
          icon: "FaWineBottle",
          route: "/Q1",
          key: "LifestyleInformation",
          components: <LifestyleInformation />,
          condition: (CRObject) => {
            return (
              CRObject[`LifestyleInformation_SmokerYesNo`] === "Yes" ||
              CRObject[`LifestyleInformation_VapeYesNo`] === "Yes" ||
              CRObject[`LifestyleInformation_alcohol`] === "Yes" ||
              CRObject[`LifestyleInformation_RecreationalDrugs`] === "Yes"
            );
          },
        },
        {
          Title: "Hazardous activities or sports",
          statusStep: 70,
          icon: "GiParachute",
          route: "/Q2",
          key: "hazardousActivitiesSports",
          components: <HazardousActivitiesSports />,
          // condition: (CRObject) => true,
          condition: (CRObject) => {
            return (
              CRObject[`hazardousActivitiesSports_DynamicYesNo`] === "Yes" ||
              CRObject[`hazardousActivitiesSports_travelOverseas`] === "Yes"
            );
          },
        },
      ],
    },
    {
      description: "it has few Questions you need to answer",
      Title: "Family Medical History",
      statusStep: 0,
      icon: "MdFamilyRestroom",
      route: "/FamilyMedicalHistory",
      key: "FamilyMedicalHistory",
      condition: (CRObject) => true,
      InnerPages: [
        {
          Title: "Family Medical History",
          statusStep: 80,
          icon: "FaClipboardList",
          route: "/",
          key: "FamilyMedicalHistory",
          components: <FamilyMedicalHistoryQuestion />,
          condition: (CRObject) => true,
        },
        {
          Title: "Family Medical History Details",
          statusStep: 80,
          icon: "MdFamilyRestroom",
          route: "/Q1",
          key: "FamilyMedicalHistory",
          components: <FamilyMedicalHistory />,
          condition: (CRObject) => {
            return (
              CRObject[`FamilyMedicalHistory_HeartDisease`] === "Yes" ||
              CRObject[`FamilyMedicalHistory_Cancer`] === "Yes" ||
              CRObject[`FamilyMedicalHistory_Diabetes`] === "Yes" ||
              CRObject[`FamilyMedicalHistory_MentalHealthConditions`] === "Yes"
            );
          },
        },
      ],
    },
    {
      description: "it has few Questions you need to answer",
      Title: "Declaration",
      statusStep: 0,
      icon: "RiCoinsFill",
      route: "/Declaration",
      key: "Declaration",
      InnerPages: [
        {
          Title: "Declaration",
          statusStep: 90,
          icon: "FaFileContract",
          route: "/",
          key: "Declaration",
          components: <Declaration />,
          condition: (CRObject) => true,
        },
      ],
      condition: (CRObject) => true,
    },
  ],
  healthMedicalConditions: [
    {
      title: "Heart disease or conditions",
      img: Health__Medical_History,
      key: "heartDiseaseConditions_DynamicYesNo",
      info: "Heart conditions include Coronary Artery Disease, Heart Attack, Arrhythmia, Heart Failure, Angina, Hypertensive Heart Disease, and heart valve disease—affecting blood flow, heart rhythm, or function. Please provide details if diagnosed or treated.",
    },
    {
      title: "High Blood Pressure or High Cholesterol",
      img: health,
      key: "HighBloodPressureHighCholesterol_DynamicYesNo",
      info: "These conditions can raise the risk of heart disease or stroke. High Blood Pressure means consistently high force of blood in arteries. High Cholesterol involves fat buildup in blood vessels. Often symptomless, both may require medication or lifestyle changes. If diagnosed or treated, please provide details.",
    },
    {
      title: "Respiratory conditions",
      img: asthma,
      key: "RespiratoryConditions_DynamicYesNo",
      info: "Respiratory conditions include asthma, COPD, bronchitis, emphysema, pneumonia, pulmonary fibrosis, sleep apnea, and tuberculosis—causing breathing issues, lung damage, or infections. If diagnosed or treated, please provide details.",
    },
    {
      title: "Cancer, Tumors, Cysts",
      img: ribbon,
      key: "CancerTumorsCysts_DynamicYesNo",
      info: "Cancer and tumor conditions include all types of cancer (e.g., breast, lung, prostate, colorectal, ovarian, skin, blood cancers like lymphoma or leukemia), brain tumors, benign tumors, and cysts (e.g., ovarian or kidney cysts). If diagnosed or treated, please provide details.",
    },
    {
      title: "Diabetes (Type 1 or Type 2)",
      img: DiabetesImg,
      key: "Diabetes_DynamicYesNo",
      info: "A chronic condition affecting how the body regulates blood sugar. Type 1 is usually diagnosed early and requires insulin; Type 2 is more common and may be managed with diet, medication, or insulin. If diagnosed or treated, please provide details.",
    },
    {
      title: "Mental Health Conditions",
      img: psychology,
      key: "MentalHealthConditions_DynamicYesNo",
      info: "Mental health conditions include anxiety, depression, bipolar disorder, schizophrenia, PTSD, and OCD, which may affect mood, behavior, or thinking. If diagnosed, treated, or seen by a psychiatrist or psychologist, please provide details.",
    },
    {
      title: "Back or Neck Pain",
      img: injury,
      key: "BackNeckPain_DynamicYesNo",
      info: "Spinal and back conditions include lower and upper back pain, neck pain, sciatica, herniated discs, degenerative disc disease, and cervical spine injuries. If diagnosed, treated, or seen by a specialist or chiropractor, please provide details.",
    },
    {
      title: "Stroke or Neurological Conditions",
      img: headache,
      key: "StrokeNeurologicalConditions_DynamicYesNo",
      info: "Neurological conditions include stroke (affecting brain function due to blood supply issues), epilepsy (seizure disorders), and multiple sclerosis (affecting the nervous system). If diagnosed, treated, or seen by a neurologist, please provide details.",
    },
    {
      title: "Liver, Kidney, or Gastrointestinal Conditions",
      img: liver,
      key: "LiverKidneyGastrointestinalConditions_DynamicYesNo",
      info: "Conditions include liver disease (e.g., hepatitis, cirrhosis), kidney disease (e.g., chronic kidney disease, kidney failure), and gastrointestinal issues (e.g., ulcers, Crohn’s disease, IBS). If diagnosed, treated, or seen by a specialist, please provide details.",
    },
    {
      title: "Arthritis or Joint Disorders",
      img: arthritis,
      key: "ArthritisJointDisorders_DynamicYesNo",
      info: "Joint conditions include rheumatoid arthritis (autoimmune joint inflammation), osteoarthritis (wear-and-tear joint damage), and gout (uric acid buildup causing joint pain). If diagnosed, treated, or seen by a specialist, please provide details.",
    },
    {
      title: "HIV/AIDS or other Immune System Disorders",
      img: HIV,
      key: "HIVAIDSOtherImmuneSystemDisorders_DynamicYesNo",
      info: "Immune system conditions include HIV/AIDS, which affects the body's ability to fight infections, and other immune disorders that may impact overall health. If diagnosed, treated, or seen by a specialist, please provide details.",
    },
    {
      title: "Surgeries or Operations",
      img: surgery,
      key: "SurgeriesOperations_DynamicYesNo",
      info: "Includes any past procedures, such as organ removal, joint replacements, or heart surgeries. This helps assess medical history and potential risks. If diagnosed or treated, please provide details.",
    },
  ],
  lifestyleInformation: [
    {
      title: "Do you Smoke ?",
      img: smoke,
      key: "LifestyleInformation_SmokerYesNo",
    },
    {
      title: "Do you Vape ?",
      img: vape,
      key: "LifestyleInformation_VapeYesNo",
    },
    {
      title: "Do you consume alcohol ?",
      img: alcohal,
      key: "LifestyleInformation_alcohol",
    },
    {
      title: "Do you use recreational drugs ?",
      img: drugs,
      key: "LifestyleInformation_RecreationalDrugs",
    },
    {
      title: "Do you participate in any hazardous activities or sports ?",
      img: alpine,
      key: "hazardousActivitiesSports_DynamicYesNo",
      info: "Hazardous activities include extreme sports and high-risk physical activities that may impact your overall risk assessment. These activities range from skydiving, motor racing, and rock climbing to extreme hiking, martial arts, and water sports.",
    },
    {
      title: "Do you plan to travel overseas in the next 12 months?",
      img: travel,
      key: "hazardousActivitiesSports_travelOverseas",
    },
  ],
  familyMedicalHistory: [
    {
      title: "Do anyone had Heart Disease or Stroke?",
      img: heart,
      key: "FamilyMedicalHistory_HeartDisease",
    },
    {
      title: "Do anyone had Cancer?",
      img: lung_cancer,
      key: "FamilyMedicalHistory_Cancer",
    },
    {
      title: "Do anyone had Diabetes",
      img: DiabetesImg,
      key: "FamilyMedicalHistory_Diabetes",
    },
    {
      title: "Do anyone had Mental Health Conditions?",
      img: psychology,
      key: "FamilyMedicalHistory_MentalHealthConditions",
    },
  ],
};

export default Content;
