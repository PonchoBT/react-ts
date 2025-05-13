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
import MapText from "../pages/MapText"
import ContadorSuma from "../pages/ContadorSuma";
import ContadorLimite from "../pages/ContadorLimite";
import WSJ from "../pages/WSJ";
import Nav from "../pages/Nav"
import VideoBackground from "../pages/VideoBackground/VideoBackground";

const LazyRouter = lazy(() => import("../pages/LazyRouter"));

// Crear componente para el fallback
const LoadingFallback = () => (
  <div>
    <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
    </Stack>
  </div>
);

// Definir tipo para las rutas
type RouteConfig = {
  path: string;
  element: React.ReactNode;
}[];

export default function Router() {
  const routes: RouteConfig = [
    { path: "/", element: <Nav /> },
    { path: "lazy-hola", element: <LazyHola /> },
    { path: "padres-hijos", element: <PadresHijos /> },
    { path: "map-card", element: <MapCard /> },
    { path: "map-card-axios", element: <MapCardAxios /> },
    { path: "map-sin-api", element: <MapSinApi /> },
    { path: "contador-suma", element: <ContadorSuma /> },
    { path: "contador-limite", element: <ContadorLimite /> },
    { path: "map-text", element: <MapText /> },
    { path: "wsj", element: <WSJ /> },
    { path: "video-background", element: <VideoBackground /> },
    {
      path: "lazyrouter",
      element: (
        <Suspense fallback={<LoadingFallback />}>
          <LazyRouter />
        </Suspense>
      ),
    },
    { path: "*", element: <Page404 /> }, // Mover la ruta 404 al final
  ];

  const element = useRoutes(routes);
  return element;
}
