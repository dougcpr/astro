import React from "react"
import styled from "styled-components"
import {ChevronRight, Image} from "@geist-ui/icons"
import {Avatar} from "@geist-ui/core"
import {useRouter} from "next/router";

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

const mockData = {
  newCourses: [{
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
  }],
  myCourses: [{
    id: 1,
    title: 'Geography',
    description: 'This is a broad cover on world geography.',
    startDate: '2023-05-15',
    endDate: '2023-06-26',
    level: 'Elementary',
    rating: 4.5,
    reviewerCount: 123,
    lessons: [{
      id: 1,
      title: 'How to look at a map',
      description: 'Covers the techniques used to review latitude and longitude',
      level: 0,
      videoURL: ''
    }]
  }, {
    id: 2,
    title: 'Introduction to Algebra',
    description: 'This course covers elementary mathematics. This will cover the use of variables in formulas.',
    startDate: '2023-05-29',
    endDate: '2023-06-26',
    level: 'Elementary',
    rating: 3.2,
    reviewerCount: 13,
    lessons: [{
      id: 2,
      title: 'How to solve for a variable',
      description: 'With a practice problem we will go over how to solve for x.',
      level: 0,
      videoURL: ''
    }, {
      id: 3,
      title: 'How to use the quadratic formula',
      description: 'Solving for x given a quadratic equation.',
      level: 1,
      videoURL: ''
    }]
  }]
}


const NewCourses = () => {
  const router = useRouter();
  return (
    <NewCoursesContainer>
      <h3>New Courses</h3>
      <NewCoursesCarousel>
        {mockData.newCourses.map(data => {
        return (
          <NewCoursesCard onClick={() => router.push(`/courses?id=${data.id}`)} key={data.id}>
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