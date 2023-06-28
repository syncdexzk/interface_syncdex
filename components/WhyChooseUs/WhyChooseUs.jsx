import React, { useEffect, useState } from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import WhyChooseUsItem from "./WhyChooseUsItem";

const WhyChooseUs = () => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const slider_items = [
    {
      src: "/img/icon/choose_icon01.svg",
      alt: "",
      link: "/",
      title: "Mobile payment make easy",
      description: "Add new, trending and rare artwork to your collection.",
    },
    {
      src: "/img/icon/choose_icon02.svg",
      alt: "",
      link: "/",
      title: "Lifetime free transaction",
      description: "Add new, trending and rare artwork to your collection.",
    },
    {
      src: "/img/icon/choose_icon03.svg",
      alt: "",
      link: "/",
      title: <>Protect the identity</>,
      description: "Add new, trending and rare artwork to your collection.",
    },
    {
      src: "/img/icon/choose_icon04.svg",
      alt: "",
      link: "/",
      title: "Sercurity & control over money",
      description: "Add new, trending and rare artwork to your collection.",
    },
    {
      src: "/img/icon/choose_icon01.svg",
      alt: "",
      link: "/",
      title: "Lifetime free transaction",
      description: "Add new, trending and rare artwork to your collection.",
    },
    {
      src: "/img/icon/choose_icon03.svg",
      alt: "",
      link: "/",
      title: <>Protect the identity</>,
      description: "Add new, trending and rare artwork to your collection.",
    },
    {
      src: "/img/icon/choose_icon04.svg",
      alt: "",
      link: "/",
      title: "Sercurity & control over money",
      description: "Add new, trending and rare artwork to your collection.",
    },
  ];

  const initalState = 0;
  const [count, setCount] = useState(initalState);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((old) => (old == 6 ? 0 : old + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toMultiply = 100 / slider_items.length;

  return (
    <section className="choose-area pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-50">
              <span className="sub-title">Provide Liquidity</span>
              <h2 className="title text-gradiant">
              Manage your transactions<span> in one place</span>
              </h2>
              <p>You can buy and sell 150+ cryptocurrencies with 20+ fiat currencies using bank transfers on your credit or debit card</p>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-xl-12 Swap-img">
          <img src={"/img/banner/banner-swap.png"} alt="" />
        </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
