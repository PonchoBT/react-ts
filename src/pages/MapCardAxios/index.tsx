import { useState, useEffect, Suspense } from "react";
import { Grid, Card, CardContent, Typography, Skeleton } from "@mui/material";
import axios from "axios";

// Componente de carga con 3 colores
const LoadingFallback = () => (
  <Grid container spacing={3}>
    {[...Array(8)].map((_, index) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
        <Card>
          <Skeleton
            variant="rectangular"
            height={250}
            sx={{
              backgroundColor:
                index % 3 === 0
                  ? "rgba(227, 242, 253, 0.5)"
                  : index % 3 === 1
                  ? "rgba(243, 229, 245, 0.5)"
                  : "rgba(255, 243, 224, 0.5)",
            }}
            animation="wave"
          />
          <CardContent>
            <Typography variant="h6" align="center" sx={{ color: "#666" }}>
              Loading puppy images!
            </Typography>
            <Skeleton variant="text" width="60%" animation="wave" />
            <Skeleton variant="text" width="40%" animation="wave" />
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

// Agregamos los estilos usando styled-components o una etiqueta style
const styles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Simplificar el tipo de dogs usando una interfaz
interface DogImage {
  url: string;
  width: number;
  height: number;
  aspectRatio: number;
}

function MapCardAxios() {
  const [dogs, setDogs] = useState<DogImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    const loadDogs = async () => {
      try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random/12');
        const urls = response.data.message;
        
        const preloadImages = urls.map((url: string) =>
          new Promise<DogImage>((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve({
              url,
              width: img.naturalWidth,
              height: img.naturalHeight,
              aspectRatio: img.naturalWidth / img.naturalHeight
            });
            img.onerror = () => reject(new Error(`Error loading: ${url}`));
          })
        );

        const results = await Promise.all(preloadImages);
        setDogs(results);
        setError(null);
        setAllImagesLoaded(true);
      } catch (err) {
        setError('Oops! We couldn\'t load the puppy photos. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadDogs();
  }, []);

  const getOptimizedImageStyle = (aspectRatio: number) => {
    // Mantener proporción pero limitar tamaños
    const baseHeight = 250;
    const maxWidth = 400;
    let width = baseHeight * aspectRatio;
    let height = baseHeight;

    if (width > maxWidth) {
      width = maxWidth;
      height = maxWidth / aspectRatio;
    }

    return {
      width: `${width}px`,
      height: `${height}px`,
    };
  };

  return (
    <Suspense fallback={<LoadingFallback />}>
      <style>{styles}</style>
      {isOffline && (
        <div
          style={{
            position: 'fixed',
            top: 20,
            left: 20,
            backgroundColor: '#ff4444',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '4px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            zIndex: 1000,
            animation: 'fadeIn 0.3s ease-in-out',
          }}
        >
          <Typography variant="body1">
            No connection! Please check your internet connection
          </Typography>
        </div>
      )}
      {error && (
        <div
          style={{
            position: 'fixed',
            top: isOffline ? 80 : 20,
            left: 20,
            backgroundColor: '#ff9800',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '4px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            zIndex: 1000,
            animation: 'fadeIn 0.3s ease-in-out',
          }}
        >
          <Typography variant="body1">
            {error}
          </Typography>
        </div>
      )}
      <Grid container spacing={3} alignItems="stretch">
        {dogs.length > 0 ? (
          dogs.map((dog, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card sx={{ 
                height: "100%",
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ 
                  position: "relative",
                  flex: 1,
                  minHeight: '200px',
                  backgroundColor: "rgba(227, 242, 253, 0.5)",
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden'
                }}>
                  {!allImagesLoaded && (
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(227, 242, 253, 0.5)",
                      }}
                      animation="wave"
                    />
                  )}
                  <img
                    src={dog.url}
                    alt={`Puppy ${index + 1}`}
                    style={{
                      ...getOptimizedImageStyle(dog.aspectRatio),
                      objectFit: "contain",
                      opacity: allImagesLoaded ? 1 : 0,
                      transition: 'opacity 0.5s ease-in-out',
                    }}
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.src = "https://via.placeholder.com/300x200?text=Error+loading+image";
                    }}
                  />
                </div>
                <CardContent>
                  <Typography variant="h6">
                    Puppy {index + 1}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : loading ? (
          <LoadingFallback />
        ) : (
          <Typography variant="h6" align="center" sx={{ width: "100%", mt: 2 }}>
            No images found
          </Typography>
        )}
      </Grid>
    </Suspense>
  );
}

export default MapCardAxios;
