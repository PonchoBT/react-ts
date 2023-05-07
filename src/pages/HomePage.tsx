import { Suspense, lazy } from "react";

const Hola = lazy(() => import("../pages/hola"));

const HomePage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Hola />
      </Suspense>
    </div>
  );
};

export default HomePage;
