import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const index = () => {
    return (
        <>
            {/* <!-- Pricing Start --> */}
            <div class="container-xxl py-5">
                <div class="container py-5">
                    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 class="text-secondary text-uppercase">Reference</h6>
                        <h1 class="mb-5">Reference Guide</h1>
                    </div>
                    <div class="row g-4">
                        <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="price-item">
                                <div class="border-bottom p-4 mb-4">
                                    <h5 class="text-primary mb-1">Alpha Bravo Charlie phonetic alphabet</h5>
                                </div>
                                <div class="p-4 pt-0">
                                    <p>Alpha-Bravo-Charlie phonetic alphabet is frequently used international alphabet for spelling the complex words and names over the phone. </p>
                                     
                                    <a class="btn-slide mt-2" href=""><i class="fa fa-arrow-right"></i><span>learn more
                                    </span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="price-item">
                                <div class="border-bottom p-4 mb-4">
                                    <h5 class="text-primary mb-1">IMO Classes for Dangerous Goods</h5>
                                </div>
                                <div class="p-4 pt-0">
                                    <p>International system for classification and labelling of dangerous goods.. </p>
                                     
                                    <a class="btn-slide mt-2" href=""><i class="fa fa-arrow-right"></i><span>learn more
                                    </span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="price-item">
                                <div class="border-bottom p-4 mb-4">
                                    <h5 class="text-primary mb-1">Freight, shipping and chartering glossary</h5>
                                </div>
                                <div class="p-4 pt-0">
                                    <p>Glossary of popular maritime transportation terms with their explanations frequently used in sea transportation. </p>
                                     
                                    <a class="btn-slide mt-2" href=""><i class="fa fa-arrow-right"></i><span>learn more
                                    </span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="price-item">
                                <div class="border-bottom p-4 mb-4">
                                    <h5 class="text-primary mb-1">Liner terms</h5>
                                </div>
                                <div class="p-4 pt-0">
                                    <p>Liner Terms are the conditions for transporting goods by sea. The terms specify what are included and excluded in the freight rate. </p>
                                     
                                    <a class="btn-slide mt-2" href="Incoterms"><i class="fa fa-arrow-right"></i><span>learn more
                                    </span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="price-item">
                                <div class="border-bottom p-4 mb-4">
                                    <h5 class="text-primary mb-1">Incoterms 2020</h5>
                                </div>
                                <div class="p-4 pt-0">
                                    <p>The set of international rules for the interpretation of the most commonly used trade terms in foreign trade. </p>
                                     
                                    <a class="btn-slide mt-2" href="/Incoterm"><i class="fa fa-arrow-right"></i><span>learn more
                                    </span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="price-item">
                                <div class="border-bottom p-4 mb-4">
                                    <h5 class="text-primary mb-1">Pallet dimensions and position in container</h5>
                                </div>
                                <div class="p-4 pt-0">
                                    <p>Plastic pallets, wood pallets, pallet dimentions, pallet layout, pallet types. </p>
                                     
                                    <a class="btn-slide mt-2" href=""><i class="fa fa-arrow-right"></i><span>learn more
                                    </span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="price-item">
                                <div class="border-bottom p-4 mb-4">
                                    <h5 class="text-primary mb-1">Currency converter</h5>
                                </div>
                                <div class="p-4 pt-0">
                                    <p>Online currency converter allows you to perform a quick conversion of money between a number of world currencies using current mid-market rates. </p>
                                     
                                    <a class="btn-slide mt-2" href=""><i class="fa fa-arrow-right"></i><span>learn more
                                    </span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="price-item">
                                <div class="border-bottom p-4 mb-4">
                                    <h5 class="text-primary mb-1">Unit converter</h5>
                                    
                                </div>
                                <div class="p-4 pt-0">
                                    <p>Online unit converter allows to convert the values prevalent in transportation business between units of length/distance, weight/mass, volume/capacity, fuel consumption, density and speed used in different countries</p>
                                    <a class="btn-slide mt-2" href=""><i class="fa fa-arrow-right"></i><span>learn 
                                        more</span></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* <!-- Pricing End --> */}

        </>
    )
}

export default index