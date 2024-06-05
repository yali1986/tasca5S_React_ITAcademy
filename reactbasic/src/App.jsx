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
        bgColor: "color",
        image: meditation
    },
    {
        title: "Programa projectes propis",
        description: "Mes val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
        bgColor: "color",
        image: programming
    },
    {
        title: "Procura descansar",
        description: "Descansar bé i desconnectar són vitals. D´aquesta manera reduiràs l`estrès i l´ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
        bgColor: "color",
        image: managment
    },
]

export function App() {

    const [step, setStep] = useState(0) 
    
  
    let currentCardData = tutorialData[ step ]

    {/*3. En el componente App, define el array tutorialData, que contiene la información de cada paso que se mostrará al usuario.

4. Crea el primer estado mediante el hook useState, para llevar la cuenta del paso en el que nos encontramos.

5. Pasa mediante cerca los datos del primer paso al componente Card.

6. Utiliza en Card.js los datos proporcionados por props para mostrar al usuario el título y la descripción del primer paso. */}

    return (
        <>


        {
            <div>
            <Card title={tutorialData[0].title} description={tutorialData[0].description} />
            </div>
        }

            {/* <div>
                {
                    tutorialData.map(card => (
                        <div key={card.title}>
                            <Card title={card.title} description={card.description} bgColor={card.bgColor} image={card.image} />
                        </div>
                    ))
                }

            </div> */}

            <h1>{step}</h1>

            {/* <button onClick={() => setStep(step + 1)}>Next</button>
            <button onClick={() => setStep(step - 1)}>Previous</button> */}

        </>
    )
}