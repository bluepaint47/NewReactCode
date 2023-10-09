
import "../../css/style.css";
import sham from "../../img/shampoo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Feature = () => {

    const boxStyle ={
        width: "80px",
        height: "80px"
    }

    const maxWidthStyle ={
        maxwidth: "600px"
    }

    return (
        <>
        <div class="container-fluid py-5">
        <div class="container">
            <div class="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={maxWidthStyle}>
                <h1 class="text-primary mb-3"><span class="fw-light text-dark">Best Benefits Of Our</span> Natural Hair
                    Shampoo</h1>
                <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
            </div>
            <div class="row g-4 align-items-center">
                <div class="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                    <div class="row g-5">
                        <div class="col-12 d-flex">
                            <div class="btn-square rounded-circle border flex-shrink-0"
                                style={boxStyle}>
                                <FontAwesomeIcon icon={faCheck} className="fa-2x text-primary" />

                            </div>
                            <div class="ps-3">
                                <h5>Natural  Organic</h5>
                                <hr class="w-25 bg-primary my-2" />
                                <span>Lorem ipsum dolor sit amet adipiscing elit aliquet.</span>
                            </div>
                        </div>
                        <div class="col-12 d-flex">
                            <div class="btn-square rounded-circle border flex-shrink-0"
                                style={boxStyle}>
                                <i class="fa fa-check fa-2x text-primary"></i>
                                <FontAwesomeIcon icon={faCheck} className="fa-2x text-primary" />

                            </div>
                            <div class="ps-3">
                                <h5>Anti Hair Fall</h5>
                                <hr className="w-25 bg-primary my-2"/>.
                                <span>Lorem ipsum dolor sit amet adipiscing elit aliquet.</span>
                            </div>
                        </div>
                        <div class="col-12 d-flex">
                            <div class="btn-square rounded-circle border flex-shrink-0"
                                style={boxStyle}>
                                <i class="fa fa-check fa-2x text-primary"></i>
                                <FontAwesomeIcon icon={faCheck} className="fa-2x text-primary" />
                            </div>
                            <div class="ps-3" >
                                <h5>Anti-dandruff</h5>
                                <hr class="w-25 bg-primary my-2" />
                                <span>Lorem ipsum dolor sit amet adipiscing elit aliquet.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                    <img class="img-fluid animated pulse infinite" src={sham} />
                  
                </div>
                <div class="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                    <div class="row g-5">
                        <div class="col-12 d-flex">
                            <div class="btn-square rounded-circle border flex-shrink-0"
                                style={boxStyle}>
                                <i class="fa fa-check fa-2x text-primary"></i>
                                <FontAwesomeIcon icon={faCheck} className="fa-2x text-primary" />
                            </div>
                            <div class="ps-3">
                                <h5>No Internal Side Effect</h5>
                                <hr class="w-25 bg-primary my-2"/>
                                <span>Lorem ipsum dolor sit amet adipiscing elit aliquet.</span>
                            </div>
                        </div>
                        <div class="col-12 d-flex">
                            <div class="btn-square rounded-circle border flex-shrink-0"
                                style={boxStyle}>
                                <i class="fa fa-check fa-2x text-primary"></i>
                                <FontAwesomeIcon icon={faCheck} className="fa-2x text-primary" />
                            </div>
                            <div class="ps-3">
                                <h5>No Skin Irritation</h5>
                                <hr class="w-25 bg-primary my-2"/>
                                <span>Lorem ipsum dolor sit amet adipiscing elit aliquet.</span>
                            </div>
                        </div>
                        <div class="col-12 d-flex">
                            <div class="btn-square rounded-circle border flex-shrink-0"
                                style={boxStyle}>
                                <i class="fa fa-check fa-2x text-primary"></i>
                                <FontAwesomeIcon icon={faCheck} className="fa-2x text-primary" />
                            </div>
                            <div class="ps-3">
                                <h5>No Artificial Smell</h5>
                                <hr class="w-25 bg-primary my-2"/>
                                <span>Lorem ipsum dolor sit amet adipiscing elit aliquet.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>  
    )
  };
  
  export default Feature;