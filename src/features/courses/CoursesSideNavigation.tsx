import React, {useState} from "react";
import styled from "styled-components";
import {Rating} from "@geist-ui/core";

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

type CourseData = {
  id?: number,
  created_at?: Date,
  title: string,
  description: string,
  startDate: string,
  endDate: string,
  level: string,
  rating: number,
  reviewerCount: number
}

const mockData: CourseData[] = [{
  id: 1,
  title: 'Geography',
  description: 'This is a broad cover on world geography.',
  startDate: '2023-05-15',
  endDate: '2023-06-26',
  level: 'Elementary',
  rating: 4.5,
  reviewerCount: 123
}, {
  id: 2,
  title: 'Introduction to Algebra',
  description: 'This course covers elementary mathematics. This will cover the use of variables in formulas.',
  startDate: '2023-05-29',
  endDate: '2023-06-26',
  level: 'Elementary',
  rating: 3.2,
  reviewerCount: 13
}, {
  id: 3,
  title: 'Speech',
  description: 'This course covers speech.',
  startDate: '2023-05-29',
  endDate: '2023-06-26',
  level: 'Elementary',
  rating: 2,
  reviewerCount: 100
}
]

const CoursesSideNavigation = () => {
  const [selectedCardId, setSelectedCardId] = useState<number | undefined>(0);

  function changeTicketBackground(id: number | undefined) {
    const style = {
      borderLeft: "4px solid #575bc7",
      "backgroundColor": "#2a2a3f"
    }
    if (id === selectedCardId) return style
  }

  return (
    <div>
      <h3>My Courses</h3>
      <MyCoursesContainer>
        {mockData.map((course: CourseData) => {
          return (
            <CourseCard style={changeTicketBackground(course.id)} onClick={() => {setSelectedCardId(course.id)}} key={course.id}>
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
