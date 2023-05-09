import React, {useState, FC} from "react";
import styled from "styled-components";
import {Tabs} from "@geist-ui/core";
import {useRouter} from "next/router";
import ListOfCourses from "@/features/courses/components/ListOfCourses";
const _ = require('lodash');

const MyCoursesContainer = styled.div`
  display: grid;
  row-gap: 1rem;
`

const CourseCard = styled.div`
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
  data: any,
  onItemClick: any
};

const CoursesSideNavigation:FC<CourseSideNavigationProps> = ({data, onItemClick}) => {
  const router = useRouter()
  const [selectedCardId, setSelectedCardId] = useState<number | undefined>(0)

  function changeTicketBackground(id: number | undefined) {
    const style = {
      borderLeft: "4px solid #575bc7",
      backgroundColor: "#2a2a3f"
    }
    if (id === selectedCardId) return style
  }

  return (
    <div>
      <Tabs initialValue="1">
        <Tabs.Item label="New Courses" value="1">
          <ListOfCourses data={data.newCourses} onItemClick={onItemClick}></ListOfCourses>
        </Tabs.Item>
        <Tabs.Item label="My Courses" value="2">
          <ListOfCourses data={data.myCourses} onItemClick={onItemClick}></ListOfCourses>
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

export default CoursesSideNavigation;
