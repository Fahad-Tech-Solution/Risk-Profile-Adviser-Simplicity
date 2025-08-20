import React from "react";
import { Card, Image } from "react-bootstrap";

// const DynamicCardOrignal = ({
//   iconSrc,
//   altText,
//   children,
//   hiddenBorder = false,
//   showImage = true,
//   aosSettings = {
//     animation: "zoom-in-right",
//     duration: 350,
//     easing: "ease-in-sine",
//   },
//   Head,
// }) => {
//   return (
//     // <Card className="mb-3 p-2 scale-up-tl"
//     <Card
//       // className="mb-3 p-2 scale-up-tl"
//       className={"mb-3 p-2 scale-up-tl" + (hiddenBorder ? " border-0" : "")}
//       data-aos={aosSettings.animation}
//       data-aos-duration={aosSettings.duration}
//       data-aos-easing={aosSettings.easing}
//     >
//       <Card.Body>
//         <div className="row justify-content-between">
//           {Head && (
//             <div className="col-md-12 mb-3">
//               {" "}
//               <h5 className="fw-bold Head1 text-center ">{Head}</h5>
//             </div>
//           )}
//           <div className="col-md-4 d-flex flex-column justify-content-center align-item-center">
//             {showImage && iconSrc && (
//               <Image
//                 src={iconSrc}
//                 alt={altText}
//                 fluid
//                 className="w-75 m-auto "
//               />
//             )}
//           </div>
//           <div className="col-md-8 d-flex justify-content-center">
//             <div className="row my-auto w-100">{children}</div>
//           </div>
//         </div>
//       </Card.Body>
//     </Card>
//   )
// };

const DynamicCard = ({
    iconSrc,
    altText,
    children,
    hiddenBorder = false,
    showImage = true,
    imageTopCentered = false, // 👈 control layout style
    aosSettings = {
      animation: "zoom-in-right",
      duration: 350,
      easing: "ease-in-sine"
    },
    Head
  }) => {
    return (
      <Card
        className={"mb-3 p-2 scale-up-tl" + (hiddenBorder ? " border-0" : "")}
        // data-aos={aosSettings.animation}
        // data-aos-duration={aosSettings.duration}
        // data-aos-easing={aosSettings.easing}
      >
        <Card.Body>
          {imageTopCentered ? (
            <>
              {/* Top-centered layout */}
                <div className="text-center mb-3">
                {Head && (
                <div className="mb-3 text-center">
                  <h5 className="fw-bold Head1">{Head}</h5>
                </div>
              )}
              {showImage && iconSrc && (
                  <Image src={iconSrc} alt={altText} fluid className="w-25" />
                )}
                </div>

              <div className="row justify-content-center">
                <div className="col-md-10">{children}</div>
              </div>
            </>
          ) : (
            <>
              {/* Side-by-side layout */}
              {Head && (
                <div className='col-md-12 mb-3'>
                  <h5 className='fw-bold Head1 text-center'>{Head}</h5>
                </div>
              )}
              <div className='row justify-content-between'>
                {iconSrc && (
                  <div className='col-md-4 d-flex flex-column justify-content-center align-item-center'>
                    <Image src={iconSrc} alt={altText} fluid className='w-75 m-auto ' />
                  </div>
                )}
                <div className={`col-md-${iconSrc ? '8' : '12'} d-flex justify-content-center`}>
                  <div className='row my-auto w-100'>
                    {children}
                  </div>
                </div>
              </div>
            </>
          )}
        </Card.Body>
      </Card>
    );
  };
  

export default DynamicCard;
