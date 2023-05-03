import React from "react";
import styled from "styled-components";
import CoursesSideNavigation from "@/features/courses/CoursesSideNavigation";
import CoursesDetail from "@/features/courses/CoursesDetail";

const CoursesContainer = styled.div`
  display: grid;
  grid-template-columns: 40rem 1fr;
  padding: 1rem;
  column-gap: 1rem;
`

const Courses = () => {
  return (
    <CoursesContainer>
      <CoursesSideNavigation />
      <CoursesDetail />
    </CoursesContainer>
  );
};

export default Courses;
