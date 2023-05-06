import React, {FC} from "react";
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
  height: 6rem;
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

const CoursesDetail: FC<CoursesDetailType> = ({ data }) => {
  return (
    <div className="detail">
      <PreviewVideoContainer><Play /></PreviewVideoContainer>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <h3>Course Content</h3>
      <LessonContainer>
        {data.lessons.map((lesson) => {
          return (
            <LessonCard key={lesson.id}>
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

export default CoursesDetail;
