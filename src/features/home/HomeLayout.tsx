import React, { FC } from "react";
import styled from "styled-components";

const HomeDashboardGrid = styled.div`
  padding: 1rem;
  display: grid;
  column-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  @media(max-width: 800px) {
    grid-template-columns: 1fr;
    height: calc(100vh - 7rem);
    overflow: scroll;
  }
`

const HomeDashboardCourseRow = styled.div`
  display: grid;
  row-gap: 1rem;
  grid-template-rows: 3rem 1fr 1fr;
  @media(max-width: 800px) {
    grid-template-rows: 3rem 25rem 25rem;
  }
`

const HomeDashboardProgressRow = styled.div`
  display: grid;
  row-gap: 1rem;
  grid-template-rows: 1fr 1fr 1fr;
  @media(max-width: 800px) {
    grid-template-rows: 25rem 25rem 25rem;
  }
`
const HomeDashboardFillerCard = styled.div`
  background-color: lightblue;
  height: 100%;
  width: 100%;
`

const HomeLayout = () => {
  return (
    <HomeDashboardGrid>
      <HomeDashboardCourseRow>
        <HomeDashboardFillerCard/>
        <HomeDashboardFillerCard/>
        <HomeDashboardFillerCard/>
      </HomeDashboardCourseRow>
      <HomeDashboardProgressRow>
        <HomeDashboardFillerCard/>
        <HomeDashboardFillerCard/>
        <HomeDashboardFillerCard/>
      </HomeDashboardProgressRow>
    </HomeDashboardGrid>
  );
}

export default HomeLayout