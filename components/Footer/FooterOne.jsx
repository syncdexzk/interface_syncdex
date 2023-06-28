import { scrollToTop } from "@/lib/helpers";
import Link from "next/link";
import React from "react";

const FooterOne = () => {
  return (
    <footer>
      <div className="footer-area">
        <div className="container">
          <div className="footer-scroll-wrap">
            <button
              className="scroll-to-target"
              data-target="html"
              onClick={scrollToTop}
            >
              <i className="fas fa-arrow-up animated infinite bounce "></i>
            </button>
          </div>
          <div className="footer-top">
            <div className="row d-center">
              <div className="col-xl-5 col-lg-5 col-md-5">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".2s"
                >
                <h2 className="title text-gradiant">
                Follow Our Social Media
                  </h2>

                    <ul className="footer-button">
                      <li>
                      <a class="btn" href="https://t.me/SyncDexAnouncement" target="_blank"> <i class="fab fa-telegram"></i> Telegram</a>
                      </li>
                      <li>
                      <a class="btn" href="https://twitter.com/Sync_Dex" target="_blank"><i class="fab fa-twitter"></i> Twitter</a>
                      </li>
                    </ul>
                  

                </div>
              </div>
              
              <div className="col-xl-7 col-lg-7 col-md-7">
                <div className="row row-id-link">
                <div className="col-xl-6 col-lg-6 col-sm-6">
                  <div className="footer-widget  wow fadeInUp" data-wow-delay=".4s">
                    <h4 className="fw-title">TOOLS</h4>
                    <div className="footer-link">
                      <ul>
                        <li>
                          <Link href="/">Liquidity Pools</Link>
                        </li>
                        <li>
                          <Link href="/">Custom Tokens</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-sm-6">
                  <div
                    className="footer-widget wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <h4 className="fw-title">ABOUT</h4>
                    <div className="footer-link">
                      <ul>
                        <li>
                          <Link href="https://syncdex.gitbook.io/" target="_blank">Document</Link>
                        </li>
                        <li>
                          <Link href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=contact.syncdex@gmail.com&hl=en" target="_blank">Help</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                </div>
                <div
                  className="footer-widget wow fadeInUp footer-newsletter"
                  data-wow-delay=".8s"
                >
                  <h4 className="fw-title">Newsletter</h4>
                  <div className="footer-newsletter">
                    <form action="#">
                      <input
                        type="email"
                        placeholder="contact.syncdex@gmail.com"
                        required
                      />
                      <button type="submit">
                        Subcribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="copyright-text">
                  <p>Copyright &copy; 2023. All Rights Reserved <a href="#">SyncDex</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
