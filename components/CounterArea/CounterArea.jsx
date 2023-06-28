import React, { useEffect, useState } from "react";
import CounterAreaItem from "./CounterAreaItem";

const CounterArea = () => {
  const [amount, setAmount] = useState(210);

  useEffect(() => {
    const timer = setInterval(() => {
      if (parseFloat(amount) < 999) {
        const newNumber = parseFloat(amount) + 10;

        setAmount(newNumber);
      }
    }, 1000 * 10);

    return () => {
      clearInterval(timer);
    };
  }, [amount]);

  return (
    <section className="counter-area">
      <div className="container custom-container-four">
        <div className="counter-inner">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <CounterAreaItem
                icon={"/img/icon/counter_icon01.svg"}
                amount={amount + 23}
                title="Active Installation"
              />
            </div>

            <div className="col-lg-4 col-sm-6">
              <CounterAreaItem
                icon={"/img/icon/counter_icon01.svg"}
                amount={amount + 89}
                title="Active Installation"
              />
            </div>

            <div className="col-lg-4 col-sm-6">
              <CounterAreaItem
                icon={"/img/icon/counter_icon01.svg"}
                amount={amount + 37}
                title="Active Installation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterArea;
