import styled from "styled-components"

const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
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
 
    return (
        <IndicatorWrapper>
        {Array.from({ length: tutorialData }).map((_, index) => (
          <Dot key={index} className={index === step ? 'active' : ''} 
            onClick={() => onStepClick(index)}
          />
        ))}
      </IndicatorWrapper>
      
      )

// Amb les dades proporcionades per les propietats, pinta dinàmicament el número de boletes utilitzant un .map.
// Destaca la boleta on ens trobem fent servir styled components.  
}
