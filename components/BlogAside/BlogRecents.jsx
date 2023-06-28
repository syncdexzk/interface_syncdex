import React from "react";
import BlogRecentItem from "./BlogRecentItem";

const BlogRecents = () => {
  const recentItems = [
    {
      title: "Don’t Underestimate The Software",
      url: "/blog/blog-details",
      time: "4 March. 2022",
      src: "/img/blog/rc_post_img01.jpg",
    },
    {
      title: "Designing Human-Machine Interfaces..",
      url: "/blog/blog-details",
      time: "4 March. 2022",
      src: "/img/blog/rc_post_img02.jpg",
    },
    {
      title: "Web Design Done Well: Excellent",
      url: "/blog/blog-details",
      time: "4 March. 2022",
      src: "/img/blog/rc_post_img03.jpg",
    },
    {
      title: "Don’t Underestimate The Software",
      url: "/blog/blog-details",
      time: "4 March. 2022",
      src: "/img/blog/rc_post_img04.jpg",
    },
  ];

  return (
    <div className="blog-widget">
      <h2 className="bw-title">Recent Post</h2>
      <div className="rc-post-wrap">
        {recentItems.map((item, index) => (
          <BlogRecentItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogRecents;
