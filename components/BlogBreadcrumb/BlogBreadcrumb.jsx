import React from "react";
import Link from "next/link";
const BlogBreadcrumb = (props) => {
  return (
    <section className="breadcrumb-area breadcrumb-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="breadcrumb-content">
              <h2 className="title">{props.title}</h2>
              <nav aria-label="Breadcrumbs">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/blog">
                      <span>Home</span>
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <span>{props.item}</span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogBreadcrumb;
