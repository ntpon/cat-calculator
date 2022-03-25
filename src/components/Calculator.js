import React from "react";
import styled from "styled-components";
import imageBG from "../assets/bg.jpg";

// import cat1 from "../assets/cat-1.png";
function Calculator({ year, month, yearCal, selected, information }) {
  return (
    <CalculatorContainer>
      <CalculatorHeader>
        {information ? (
          <>
            <p>
              From {selected === "human" ? "Human " : "Cat "}
              {year && year !== 0 ? year + " Y" : ""}
              {month && month !== 0 ? month + " M" : ""}
            </p>
            <p>Age of cat is {yearCal} Y</p>
            <p>
              "
              {selected === "human"
                ? information[0].title
                : information[1].title}
              "
            </p>
          </>
        ) : (
          <p>Please Enter Age Cat / Human</p>
        )}
      </CalculatorHeader>
      <CalculatorContent>
        {information ? (
          <>
            <CatContainer>
              <img src={information[0]?.image} alt='' />
            </CatContainer>
            <HumanContainer>
              <img src={information[1]?.image} alt='' />
            </HumanContainer>
          </>
        ) : (
          <img src={imageBG} alt='' />
        )}
      </CalculatorContent>
    </CalculatorContainer>
  );
}

export default Calculator;
const CalculatorContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const CalculatorHeader = styled.div`
  background: white;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 20%;
  > p {
    color: white;
    font-size: 24px;
    padding: 5px;
    @media (max-width: 650px) {
      font-size: 18px;
    }
  }
`;

const CalculatorContent = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  /* padding: 20px;  */

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CalculatorLabel = styled.h4`
  font-size: 24px;
`;

const CatContainer = styled.div`
  width: 50%;
  background: rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const HumanContainer = styled.div`
  width: 50%;
  background: rgba(0, 0, 0, 0.14);
  padding: 10px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
