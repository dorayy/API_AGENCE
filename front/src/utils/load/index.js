import React, { lazy, Suspense } from "react";
import Navbar from "@components/Navbar";

const LazyLoading = (importFunc, { fallback = null } = { fallback: null }) => {
  const LazyComponent = lazy(importFunc);

  return (props) => (
    <>
      <Navbar>
        <Suspense fallback={fallback || ""}>
          <LazyComponent {...props} />
        </Suspense>
      </Navbar>
    </>
  );
};

export default LazyLoading;
