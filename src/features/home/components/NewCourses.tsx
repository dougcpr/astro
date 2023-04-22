import React from "react";
import styled from "styled-components";

const NewCoursesCarousel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1rem;
  padding: 1rem;
`

const NewCoursesCard = styled.div`
  padding: 1rem;
  background-color: lightcoral;
  display: grid;
  row-gap: 1rem;
  grid-template-rows: 5fr 3fr 2fr;
`

const NewCoursesCardImage = styled.div`
  background-color: lightblue;
`

const NewCoursesCardDescription = styled.div`
  background-color: lightblue;
`

const NewCoursesCardFooter = styled.div`
  background-color: lightblue;
`


const NewCourses = () => {
  return (
    <NewCoursesCarousel>
      <NewCoursesCard>
        <NewCoursesCardImage />
        <NewCoursesCardDescription />
        <NewCoursesCardFooter />
      </NewCoursesCard>
      <NewCoursesCard>
        <NewCoursesCardImage />
        <NewCoursesCardDescription />
        <NewCoursesCardFooter />
      </NewCoursesCard>
      <NewCoursesCard>
        <NewCoursesCardImage />
        <NewCoursesCardDescription />
        <NewCoursesCardFooter />
      </NewCoursesCard>
    </NewCoursesCarousel>
  );
}

export default NewCourses