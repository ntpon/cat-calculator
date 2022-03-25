import { useState } from "react";
import styled from "styled-components";
import Calculator from "./components/Calculator";
import Sidebar from "./components/Sidebar";
import human1 from "./assets/human-1.png";
import cat1 from "./assets/cat-1.png";
import cat2 from "./assets/cat-2.png";
import human2 from "./assets/human-2.png";
import cat3 from "./assets/cat-3.png";
import human3 from "./assets/human-3.png";
import cat4 from "./assets/cat-4.png";
import human4 from "./assets/human-4.png";
const catResults = {
  kitten: {
    title: "Kitten",
    image: cat1,
  },
  junior: {
    title: "Junior Cat",
    image: cat2,
  },
  adult: {
    title: "Adult Cat",
    image: cat3,
  },
  senior: {
    title: "Senior Cat",
    image: cat4,
  },
};

const humanResults = {
  kitten: {
    title: "Child",
    image: human1,
  },
  junior: {
    title: "Teenager",
    image: human2,
  },
  adult: {
    title: "Adult",
    image: human3,
  },
  senior: {
    title: "Old Man / Old Woman",
    image: human4,
  },
};

function App() {
  const [data, setData] = useState(null);
  const onSubmit = (data) => {
    let { year, month, selectedOption } = data;
    let calYear = 0;
    calYear = year + month / 12;

    if (selectedOption === "human") {
      if (year >= 2) {
        calYear = (calYear - 2) * 4 + 24;
      } else {
        calYear = calYear * 15;
      }
    } else {
      if (year >= 24) {
        calYear = (calYear - 24) / 4 + 2;
      } else {
        calYear = calYear * (1 / calYear);
      }
    }
    let information = [];
    const checkAge = selectedOption === "human" ? calYear : year;
    if (checkAge >= 56) {
      information = [catResults.senior, humanResults.senior];
    } else if (checkAge >= 24) {
      information = [catResults.adult, humanResults.adult];
    } else if (checkAge >= 10) {
      information = [catResults.junior, humanResults.junior];
    } else {
      information = [catResults.kitten, humanResults.kitten];
    }

    setData({
      year,
      month,
      yearCal: parseInt(calYear),
      selected: selectedOption,
      information,
    });
    // if(data)
  };

  return (
    <AppContainer>
      <Sidebar onSubmit={onSubmit} />
      <MainContainer>
        <Calculator
          month={data?.month}
          yearCal={data?.yearCal}
          year={data?.year}
          selected={data?.selected}
          information={data?.information}
        />
      </MainContainer>
    </AppContainer>
  );
}

export default App;
const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;
const MainContainer = styled.div`
  flex: 0.77;
`;
