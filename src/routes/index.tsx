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
import ContadorSuma from "../pages/ContadorSuma";
import ContadorLimite from "../pages/ContadorLimite";
import WSJ from "../pages/WSJ";
import Nav from "../pages/Nav"

const LazyRouter = lazy(() => import("../pages/LazyRouter"));

export default function Router() {
  let element = useRoutes([
    { path: "*", element: <Page404 /> },
    { path: "/", element: <Nav />},
    { path: "lazy-hola", element: <LazyHola />},
    { path: "padres-hijos", element: <PadresHijos />},
    { path: "map-card", element: <MapCard /> },
    { path: "map-card-axios", element: <MapCardAxios /> },
    { path: "map-sin-api", element: <MapSinApi /> },
    { path: "contador-suma", element: <ContadorSuma /> },
    { path: "contador-limite", element: <ContadorLimite /> },
    { path: "wsj", element: <WSJ /> },
    {
      path: "lazyrouter",
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
