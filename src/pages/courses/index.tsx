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
  }
  ]
  return (
    <CoursesContainer>
      <CoursesSideNavigation data={mockData} onItemClick={handleItemClick} />
      {selectedItem ? <CoursesDetail data={selectedItem} /> : <p>Select an course to view details.</p>}
    </CoursesContainer>
  );
};

export default Courses;
