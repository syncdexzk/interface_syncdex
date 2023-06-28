import React from "react";
import dynamic from "next/dynamic";

const Odometer = dynamic(import("react-odometerjs"), {
  ssr: false,
  loading: () => 0,
});

const CounterAreaItem = (props) => {
  return (
    <div className="counter-item">
      <div className="counter-icon">
        <img src={props.icon} alt="" />
      </div>

      <div className="counter-content">
        <h2 className="count">
          {/* <span className="odometer" data-count="280"></span> */}
          <Odometer
            value={props.amount}
            format="(,ddd).dd"
            duration={1000}
            animation={"count"}
          />
          K
        </h2>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default CounterAreaItem;
