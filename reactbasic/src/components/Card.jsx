import "../card.css"

export default function Card({ title, description, bgColor, image, nextStep }) {
    return (
        <>
            <div className="card text-center col-10 col-sm-6 mx-auto shadow">

                <div className="card-body p-0 ">
                    <div style={{ backgroundColor: bgColor }} className="rounded-top">
                        <img src={image} alt="imagen" className="img-fluid" />
                    </div>
                    <div className="text-start">
                    <h4 className="card-title mt-4 py-1 px-4">{title}</h4>
                    <p className="card-text text-secondary py-0 px-4">{description}</p>
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                   
                    <button onClick={nextStep} className="btn btn-dark m-4 mb-5">
                            --
                        </button>
                        <button onClick={nextStep} className="btn btn-dark m-4 mb-5">
                            -->
                        </button>
                       
                    </div>

                </div>

            </div>
   
        </>

    )
}
