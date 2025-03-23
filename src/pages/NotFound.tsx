
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="glass-card rounded-lg p-10 max-w-md w-full text-center space-y-6 animate-scale-in">
        <div className="relative w-24 h-24 mx-auto">
          <div className="absolute inset-0 bg-blue-100 rounded-full filter blur-xl opacity-70 animate-pulse-soft"></div>
          <div className="relative flex items-center justify-center w-full h-full font-mono text-4xl font-bold">
            404
          </div>
        </div>
        <h1 className="text-2xl font-bold">Page Not Found</h1>
        <p className="text-muted-foreground">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="pt-4">
          <a
            href="/"
            className="btn-primary rounded-full inline-block px-8 py-3"
          >
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
