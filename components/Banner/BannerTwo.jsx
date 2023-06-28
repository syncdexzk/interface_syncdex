import React from "react";
import Link from "next/link";
import { handleClickScroll } from "@/lib/helpers";

const BannerTwo = () => {
  return (
    <section className="banner-area-two">
      <div className="banner-bg-two"></div>
      <div className="container custom-container-four">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="banner-content text-center">
              <h2 className="title wow fadeInDown" data-wow-delay=".2s">
                World’s Biggest ICO Cryptocurrency Platform for you
              </h2>
              <img src={"/img/banner/banner_img.png"} alt="img" />
            </div>
          </div>
        </div>
      </div>
      <div className="banner-social-wrap">
        <ul>
          <li>
            <a href="#" className="banner-social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <span>LinkedIn</span>
          </li>
          <li>
            <a href="#" className="banner-social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <span>Twitter</span>
          </li>
          <li>
            <a href="#" className="banner-social-link">
              <i className="fab fa-pinterest"></i>
            </a>
            <span>Pinterest</span>
          </li>
          <li>
            <a href="#" className="banner-social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <span>Instagram</span>
          </li>
        </ul>
      </div>
      <div className="banner-scroll">
        <span>Scroll down</span>
        <Link
          href="#about"
          data-target="#about"
          onClick={() => handleClickScroll("about")}
        >
          <img src={"/img/icon/scroll_icon.svg"} alt="" />
        </Link>
      </div>
    </section>
  );
};

export default BannerTwo;
