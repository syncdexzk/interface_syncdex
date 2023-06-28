import React from "react";
import Link from "next/link";



const Info = () => {
  return (
    <section id="info" className="about-area  pb-55">
      <div className="container wp-content-info">
      <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-50">
              <span className="sub-title">BUY, STORE, SELL</span>
              <h2 className="title text-gradiant">
              Manage your transactions<span> in one place</span>
              </h2>
              <p>You can buy and sell 150+ cryptocurrencies with 20+ fiat currencies using bank transfers on your credit or debit card</p>
              <img className="start-position" src={"/img/banner/star.png"} alt="" />
            </div>
          </div>
        </div>
        <div className="row align-items-center">
        <div className="col-lg-6">
            <div className="about-content ">
              <div className="about-img wow fadeInLeft" data-wow-delay=".5s">
                <img src={"/img/img-info.png"} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="info-text ">
              <div className="info-content-bottom">
                <div className="item fadeInDown wow" data-wow-delay=".2s">
                  <div className="icon">
                    <img src="/img/farming.png" alt="" />

                  </div>
                  <div className="item-content">
                    <h3>Protocol Earnings</h3>
                    <p>As soon as it is fully operational, SyncDex will collect a wide range of fees from its ecosystem, spacing from the DEX to the Launchpad ones.</p>

                  </div>
                </div>
                <div className="item fadeInDown wow" data-wow-delay=".3s">
                  <div className="icon">
                  <img src="./img/trading.png" alt="" />

                  </div>
                  <div className="item-content">
                    <h3>Swap</h3>
                    <p>Discover how to swap your tokens and save 50 to 65% on each trade.</p>

                  </div>
                </div>
                <div className="item fadeInDown wow" data-wow-delay=".5s">
                  <div className="icon">
                  <img src="./img/nfts.png" alt="" />

                  </div>
                  <div className="item-content">
                    <h3>Dividends</h3>
                    <p>Dividends will account for 25% of total protocol earnings. They will be distributed to users which allocate xSND in the dividend feature.</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Info;
