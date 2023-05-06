import React, {useState, FC} from "react";
import styled from "styled-components";
import {Rating} from "@geist-ui/core";
import {CourseData} from "@/features/courses/models/CourseData";

const MyCoursesContainer = styled.div`
  display: grid;
  row-gap: 1rem;
`

const CourseCard = styled.div`
  padding: 1rem;
  border: 1px solid #999;
  border-radius: 0.25rem;
  :hover {
    cursor: pointer;
    background-color: #272832;
    color: #999;
  }
`

const CourseCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`

type CourseSideNavigationProps = {
  data: CourseData[],
  onItemClick: any
};

const CoursesSideNavigation:FC<CourseSideNavigationProps> = ({data, onItemClick}) => {
  const [selectedCardId, setSelectedCardId] = useState<number | undefined>(0);

  function changeTicketBackground(id: number | undefined) {
    const style = {
      borderLeft: "4px solid #575bc7",
      backgroundColor: "#2a2a3f"
    }
    if (id === selectedCardId) return style
  }

  return (
    <div>
      <h3>New Courses</h3>
      <MyCoursesContainer>
          <CourseCard style={changeTicketBackground(3)} onClick={() => {setSelectedCardId(3); onItemClick({title: 'Sample Title', description: 'Sample Description', lessons: [{title: 'Sample Title', description: 'Sample Description'}]})}}>
            <h3>Sample New Course</h3>
            <p>Sample New Description</p>
            <CourseCardFooter>
              <div><Rating locked={true} value={3} count={5} /> (100)</div>
              <div>Intermediate</div>
            </CourseCardFooter>
          </CourseCard>
      </MyCoursesContainer>
      <hr/>
      <h3>My Courses</h3>
      <MyCoursesContainer>
        {data.map((course: CourseData) => {
          return (
            <CourseCard style={changeTicketBackground(course.id)} onClick={() => {setSelectedCardId(course.id); onItemClick(course)}} key={course.id}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <CourseCardFooter>
                <div><Rating locked={true} value={course.rating} count={5} /> ({course.reviewerCount})</div>
                <div>{course.level}</div>
              </CourseCardFooter>
            </CourseCard>
          )
        })}
      </MyCoursesContainer>
    </div>
  );
};

export default CoursesSideNavigation;
