import React from "react";
import styled from "styled-components";
import ChevronRight from '@geist-ui/icons/chevronRight'

const HomeworkPercent = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  border: 1px solid white;
  display: grid;
  justify-content: center;
  place-items: center;
`

const HomeworkProgressCardContainer = styled.div`
  display: grid;
  grid-row-gap: 1rem;
`

const HomeworkProgressCard = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr 3rem;
  padding: 1rem;
  border: 1px solid #999;
  border-radius: 0.25rem;
  max-width: 25rem;
  align-items: center;
  :hover {
    cursor: pointer;
    background-color: rgb(39, 40, 50);
    color: #999;
    max-width: 100%;
  }
`

const HomeworkProgressCardText = styled.div`
  display: flex;
  flex-direction: column;
`

type homeworkProgress = {
  id?: number,
  percent: number,
  className: string,
  tasks: number
}

const mockHomeworkProgressData: homeworkProgress[] = [{
  id: 1,
  percent: 50,
  className: "Styling with CSS",
  tasks: 12
}, {
  id: 2,
  percent: 20,
  className: "Javascript Fundamentals",
  tasks: 19
}]

// only return 3 items and then include a see all button
const HomeworkProgress = () => {

  return (
    <div>
      <h3>My Courses</h3>
      <HomeworkProgressCardContainer>
        {mockHomeworkProgressData.map((progress: homeworkProgress) => {
          return (
            <HomeworkProgressCard key={progress.id}>
              <HomeworkPercent><span>{progress.percent}</span></HomeworkPercent>
              <HomeworkProgressCardText>
                <div>{progress.className}</div>
                <div>{progress.tasks}</div>
              </HomeworkProgressCardText>
              <ChevronRight />
            </HomeworkProgressCard>
          )
        })}
      </HomeworkProgressCardContainer>
    </div>
  );
};

export default HomeworkProgress;
