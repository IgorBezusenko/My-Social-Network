import React from "react";
import s from "./Paginator.module.css";

const Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            key={p}
            onClick={(e) => props.onPageChange(p)}
            className={props.currentPage === p ? s.selectedPage : ""}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};
export default Paginator;
