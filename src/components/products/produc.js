import "../../css/style.css";
import Product1 from "../../img/product-1.png"
import Product2 from "../../img/product-2.png"


const Produc = () => {
    
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
                <h1 class="text-primary mb-3"><span class="fw-light text-dark">Our Natural</span> Hair Products</h1>
                <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
            </div>
            <div class="row g-4">
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <div class="product-item text-center border h-100 p-4">
                        <img class="img-fluid mb-4" src={Product1} alt=""/>
                        <div class="mb-2">
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small>(99)</small>
                        </div>
                        <a href="" class="h6 d-inline-block mb-2">Hair Shining Shampoo</a>
                        <h5 class="text-primary mb-3">$99.99</h5>
                        <a href="" class="btn btn-outline-primary px-3">Add To Cart</a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                    <div class="product-item text-center border h-100 p-4">
                        <img class="img-fluid mb-4" src={Product2} alt=""/>
                        <div class="mb-2">
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small>(99)</small>
                        </div>
                        <a href="" class="h6 d-inline-block mb-2">Anti-dandruff Shampoo</a>
                        <h5 class="text-primary mb-3">$99.99</h5>
                        <a href="" class="btn btn-outline-primary px-3">Add To Cart</a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                    <div class="product-item text-center border h-100 p-4">
                        <img class="img-fluid mb-4" src={Product1} alt=""/>
                        <div class="mb-2">
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small>(99)</small>
                        </div>
                        <a href="" class="h6 d-inline-block mb-2">Anti Hair Fall Shampoo</a>
                        <h5 class="text-primary mb-3">$99.99</h5>
                        <a href="" class="btn btn-outline-primary px-3">Add To Cart</a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                    <div class="product-item text-center border h-100 p-4">
                        <img class="img-fluid mb-4" src={Product2} alt=""/>
                        <div class="mb-2">
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small>(99)</small>
                        </div>
                        <a href="" class="h6 d-inline-block mb-2">Hair Growing Shampoo</a>
                        <h5 class="text-primary mb-3">$99.99</h5>
                        <a href="" class="btn btn-outline-primary px-3">Add To Cart</a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <div class="product-item text-center border h-100 p-4">
                        <img class="img-fluid mb-4" src={Product1} alt=""/>
                        <div class="mb-2">
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small>(99)</small>
                        </div>
                        <a href="" class="h6 d-inline-block mb-2">Hair Shining Shampoo</a>
                        <h5 class="text-primary mb-3">$99.99</h5>
                        <a href="" class="btn btn-outline-primary px-3">Add To Cart</a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                    <div class="product-item text-center border h-100 p-4">
                        <img class="img-fluid mb-4" src={Product2} alt=""/>
                        <div class="mb-2">
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small>(99)</small>
                        </div>
                        <a href="" class="h6 d-inline-block mb-2">Anti-dandruff Shampoo</a>
                        <h5 class="text-primary mb-3">$99.99</h5>
                        <a href="" class="btn btn-outline-primary px-3">Add To Cart</a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                    <div class="product-item text-center border h-100 p-4">
                        <img class="img-fluid mb-4" src={Product1} alt=""/>
                        <div class="mb-2">
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small>(99)</small>
                        </div>
                        <a href="" class="h6 d-inline-block mb-2">Anti Hair Fall Shampoo</a>
                        <h5 class="text-primary mb-3">$99.99</h5>
                        <a href="" class="btn btn-outline-primary px-3">Add To Cart</a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                    <div class="product-item text-center border h-100 p-4">
                        <img class="img-fluid mb-4" src={Product2} alt=""/>
                        <div class="mb-2">
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small>(99)</small>
                        </div>
                        <a href="" class="h6 d-inline-block mb-2">Hair Growing Shampoo</a>
                        <h5 class="text-primary mb-3">$99.99</h5>
                        <a href="" class="btn btn-outline-primary px-3">Add To Cart</a>
                    </div>
                </div>
                <div class="col-12 text-center">
                    <a class="btn btn-primary py-2 px-4" href="">Load More Products</a>
                </div>
            </div>
        </div>
    </div>
        </>
    )
  };
  
  export default Produc;