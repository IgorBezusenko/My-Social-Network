import React, { Suspense } from "react";
import { Spinner } from "../common/spinner/spinner";

export function withSuspense<WCP>(WrappedComponent:React.ComponentType<WCP>) {
  return (props:WCP) => {
    return (
      <Suspense fallback={<Spinner />}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  };
}
