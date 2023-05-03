import React from "react";
import {Table} from "@geist-ui/core";

const MyCourses = () => {
  const data = [
    { courseName: 'Geography', startDate: 'May 12', grade: '94', level: 'Elementary' },
    { courseName: 'Introduction to Algebra', startDate: 'May 14', grade: '73', level: 'Elementary' }
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
