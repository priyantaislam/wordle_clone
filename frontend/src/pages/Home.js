import React, { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import styled from "styled-components"; // Import styled from styled-components

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 50px); /* 5 columns with 50px width each */
  grid-template-rows: repeat(6, 50px);    /* 6 rows with 50px height each */
  gap: 10px; /* Adjust the gap between boxes as needed */
  padding: 10px; /* Add padding around the grid */
  margin-left:30%;
`;

// Create a styled component for the grid item
const GridItem = styled.div`
  border: 2px solid #ccc; /* Add a grey border around each box */
  width: 50px; /* Set the width of each box to 50px */
  height: 50px; /* Set the height of each box to 50px to make them squares */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px; /* Add any additional styling you need */
  
`;
const Home = () => {
  const { user } = useAuthContext();

  useEffect(() => {
  }, []);

  // Create an array to represent the grid cells
  const gridItems = [];

  // Generate the grid items
  for (let i = 0; i < 5 * 6; i++) {
    gridItems.push(
      <GridItem key={i}>
        {/* You can add content here if needed */}
      </GridItem>
    );
  }
  return (
    <GridContainer>{gridItems}</GridContainer>
  );
};

export default Home;