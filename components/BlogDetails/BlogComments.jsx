import React from "react";
import BlogCommentItem from "./BlogCommentItem";

const BlogComments = () => {
  return (
    <div className="comment-wrap">
      <h4 className="title">(04) Comment</h4>
      <div className="latest-comments">
        <ul className="list-wrap">
          <li>
            <BlogCommentItem
              item={{
                avatar: "/img/blog/comment_avatar01.png",
                author: "Kristin Watson",
                time: "19th August 2022",
                comment:
                  "Patient Comments are a collection of comments submitted by viewers in response to a question posed by a MedicineNet doctor.",
              }}
            />
          </li>
          <li>
            <ul className="children">
              <li>
                <BlogCommentItem
                  item={{
                    avatar: "/img/blog/comment_avatar02.png",
                    author: "Brooklyn Simmons",
                    time: "19th August 2022",
                    comment:
                      "Include anecdotal examples of your experience, or things you took notice of that you feel others would find useful.",
                  }}
                />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogComments;
