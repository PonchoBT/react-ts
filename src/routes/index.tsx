import { useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import LazyHola from "../pages/LazyHola";
import PadresHijos from "../pages/PadresHijos";
import MapCard from "../pages/MapCardArrayFill";
import Page404 from "../pages/404";
import MapCardAxios from "../pages/MapCardAxios"
import MapSinApi from "../pages/MapSinApi";
import Contador from "../pages/ContadorSuma"


const LazyRouter = lazy(() => import("../pages/LazyRouter"));

export default function Router() {
  let element = useRoutes([
    {
      path: "home", element: (<div><LazyHola /></div>),
    },
    {
      path: "padreshijos", element: (<div><PadresHijos /></div>),
    },
    { path: "*", element: <Page404 /> },
    { path: "mapcard", element: <MapCard /> },
    { path: "mapcardaxios", element: <MapCardAxios /> },
    { path: "mapsinapi", element: <MapSinApi /> },
    { path: "contador", element: <Contador /> },
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
          <LazyRouter />
        </Suspense>
      ),
    },
  ]);
  return element;
}
