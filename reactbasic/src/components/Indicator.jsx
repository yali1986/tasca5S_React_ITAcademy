import styled from "styled-components"
import { useEffect, useState } from "react"


const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  position: 
`;

const Dot = styled.span`
  width: 1rem;
  height: 1rem;
  background-color: grey;
  border-radius: 50%;
  transition: background-color 0.3s;


  &.active {
    background-color: black;
  }
`;

export default function Indicator({ step, tutorialData, onStepClick }) {
  const [animateStep, setAnimateStep] = useState(step)
  
useEffect(() => {
  setAnimateStep(step)
}, [step])

    return (
        <IndicatorWrapper>
        {Array.from({ length: tutorialData }).map((_, index) => (
          <Dot key={index} className={`${index === step ? "active animate__animated animate__bounce" : ""}`} 
            onClick={() => onStepClick(index)}
          />
        ))}
      </IndicatorWrapper>
      
      )
  
}
