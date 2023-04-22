import React from "react";
import {Table} from "@geist-ui/core";

const MyCourses = () => {
  const data = [
    { courseName: 'Web Design', startDate: 'May 12', grade: '94', level: 'Elementary' },
    { courseName: 'Development Basics', startDate: 'May 14', grade: '73', level: 'Intermediate' },
    { courseName: 'Data with Python', startDate: 'May 11', grade: '88', level: 'Elementary' },
  ]
  return (
    <div>
      <h3>My Courses</h3>
      <Table data={data}>
        <Table.Column prop="courseName" label="Course Name" />
        <Table.Column prop="startDate" label="Start" />
        <Table.Column prop="grade" label="Grade" />
        <Table.Column prop="level" label="Level" />
      </Table>
    </div>
  );
};

export default MyCourses;
