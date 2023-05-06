import React, {FC} from "react";
import {CourseData} from "@/features/courses/models/CourseData";

type CoursesDetailType = {
  data: CourseData
};

const CoursesDetail: FC<CoursesDetailType> = ({ data }) => {
  return (
    <div className="detail">
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
};

export default CoursesDetail;
