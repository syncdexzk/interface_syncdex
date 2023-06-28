import React from "react";
import Link from "next/link";
const BlogRecentItem = (props) => {
  return (
    <div className="rc-post-item">
      <div className="rc-post-thumb">
        <Link href={props.item.url}>
          <img src={props.item.src} alt="img" />
        </Link>
      </div>

      <div className="rc-post-content">
        <span>{props.item.time}</span>

        <h4 className="title">
          <Link href={props.item.url}>{props.item.title}</Link>
        </h4>
      </div>
    </div>
  );
};

export default BlogRecentItem;
