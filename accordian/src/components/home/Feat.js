
import "../../css/style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDropletSlash } from '@fortawesome/free-solid-svg-icons'
import {faTimes } from '@fortawesome/free-solid-svg-icons'
import {faLeaf } from '@fortawesome/free-solid-svg-icons'



const Feat = () => {
    return (
        <>
         <div class="container-fluid py-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                    <div class="feature-item position-relative bg-primary text-center p-3">
                        <div class="border py-5 px-3">
                            <i class="fa fa-leaf fa-3x text-dark mb-4"></i>
                            <FontAwesomeIcon icon={faLeaf} className="fa-3x text-dark"/>
                            <h5 class="text-white mb-0">100% Natural</h5>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                    <div class="feature-item position-relative bg-primary text-center p-3">
                        <div class="border py-5 px-3">
                            <i class="fa fa-tint-slash fa-3x text-dark mb-4"></i>
                            <FontAwesomeIcon icon={faDropletSlash} className="fa-3x text-dark"/>
                            <h5 class="text-white mb-0">Anti Hair Fall</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                    <div class="feature-item position-relative bg-primary text-center p-3">
                        <div class="border py-5 px-3">
                            <i class="fa fa-times fa-3x text-dark mb-4"></i>
                            <FontAwesomeIcon icon={ faTimes} className="fa-3x text-dark"/>
                            <h5 class="text-white mb-0">Hypoallergenic</h5>                     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </>
    )
  };
  export default Feat;
  