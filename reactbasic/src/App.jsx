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
   

    const nextStep = () => {
        setStep((prevStep) => (prevStep + 1) % tutorialData.length)        

// setStep: función proporcionada por React a través del hook useState para actualizar el valor del estado step.
// (prevStep) => ...: función de actualización que toma el valor previo del estado (prevStep) como argumento. 

// % tutorialData.length: El operador módulo (%) asegura que el valor de step se mantenga dentro del rango válido de índices del array tutorialData. Esto crea un ciclo. Si tutorialData.length es 3 (porque tienes tres elementos en el array) y prevStep se incrementa a 3, 3 % 3 será 0. Esto hace que step vuelva al primer elemento del array después de alcanzar el último.
    }
    
      let currentCardData = tutorialData[step]

    {/* Ejercicio 2
Por ahora, tu aplicación puede mostrar sólo una frase. En este ejercicio haremos que pueda mostrar todas las frases de onBoarding. 

En este ejercicio haremos que se vayan mostrando los distintos pasos al usuario/a.

Para llevar a cabo esta función debes seguir las siguientes tareas:

1. Implementar una función nextStep en App.js, que vaya incrementando el valor del estado step en una unidad.

2. Pasa por props al componente Card, la función nextStep y llámala desde el JSX del componente Card. De este modo, cuando el usuario haga clic en el botón en el componente Card, se ejecutará la función nextStep, que al modificar el valor del estado "step", 

3. Verás que pasa el siguiente objeto del array tutorialData en el componente Card.*/}

    return (
        <>


            {
                <div>
                    <Card 
                    title={currentCardData.title} 
                    description={currentCardData.description} 
                    nextStep={nextStep}    
                    />
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
            <h1 className="text-end me-5">{step}</h1>

        </>
    )

}