import React from "react"
import styled from "styled-components"
import {ChevronRight, Image, Plus} from "@geist-ui/icons"
import {Avatar} from "@geist-ui/core"

const NewCoursesContainer = styled.div`
  display: grid;
  grid-template-rows: 3rem 19rem;
`

const NewCoursesCarousel = styled.div`
  display: flex;
  column-gap: 1rem;
  @media(max-width: 750px) {
    overflow-x: scroll;
    grid-template-columns: repeat(3, 200px);
  }
`

const NewCoursesCard = styled.div`
  border: 1px solid #2a2b39;
  border-radius: 0.25rem;
  min-width: 275px;
  max-width: 250px;
  padding: 1rem;
  display: grid;
  row-gap: 1rem;
  grid-template-rows: 5fr 2fr 1fr;
  :hover {
    cursor: pointer;
    background-color: #272832;
    color: #999;
  }
`

const NewCoursesCardImage = styled.div`
  background-color: #191a23;
  border: 1px solid #333;;
  border-radius: 0.25rem;
  display: grid;
  place-items: center;
  height: 100%;
`

const NewCoursesCardDescription = styled.div`
  height: 100%;
`

const NewCoursesCardFooter = styled.div`
  align-items: center;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

const mockData = [{
  id: 3,
  title: 'Typing',
  description: 'This is a broad cover on world geography.',
  level: 'Elementary',
  rating: 3.2,
  reviewerCount: 13,
  lessons: [{}, {}, {}],
  students: [{}, {}, {}, {}, {}]
}, {
  id: 4,
  title: 'Introduction to Data Structures',
  description: 'This course covers elementary mathematics. This will cover the use of variables in formulas.',
  level: 'Elementary',
  rating: 3.2,
  reviewerCount: 13,
  lessons: [{}, {}, {}],
  students: [{}, {}, {}, {}, {}, {}, {}, {}, {}]
}, {
  id: 5,
  title: 'Introduction to Sewing',
  description: 'This course covers elementary mathematics. This will cover the use of variables in formulas.',
  level: 'Elementary',
  rating: 3.2,
  reviewerCount: 13,
  lessons: [{}, {}, {}, {}],
  students: [{}, {}, {}, {}, {}, {}]
}]


const NewCourses = () => {
  return (
    <NewCoursesContainer>
      <h3>New Courses</h3>
      <NewCoursesCarousel>
        {mockData.map(data => {
        return (
          <NewCoursesCard key={data.id}>
            <NewCoursesCardImage><Image /></NewCoursesCardImage>
            <NewCoursesCardDescription>
              <div>{data.title}</div>
              <div>{data.lessons.length} Lessons</div>
            </NewCoursesCardDescription>
            <NewCoursesCardFooter>
              <Avatar.Group count={data.students.length}>
                <Avatar text="K" stacked />
                <Avatar text="D" stacked />
              </Avatar.Group>
              <div><ChevronRight /></div>
            </NewCoursesCardFooter>
          </NewCoursesCard>
        )
        })}
      </NewCoursesCarousel>
    </NewCoursesContainer>
  );
}

export default NewCourses