import React from "react";
import Link from "next/link";

const FooterThree = () => {
  return (
    <footer>
      <div className="footer-area-three footer-bg">
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer-widget">
                  <Link href="/" className="f-logo">
                    <img src={"/img/logo/logo.png"} alt="" />
                  </Link>
                  <div className="footer-content">
                    <p>
                      A new way to make the payments easy, reliable and 100%
                      secure. claritatem itamconse quat. Exerci tationulla
                    </p>
                    <ul className="footer-social">
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-skype"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div className="footer-widget">
                  <h4 className="fw-title">Usefull Links</h4>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="#">Contact us</Link>
                      </li>
                      <li>
                        <Link href="#">How it Works</Link>
                      </li>
                      <li>
                        <Link href="#">Create</Link>
                      </li>
                      <li>
                        <Link href="#">Explore</Link>
                      </li>
                      <li>
                        <Link href="#">Terms & Services</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <h4 className="fw-title">Community</h4>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="#">Help Center</Link>
                      </li>
                      <li>
                        <Link href="#">Partners</Link>
                      </li>
                      <li>
                        <Link href="#">Suggestions</Link>
                      </li>
                      <li>
                        <Link href="#">Blog</Link>
                      </li>
                      <li>
                        <Link href="#">Newsletters</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="footer-widget">
                  <h4 className="fw-title">Subscribe Newsletter</h4>
                  <div className="footer-newsletter">
                    <p>
                      Exerci tation ullamcorper suscipit lobortis nisl aliquip
                      ex ea commodo
                    </p>
                    <form action="#">
                      <input type="email" placeholder="Info@gmail.com" />
                      <button type="submit">
                        <i className="fas fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="copyright-text">
                  <p>© Copyright 2022 Bigtech. All Rights Reserved Copyright</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link href="#">Terms and conditions</Link>
                    </li>
                    <li>
                      <Link href="#">Privacy policy</Link>
                    </li>
                    <li>
                      <Link href="#">Login / Signup</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;
