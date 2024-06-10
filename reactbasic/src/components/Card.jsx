import "../card.css"
import "./Indicator.jsx"
import { ReactNode, useState } from "react"



export default function Card({ 
    title, 
    description, 
    bgColor, 
    image, 
    nextStep, 
    prevStep, 
    step,  
    children }) {
      
        
   const [animation, setAnimation] = useState("")

   const handleNext = () => {
    setAnimation("animate__fadeOutLeft")
    setTimeout(() => {
        nextStep()
        setAnimation("animate__fadeInRight")
    }, 500)
   }

   const handlePrev = () => {
    setAnimation("animate__fadeOutRight")
    setTimeout(() => {
        prevStep()
        setAnimation("animate__fadeInLeft")
    }, 500)
   }
   
     return (
        <>

            <div className="card text-center col-10 col-sm-6 mx-auto shadow">
            <div className='animate__animated animate__backInRight'>
                <div className="card-body p-0">
                
                    <div>
                        <div style={{ backgroundColor: bgColor }} className="rounded-top">
                        <div className={`img-container animate__animated ${animation}`}>
                                <img src={image} alt="imagen" className="img-fluid " />
                            </div>
                        </div>

                        <div className="card-text-title">
                            <div className="text-start">
                                <h4 className="card-title mt-4 py-1 px-4">{title}</h4>
                                <p className="card-text text-secondary py-0 px-4">{description}
                                </p>
                            </div>

                            <div className="row">

                               

                                <div className="col align-items-center">

                                    <div className="d-flex flex-row justify-content-between mt-4 align-items-center">

                                    <div>
                                    <div className="col ms-4">{children}</div>
                                    </div>

                                    <div className="row d-flex mt-4 me-2">
                                        {step > 0 && step <= 2 && (
                                            <button onClick={handlePrev} className="btn btn-white m-4 mb-5">
                                                ←
                                            </button>
                                        )}
                                        {step !== 2 && (
                                            <button onClick={handleNext} className="btn btn-dark m-4 mb-5">
                                                →
                                            </button>
                                        )}
</div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
</div>
        </>

    )
}
