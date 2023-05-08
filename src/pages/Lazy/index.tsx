import { Suspense, lazy } from "react";

const Hola = lazy(() => import("./Hola"));

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
