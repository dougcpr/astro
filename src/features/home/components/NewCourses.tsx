import React from "react";
import styled from "styled-components";

const NewCoursesContainer = styled.div`
  display: grid;
  grid-template-rows: 2rem 20rem;
`

const NewCoursesCarousel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1rem;
  padding: 1rem;
  @media(max-width: 750px) {
    overflow-x: scroll;
    grid-template-columns: repeat(3, 200px);
  }
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
  height: 100%;
`

const NewCoursesCardDescription = styled.div`
  background-color: lightblue;
  height: 100%;
`

const NewCoursesCardFooter = styled.div`
  align-items: center;
  background-color: lightblue;
  height: 100%;
  display: flex;
  justify-content: space-between;
`


const NewCourses = () => {
  return (
    <NewCoursesContainer>
      <h3>New Courses</h3>
      <NewCoursesCarousel>
        <NewCoursesCard>
          <NewCoursesCardImage>Image Goes Here</NewCoursesCardImage>
          <NewCoursesCardDescription>
            <div>Title</div>
            <div>X Lessons</div>
          </NewCoursesCardDescription>
          <NewCoursesCardFooter>
            <div>Image Profiles</div>
            <div>Nav</div>
          </NewCoursesCardFooter>
        </NewCoursesCard>
        <NewCoursesCard>
          <NewCoursesCardImage>Image Goes Here</NewCoursesCardImage>
          <NewCoursesCardDescription>
            <div>Title</div>
            <div>X Lessons</div>
          </NewCoursesCardDescription>
          <NewCoursesCardFooter>
            <div>Image Profiles</div>
            <div>Nav</div>
          </NewCoursesCardFooter>
        </NewCoursesCard>
        <NewCoursesCard>
          <NewCoursesCardImage>Image Goes Here</NewCoursesCardImage>
          <NewCoursesCardDescription>
            <div>Title</div>
            <div>X Lessons</div>
          </NewCoursesCardDescription>
          <NewCoursesCardFooter>
            <div>Image Profiles</div>
            <div>Nav</div>
          </NewCoursesCardFooter>
        </NewCoursesCard>
      </NewCoursesCarousel>
    </NewCoursesContainer>
  );
}

export default NewCourses