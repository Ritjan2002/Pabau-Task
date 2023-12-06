import React, { useState } from "react";
import SelectedOption from "./SelectedOption";
import Header from "./Header";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Body = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [selection, setSelection] = useState();
  const [step, setStep] = useState(1);

  const options = [
    {
      value: "Anti Wrinkle Treatment",
      src: "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png",
    },
    {
      value: "Dermal Fillers",
      src: "https://i.natgeofe.com/n/49f1c59b-095d-47a6-b72c-92bc6740a37c/tpc18-outdoor-gallery-1693450-12040196_03_square.jpg",
    },
    {
      value: "Secret Rf",
      src: "https://media.istockphoto.com/id/655667264/pt/foto/creative-layout-made-of-green-leaves-with-paper-card-note-flat-lay-nature-concept.jpg?s=612x612&w=0&k=20&c=06bvq7M71Plq01Khk39hCEsVImo5fUsLPoTFh7eWZqM=",
    },
    {
      value: "Harmony Ca",
      src: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/bella-vista-tanyard-creek-waterfall-square-art-print-gregory-ballos.jpg",
    },
    {
      value: "Facials",
      src: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/a-single-sunflower-in-a-square-holly-eads.jpg",
    },
  ];

  const selected = (option) => {
    setIsSelected(true);
    setSelection(option);
    setStep(2);
  };

  const back = () => {
    setIsSelected(false);
    setStep(1);
  };
  return (
    <div style={{ backgroundColor: "#F7F7F9", height: "90vh" }}>
      <Header step={step} />
      <br />
      <div
        style={{
          backgroundColor: "white",
          width: "fit-content",
          padding: "25px",
          margin: "auto",
          marginBottom: "",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          {!isSelected &&
            options.map((option, index) => (
              <div
                key={index}
                onClick={() => selected(option.value)}
                style={{
                  border: "1px solid lightgrey",
                  width: "500px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "3px 15px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <img src={option.src} alt="" style={{ width: "50px" }} />
                  <h3>{option.value}</h3>
                </div>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{ color: "grey" }}
                  />
                </button>
              </div>
            ))}
        </div>
        {isSelected && (
          <div>
            <SelectedOption selected={selection} />
            <button onClick={back}>Back</button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Body;
