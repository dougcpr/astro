import React from "react";
import styled from "styled-components";
import NewCourses from "@/features/home/components/NewCourses";
import CourseSearch from "@/features/home/components/CourseSearch";
import MyCourses from "@/features/home/components/MyCourses";
import Profile from "@/features/home/components/Profile";
import MyCalendar from "@/features/home/components/MyCalendar";
import HomeworkProgress from "@/features/home/components/HomeworkProgress";

const HomeDashboardGrid = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  @media(max-width: 800px) {
    grid-template-columns: 1fr;
    height: calc(100vh - 7rem);
    overflow: scroll;
  }
`

const HomeDashboardCourseRow = styled.div`
  display: grid;
  row-gap: 1rem;
  padding: 1rem;
  grid-template-rows: 3rem 23rem 1fr;
  @media(max-width: 800px) {
    grid-template-rows: 3rem 23rem 23rem;
  }
`

const HomeDashboardProgressRow = styled.div`
  display: grid;
  row-gap: 1rem;
  grid-template-rows: 1fr 1fr 1fr;
  @media(max-width: 800px) {
  }
`

const HomeLayout = () => {
  return (
    <HomeDashboardGrid>
      <HomeDashboardCourseRow>
        <CourseSearch />
        <NewCourses />
        <MyCourses />
      </HomeDashboardCourseRow>
      <HomeDashboardProgressRow>
        <Profile />
        <MyCalendar />
        <HomeworkProgress />
      </HomeDashboardProgressRow>
    </HomeDashboardGrid>
  );
}

export default HomeLayout