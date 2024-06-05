

export default function Card ({title, description, bgColor, image, nextStep}) {
    return (
        <> 
        <div className="card text-center">

         <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">{description}</p>
        <img src={image} alt="" className="card-img-top"/>

        <button onClick={nextStep} className="btn btn-primary mt-3">
            Siguiente
          </button>
       </div>

        </div>    
        </>

    )
}
