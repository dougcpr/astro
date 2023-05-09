import React, {useState} from "react";
import styled from "styled-components";
import CoursesSideNavigation from "@/features/courses/components/CoursesSideNavigation";
import Lessons from "@/features/courses/components/Lessons";
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

  const mockData = {
    newCourses: [{
      id: 3,
      title: 'Typing',
      description: 'This is a broad cover on world geography.',
      level: 'Elementary',
      rating: 3.2,
      reviewerCount: 13,
      lessons: [{id: 1}, {id: 2}, {id: 3}],
      students: [{}, {}, {}, {}, {}]
    }, {
      id: 4,
      title: 'Introduction to Data Structures',
      description: 'This course covers elementary mathematics. This will cover the use of variables in formulas.',
      level: 'Elementary',
      rating: 3.2,
      reviewerCount: 13,
      lessons: [{id: 4}, {id: 5}, {id: 6}],
      students: [{}, {}, {}, {}, {}, {}, {}, {}, {}]
    }, {
      id: 5,
      title: 'Introduction to Sewing',
      description: 'This course covers elementary mathematics. This will cover the use of variables in formulas.',
      level: 'Elementary',
      rating: 3.2,
      reviewerCount: 13,
      lessons: [{id: 7}, {id: 8}, {id: 9}, {id: 10}],
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
  return (
    <CoursesContainer>
      <CoursesSideNavigation data={mockData} onItemClick={handleItemClick} />
      {selectedItem ? <Lessons data={selectedItem} /> : <p>Select an course to view details.</p>}
    </CoursesContainer>
  );
};

export default Courses;
