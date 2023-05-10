import React, {FC, useState} from "react";
import {CourseData} from "@/features/courses/models/CourseData";
import styled from "styled-components";
import {Image, Play} from "@geist-ui/icons";

type CoursesDetailType = {
  data: CourseData
};

const PreviewVideoContainer = styled.div`
  background-color: #272832;
  width: 400pt;
  height: 300pt;
  display: grid;
  place-items: center;
`

const LessonContainer = styled.div`
  display: grid;
  row-gap: 1rem;
`

const LessonCard = styled.div`
  display: grid;
  height: 8rem;
  grid-template-columns: 6rem 1fr;
  border: 1px solid #999;
  border-radius: 0.25rem;
  :hover {
    cursor: pointer;
    background-color: #272832;
    color: #999;
  }
`

const LessonPreview = styled.div`
  display: grid;
  place-items: center;
  border-right: 1px solid;
`

const LessonDescription = styled.div`
  padding: 1rem;
`

const Lessons: FC<CoursesDetailType> = ({ data }) => {
  const [lesson, setLesson] = useState<any>()

  function changeTicketBackground(id: number | undefined) {
    const style = {
      borderLeft: "4px solid #575bc7",
      backgroundColor: "#2a2a3f"
    }
    if (id === lesson?.id) return style
  }

  return (
    <div className="detail">
      <PreviewVideoContainer><Play /></PreviewVideoContainer>
      {lesson &&
        <div>
          <h3>{lesson.title}</h3>
          <p>{lesson.description}</p>
        </div>
      }
      {!lesson &&
        <div>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
      }
      <h3>Course Content</h3>
      <LessonContainer>
        {data.lessons.map((lesson) => {
          return (
            <LessonCard  style={changeTicketBackground(lesson.id)} onClick={() => setLesson(lesson)} key={lesson.id}>
              <LessonPreview><Image /></LessonPreview>
              <LessonDescription >
                <h4>{lesson.title}</h4>
                <div>{lesson.description}</div>
              </LessonDescription>
            </LessonCard>
          )
        })}
      </LessonContainer>
    </div>
  );
};

export default Lessons;
