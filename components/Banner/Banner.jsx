import React from "react";
import CountDownOne from "../CountDown/CountDownOne";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="banner-area banner-bg">
      
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-lg-6">
            <div>
              <div className="section-title mb-30 wow fadeInUp" data-wow-delay="1s">
                <h2 className="title">
               <span>The first </span> 
               <span>DEX built on </span>
               <span>zkSync Era.</span>  
                </h2>
              </div>
              
              <p className="wow fadeInUp" data-wow-delay="1s">We have built to support the zkSync ecosystem  with the most advanced decentralized exchange.
              </p>
              <Link href="https://app.syncdex.io/" className="btn wow fadeInUp"  data-wow-delay=".8s">
                Trade Now
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-img wow fadeInRight" data-wow-delay=".5s">
             <div className="banner-shape-wrap">
                <img
                  src={"/img/banner/banner_shape01.png"}
                  alt=""
                  className="img-one"
                />
                <img
                  src={"/img/banner/banner_shape02.png"}
                  alt=""
                  className="img-two"
                />
                <img
                  src={"/img/banner/banner_shape03.png"}
                  alt=""
                  className="img-three"
                />
            </div> 
              <img
                src={"/img/banner/img-top-right.png"}
                alt=""

              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
