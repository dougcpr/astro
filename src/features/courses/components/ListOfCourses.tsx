import React, {useState, FC, useEffect} from "react";
import styled from "styled-components";
import {Rating} from "@geist-ui/core";
import {CourseData} from "@/features/courses/models/CourseData";
import {useRouter} from "next/router";
const _ = require('lodash');

const MyCoursesContainer = styled.div`
  display: grid;
  row-gap: 1rem;
`

const ListOfCoursesContainer = styled.div`
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

const ListOfCourses:FC<CourseSideNavigationProps> = ({data, onItemClick}) => {
  const router = useRouter()
  const [selectedCardId, setSelectedCardId] = useState<number | undefined>(0)

  useEffect(() => {
    setSelectedCardId(Number(router.query?.id))
    findCourse()
  }, [])

  function findCourse() {
    // search through new courses
    let course = _.find(data, function(obj: any) {
      if (obj.id === Number(router.query.id)) {
        return true;
      }
    });
    if(course !== undefined) {
      onItemClick(course)
    }
  }

  function changeTicketBackground(id: number | undefined) {
    const style = {
      borderLeft: "4px solid #575bc7",
      backgroundColor: "#2a2a3f"
    }
    if (id === selectedCardId) return style
  }

  return (
    <>
      <MyCoursesContainer>
        {data.map((course: CourseData) => {
          return (
            <ListOfCoursesContainer style={changeTicketBackground(course.id)}
                           onClick={async () => {
                          setSelectedCardId(course.id);
                          onItemClick(course)
                          await router.push(`/courses?id=${course.id}`, undefined, { shallow: true });
                        }}
                           key={course.id}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <CourseCardFooter>
                <div><Rating locked={true} value={course.rating} count={5} /> ({course.reviewerCount})</div>
                <div>{course.level}</div>
              </CourseCardFooter>
            </ListOfCoursesContainer>
          )
        })}
      </MyCoursesContainer>
    </>
  );
};

export default ListOfCourses;
