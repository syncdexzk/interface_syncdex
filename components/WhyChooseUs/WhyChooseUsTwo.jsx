import React from "react";
import WhyChooseUsTwoItem from "./WhyChooseUsTwoItem";

const WhyChooseUsTwo = () => {
  const items = [
    {
      src: "/img/icon/h2_choose_icon01.svg",
      title: "Mobile payment make easy",
      desc: "Add new, trending and rare artwork to your collection.",
      url: "/home-two",
    },
    {
      src: "/img/icon/h2_choose_icon02.svg",
      title: "Lifetime free transaction",
      desc: "Add new, trending and rare artwork to your collection.",
      url: "/home-two",
    },
    {
      src: "/img/icon/h2_choose_icon03.svg",
      title: "Protect the identity",
      desc: "Add new, trending and rare artwork to your collection.",
      url: "/home-two",
    },
    {
      src: "/img/icon/h2_choose_icon04.svg",
      title: "Sercurity & control over money",
      desc: "Add new, trending and rare artwork to your collection.",
      url: "/home-two",
    },
  ];

  return (
    <section className="choose-area-two choose-bg pb-130">
      <div className="container custom-container-four">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-70">
              <span className="sub-title">why Choose us</span>
              <h2 className="title">Why you choose our bigtech Token</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {items.map((x, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
              <WhyChooseUsTwoItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsTwo;
