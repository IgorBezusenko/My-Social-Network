import React, { useState } from "react";
import cn from "classnames";
import styles from "./Paginator.module.css";

const Paginator = ({
  totalUsersCount,
  pageSize,
  onPageChange,
  currentPage,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (
        <button onClick={() => setPortionNumber(portionNumber - 1)}>
          prev
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              key={p}
              onClick={(e) => onPageChange(p)}
              className={cn(
                {
                  [styles.selectedPage]: currentPage === p,
                },
                styles.page
              )}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button onClick={() => setPortionNumber(portionNumber + 1)}>
          next
        </button>
      )}
    </div>
  );
};
export default React.memo(Paginator);
