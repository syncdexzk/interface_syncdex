import { scrollToTop } from "@/lib/helpers";
import Link from "next/link";
import React from "react";

const FooterTwo = () => {
  return (
    <footer>
      <div className="footer-area-two">
        <div className="container custom-container-four">
          <div className="footer-top">
            <div className="row">
              <div className="col-md-8">
                <div className="footer-menu-two">
                  <ul className="navigation">
                    <li>
                      <Link href="/">About us</Link>
                    </li>
                    <li>
                      <Link href="/">Roadmap</Link>
                    </li>
                    <li>
                      <Link href="/">Blog</Link>
                    </li>
                    <li>
                      <Link href="/">Career</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-social">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-vimeo-v"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row">
              <div className="col-lg-5">
                <div className="copyright-text">
                  <p>Copyright &copy; 2022. All Rights Reserved Bigtech</p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="scroll-up text-center">
                  <button
                    className="scroll-to-target"
                    data-target="html"
                    onClick={scrollToTop}
                  >
                    <i className="fas fa-arrow-up"></i>
                  </button>
                  <span>scroll Top</span>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="footer-bottom-menu">
                  <ul>
                    <li>
                      <Link href="#">Terms of Service</Link>
                    </li>
                    <li>
                      <Link href="#">Privacy Policy</Link>
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

export default FooterTwo;
