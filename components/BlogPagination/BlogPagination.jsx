import React from "react";
import Link from "next/link";
const BlogPagination = () => {
  return (
    <div className="pagination-wrap">
      <ul className="list-wrap">
        <li className="prv-next">
          <Link href="#">
            <i className="fas fa-angle-double-left"></i>
          </Link>
        </li>
        <li>
          <Link href="#">1</Link>
        </li>
        <li>
          <Link href="#" className="current">
            2
          </Link>
        </li>
        <li>
          <Link href="#">3</Link>
        </li>
        <li>
          <Link href="#">...</Link>
        </li>
        <li className="prv-right">
          <Link href="#">
            <i className="fas fa-angle-double-right"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BlogPagination;
