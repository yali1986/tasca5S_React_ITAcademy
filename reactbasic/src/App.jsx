import "./App.css"
import { useState } from 'react'
import meditation from "./assets/meditation.svg"
import programming from "./assets/programming.svg"
import managment from "./assets/time_managment.svg"

import Card from "./components/Card.jsx"

const tutorialData = [
    {
        title: "Dedica moltes hores",
        description: "In mínim de 30 hores a la semana. Si no en tens prou, hauràs de dedicar-li mès hores. Al principi sembla impossible, però notaràs una millora ràpidament.",
        bgColor: "#4DA2A9",
        image: managment         
    },
    {
        title: "Programa projectes propis",
        description: "Mes val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
        bgColor: "#D3D4D9",
        image: programming
    },
    {
        title: "Procura descansar",
        description: "Descansar bé i desconnectar són vitals. D´aquesta manera reduiràs l`estrès i l´ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
        bgColor: "#FFD167",
        image: meditation
    },
]

export function App() {

    const [step, setStep] = useState(0)
   

    const nextStep = () => {
        setStep((prevStep) => (prevStep + 1) % tutorialData.length)        

// setStep: función proporcionada por React a través del hook useState para actualizar el valor del estado step.
// (prevStep) => ...: función de actualización que toma el valor previo del estado (prevStep) como argumento. 

// % tutorialData.length: El operador módulo (%) asegura que el valor de step se mantenga dentro del rango válido de índices del array tutorialData. Esto crea un ciclo. Si tutorialData.length es 3 (porque tienes tres elementos en el array) y prevStep se incrementa a 3, 3 % 3 será 0. Esto hace que step vuelva al primer elemento del array después de alcanzar el último.
    }
    
      let currentCardData = tutorialData[step]

    return (
        <>
            {
                <div className="App d-flex align-items-center">
                    <Card 
                    bgColor={currentCardData.bgColor}
                    image={currentCardData.image} 
                    title={currentCardData.title} 
                    description={currentCardData.description} 
                    nextStep={nextStep}  
                      
                    
                    />
                </div>
                
            }
          
            <h1 className="text-end me-5">{step}</h1> 

        </>
    )

}