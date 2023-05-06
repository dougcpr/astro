import React, {useState} from "react";
import styled from "styled-components";
import CoursesSideNavigation from "@/features/courses/CoursesSideNavigation";
import CoursesDetail from "@/features/courses/CoursesDetail";
import {CourseData} from "@/features/courses/models/CourseData";

const CoursesContainer = styled.div`
  display: grid;
  grid-template-columns: 40rem 1fr;
  padding: 1rem;
  column-gap: 1rem;
`

const Courses = () => {
  const [selectedItem, setSelectedItem] = useState<CourseData | null>(null);

  const handleItemClick = (item: CourseData) => {
    setSelectedItem(item);
  };

  const mockData: CourseData[] = [{
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
  return (
    <CoursesContainer>
      <CoursesSideNavigation data={mockData} onItemClick={handleItemClick} />
      {selectedItem ? <CoursesDetail data={selectedItem} /> : <p>Select an course to view details.</p>}
    </CoursesContainer>
  );
};

export default Courses;
