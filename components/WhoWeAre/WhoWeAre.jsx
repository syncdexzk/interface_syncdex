import React from "react";
import Link from "next/link";



const WhoWeAre = () => {
  return (
    <section id="about" className="about-area pt-130 pb-130">
      <div className="container wp-content-1">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".5s">
              <div className="item  gradient-border">
                <div className="wp-text">
                  <p>$20M</p>
                  <p>Trade Volume 24h</p>
                  </div>
              </div>
              
              <div className="item  gradient-border">
              <div className="wp-text">
                  <p>$180M</p>
                  <p>Total Value Locked</p>
                  </div>
              </div>
              <div className="item  gradient-border">
              <div className="wp-text">
                  <p>300</p>
                  <p>Integrations</p>
                  </div>
              </div>
              <div className="item  gradient-border">
              <div className="wp-text">
                  <p>4,400+</p>
                  <p>Community Delegates</p>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight" data-wow-delay=".5s">
              <div className="section-title mb-30">
                <h2 className="title text-gradiant">
                Experience lightning-fast transactions<span> and unbeatable security</span>  with zkSync
                </h2>
              </div>
              <p>
              The SyncDex AMM has been developed to facilitate the exchange of ERC-20 tokens through automated liquidity pools in a straightforward, cost-effective, speedy, and secure manner. By using SyncDex, you can be confident that you have complete authority over your assets, and all your transactions are safeguarded.
              </p>
              <Link href="https://app.syncdex.io/" className="btn">
                Start Trading
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container wp-content-2">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-content  wow fadeInRight" data-wow-delay=".5s">
              <div className="section-title mb-30">
                <span className="sub-title">Earn Crypto</span>
                <h2 className="title title_content text-gradiant">LP Farms or Yield Farming</h2>
                <p>LP Farms or Yield Farming lets users earn rewards through staking LP tokens in Yield Farms. The amount of rewards depends on the APR of the specific Yield Farm being staked.</p>
                <p>Farming rewards will be distributed in xSND/SND in an 100% xSND. </p>
                <img className="start-position" src={"/img/banner/star.png"} alt="" />
              </div>
              <div className="section-content-2">
                <div className="item">
                  <p>15%</p>
                  <p>On Crypto</p>
                </div>
                <div className="item">
                  <p>40%</p>
                  <p>On StableCoins</p>
                </div>
              </div>
             
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".5s">
              <img src={"/img/banner/banner-s1.png"} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
