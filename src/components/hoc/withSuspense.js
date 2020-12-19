import React, { Suspense } from "react";
import { Spinner } from "../common/spinner/spinner";

export const withSuspense = (Component) => {
  return (props) => {
    return (
      <Suspense fallback={<Spinner />}>
        <Component {...props} />
      </Suspense>
    );
  };
};
