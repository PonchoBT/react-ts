import { useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import Home from "../pages/HomePage";

// import Page404 from "../pages/Page404";
// import Films from "../pages/Films";
// import Header from "../layout/Header";
// const Home = lazy(() => import("../pages/HomePage"));
const Imagen = lazy(() => import("../pages/Imagen"));

export default function Router() {
  let element = useRoutes([
    {
      path: "home",
      element: (
        <div>
          <Home />
        </div>
      ),
    },
    // { path: "*", element: <Page404 /> },
    // { path: "films", element: <Films /> },

    {
      path: "/",
      element: (
        <Suspense
          fallback={
            <div>
              <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
                <LinearProgress color="secondary" />
                <LinearProgress color="success" />
                <LinearProgress color="inherit" />
              </Stack>
            </div>
          }
        >
          <Imagen />
        </Suspense>
      ),
    },
  ]);
  return element;
}
