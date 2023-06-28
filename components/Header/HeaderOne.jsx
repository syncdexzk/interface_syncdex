import React, { useState, useEffect } from "react";
import cn from "classnames";
import $ from "jquery";
import Link from "next/link";
import { handleClickScroll } from "@/lib/helpers";
import { useRouter } from "next/router";

let flag = true;

const HeaderOne = () => {
  // sticky nav bar
  const [stickyClass, setStickyClass] = useState({
    fixed: "",
    header: "",
  });

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight < 245
        ? setStickyClass({ fixed: "", header: "" })
        : setStickyClass({ fixed: "active-height", header: "sticky-menu" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  // mobile menu
  useEffect(() => {
    if (flag === true) {
      //SubMenu Dropdown Toggle
      if ($(".menu-area li.menu-item-has-children ul").length) {
        $(".menu-area .navigation li.menu-item-has-children").append(
          '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
        );
      }

      //Mobile Nav Hide Show
      if ($(".mobile-menu").length) {
        let mobileMenuContent = $(".menu-area .main-menu").html();
        $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

        //Dropdown Button
        $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
          "click",
          function () {
            $(this).toggleClass("open");
            $(this).prev("ul").slideToggle(500);
          }
        );
        //Menu Toggle Btn
        $(".mobile-nav-toggler").on("click", function () {
          $("body").addClass("mobile-menu-visible");
        });

        //Menu Toggle Btn
        $(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
          $("body").removeClass("mobile-menu-visible");
        });
      }
    }

    flag = false;
  }, []);

  // active link switching
  const [hash, setHash] = useState("");
  const { asPath, pathname } = useRouter();

  useEffect(() => {
    setHash(asPath.split("#")[1]);
  }, [asPath]);

  const isActiveLink = (id) => {
    return id == "#" + hash ? "active" : "";
  };

  return (
    <header id="header">
      <div id="header-fixed-height" className={cn(stickyClass.fixed)} />

      <div id="sticky-header" className={cn("menu-area", stickyClass.header)}>
        <div className={cn("container custom-container")}>
          <div className="row">
            <div className="col-12">
              <div className={"mobile-nav-toggler"}>
                <i className="fas fa-bars" />
              </div>

              <div className="menu-wrap">
                <nav className={"menu-nav"}>
                  <div className="logo">
                    <Link href={"/"}>
                      <img src={"/img/logo/logo.png"} alt="SyncDex Logo" />
                    </Link>
                  </div>

                  <div className={cn("navbar-wrap main-menu d-none d-lg-flex")}>
                    <ul className={"navigation"}>
                      <li
                      >
                        <Link
                          href="https://app.syncdex.io/#/swap"
                          className={"section-link"}
                        >
                          Trade
                        </Link>
                      </li>
                      <li >
                        <Link
                          href="https://app.syncdex.io/#/pools"
                          className={"section-link"}
                        >
                          Pools
                        </Link>
                      </li>
                      <li >
                        <Link
                          href="https://app.syncdex.io/#/farms"
                          className={"section-link"}
                        >
                          Farm
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://app.syncdex.io/#/bridge"
                          className={"section-link"}
                        >
                          Bridge
                          
                        </Link>
                      </li>
                      <li className={"menu-item-has-children"}>
                        <Link
                          href="https://www.orbiter.finance/"
                          className={"section-link"}
                        >
                          Events
                          
                        </Link>
                        <ul className={cn("sub-menu")}>
                          <li className={cn(pathname == "https://trantor.xyz/campaign/3697966841858" && "active")}>
                            <Link href="https://trantor.xyz/campaign/3697966841858">SyncDex Trantor Contest 1</Link>
                          </li>
                          <li className={cn(pathname == "https://trantor.xyz/campaign/3697966841857" && "active")}>
                            <Link href="https://trantor.xyz/campaign/3697966841858">SyncDex Trantor Contest 2</Link>
                          </li>
                          <li className={cn(pathname == "https://trantor.xyz/campaign/3697966841858" && "active")}>
                            <Link href="https://taskon.xyz/campaign/detail/6231">SyncDex Trantor Contest 3</Link>
                          </li>
                          <li className={cn(pathname == "https://trantor.xyz/campaign/3697966841858" && "active")}>
                            <Link href="https://trantor.xyz/campaign/3697966841858">SyncDex Trantor Contest 4</Link>
                          </li>
                          <li
                            className={cn(
                              pathname == "https://zealy.io/c/syncdex-5524/questboard" && "active"
                            )}
                          >
                            <Link href="https://zealy.io/c/syncdex-5524/questboard">SyncDex Zealy Contest</Link>
                          </li>
                        </ul>
                      </li>
                      <li >
                        <Link
                          href="https://syncdex.gitbook.io/"
                          className={"section-link"}
                        >
                          Documents
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className={cn("header-action", "d-none d-md-block")}>
                    <ul>

                      <li className={"header-btn"}>
                        <Link href="https://app.syncdex.io/" className="btn">
                        LAUNCH DAPP
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              {/* <!-- Mobile Menu  --> */}
              <div className={"mobile-menu"}>
                <nav className={"menu-box"}>
                  <div className={"close-btn"}>
                    <i className="fas fa-times"></i>
                  </div>
                  <div className={"nav-logo"}>
                    <Link href="/">
                      <img
                        src={"/img/logo/logo.png"}
                        alt="BigTech Logo"
                        title=""
                      />
                    </Link>
                  </div>

                  <div className={"menu-outer"}>
                    {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->  */}
                  </div>

                  <div className={"social-links"}>
                    <ul className="clearfix">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div className={"menu-backdrop"} />
              {/* <!-- End Mobile Menu --> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
