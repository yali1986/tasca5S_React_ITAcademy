import "../card.css"

export default function Card({ title, description, bgColor, image, nextStep }) {
    return (
        <>
            <div className="card text-center col-10 col-md-6 col-lg-4 mx-auto shadow">

                <div className="card-body text-start p-0 ">
                    <div style={{ backgroundColor: bgColor }} className="rounded-top">
                        <img src={image} alt="imagen" className="img-fluid" />
                    </div>
                    <h4 className="card-title mt-4 py-1 px-4">{title}</h4>
                    <p className="card-text text-secondary py-0 px-4">{description}</p>

                    <div className="text-end">
                        <button onClick={nextStep} className="btn btn-dark m-4 mb-5">
                            -->
                        </button>
                    </div>

                </div>

            </div>
   
        </>

    )
}
