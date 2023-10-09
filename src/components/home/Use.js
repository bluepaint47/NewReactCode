import "../../css/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'





const Use = () => {

    
    const maxWidthStyle ={
        maxwidth: "600px"
    }

    return (
        <>
        <div class="container-fluid how-to-use bg-primary my-5 py-5">
        <div class="container text-white py-5">
            <div class="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={maxWidthStyle} >
                <h1 class="text-white mb-3"><span class="fw-light text-dark">How To Use Our</span> Natural & Organic
                    <span class="fw-light text-dark">Hair Shampoo</span></h1>
                <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
            </div>
            <div class="row g-5">
                <div class="col-lg-4 text-center wow fadeIn" data-wow-delay="0.1s">
                    <div class="btn-square rounded-circle border mx-auto mb-4" class="big">
                        <i class="fa fa-home fa-3x text-dark"></i>
                        <FontAwesomeIcon icon={faHome} className="fa-3x text-dark rounded-Circle" />
                    </div>
                    <h5 class="text-white">Wash Hair With Water</h5>
                    <hr class="w-25 bg-light my-2 mx-auto"/>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.</span>
                </div>
                <div class="col-lg-4 text-center wow fadeIn" data-wow-delay="0.3s">
                    <div class="btn-square rounded-circle border mx-auto mb-4" class="bigblue">
                        <i class="fa fa-home fa-3x text-dark"></i>
                        <FontAwesomeIcon icon={faHome} className="fa-3x text-dark" />
                    </div>
                    <h5 class="text-white">Apply Shampoo On Hair</h5>
                    <hr class="w-25 bg-light my-2 mx-auto"/>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.</span>
                </div>
                <div class="col-lg-4 text-center wow fadeIn" data-wow-delay="0.5s">
                    <div class="btn-square rounded-circle border mx-auto mb-4" class="hat">
                        <i class="fa fa-home fa-3x text-dark"></i>
                        <FontAwesomeIcon icon={faHome} className="fa-3x text-dark" />
                    </div>
                    <h5 class="text-white">Wait 5 Mins And Wash</h5>
                    <hr class="w-25 bg-light my-2 mx-auto"/>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.</span>
                </div>
            </div>
        </div>
    </div>
        </>
    )
  };
  export default Use;