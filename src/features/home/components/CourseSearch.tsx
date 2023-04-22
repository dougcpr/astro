import React from "react";
import styled from "styled-components";
import Search from "@geist-ui/icons/search";
import {Input} from "@geist-ui/core";

const CourseSearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const CourseSearchHeader = styled.h3`
  display: inline-block;
`
const CourseSearch = () => {
  return (
    <CourseSearchContainer>
      <CourseSearchHeader>
        Dashboard
      </CourseSearchHeader>
      <div>
        <Input iconRight={<Search />} placeholder="Search Course..." />
      </div>
    </CourseSearchContainer>
  );
};

export default CourseSearch;
