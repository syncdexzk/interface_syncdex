import React from "react";
import Link from "next/link";
import cn from "classnames";

const SalesTabContent = (props) => {
  return (
    <div
      className={cn("tab-pane fade", props.className)}
      id={props.id}
      role="tabpanel"
      aria-labelledby={props.ariaLabel}
    >
      <div className="chart-content-inner">
        <h2 className="title">{props.title}</h2>
        <p>{props.description}</p>
        <Link href={props.link} className="btn">
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default SalesTabContent;
