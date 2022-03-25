import React from "react";
import styled from "styled-components";
import Select from "react-select";
import { useState } from "react";

const options = [
  { value: "human", label: "Age Cat To Human" },
  { value: "cat", label: "Age Human To Cat" },
];
function Sidebar({ onSubmit }) {
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!year && !month) return;
    if ((year && !Number.isInteger(+year)) || +year < 0) return;
    if ((month && !Number.isInteger(+month)) || +month < 0) return;
    onSubmit({
      year: +year,
      month: +month,
      selectedOption: selectedOption.value,
    });
  };
  return (
    <SidebarContainer>
      <form onSubmit={submitHandler}>
        <Header>
          <HeaderBrand>Cat Calculator</HeaderBrand>
          <HeaderDescription>
            Convert between age of cat and age of human
          </HeaderDescription>
        </Header>
        <ContentSelector>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            styles={{ width: "100%" }}
          />
        </ContentSelector>
        <ContentInput>
          <input
            type='number'
            placeholder='Year'
            onChange={(e) => setYear(e.target.value)}
          />
          <input
            max='12'
            type='number'
            placeholder='Month'
            onChange={(e) => setMonth(e.target.value)}
          />
        </ContentInput>
        <ButtonContainer>
          <Button>Convert</Button>
          <Button danger>Reset</Button>
        </ButtonContainer>
      </form>
      <ReferentContainer>
        <h4>Reference information</h4>
        <List>
          <ListItem>
            <ReferentLink
              href='https://www.inchcalculator.com/cat-age-calculator/'
              target='_blank'
            >
              How Cat Age Calculator ?
            </ReferentLink>
          </ListItem>
          <ListItem>
            <ReferentLink href='https://github.com/ntpon' target='_blank'>
              Source Code
            </ReferentLink>
          </ListItem>
        </List>
      </ReferentContainer>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  background: rgba(0, 0, 0, 0.8);
  color: white;
  flex: 0.23;
  padding: 10px;
`;

const Header = styled.header`
  padding: 3px;
  margin-top: 10px;
`;

const HeaderBrand = styled.h1`
  text-transform: uppercase;
  font-size: 24px;
  margin-top: 10px;
  text-align: center;
`;

const HeaderDescription = styled.p`
  margin-top: 10px;
  text-align: center;
  text-transform: lowercase;
`;
const ContentSelector = styled.div`
  margin-top: 10px;
  display: flex;
  > div {
    width: 100%;
    margin: 5px;
    color: #000;
  }
`;

const ContentInput = styled.div`
  display: flex;
  margin-top: 5px;
  input {
    padding: 10px;
    width: 50%;
    margin: 5px;
    border-radius: 5px;
    border-color: transparent;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 5px; */
  margin-right: 10px;
`;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  border-color: transparent;
  background: ${(props) => (props.danger ? "#f73378" : "#4dabf5")};
  color: white;
  font-weight: bold;
  :hover {
    background: ${(props) => (props.danger ? "#ab003c" : "#1769aa")};
  }
  :active {
    border-color: #000;
  }
`;

const ReferentContainer = styled.aside`
  border-top: 5px solid white;
  margin-top: 25px;
  > h4 {
    margin-top: 25px;
    text-align: center;
    font-size: 18px;
    text-transform: uppercase;
    line-height: 1.7;
  }
`;

const List = styled.ul`
  margin-top: 10px;
  margin-left: 20px;
  padding: 10px;
`;
const ListItem = styled.li`
  margin-top: 5px;
`;
const ReferentLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 14px;
`;
