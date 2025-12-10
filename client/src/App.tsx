import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Router as WouterRouter, useLocation } from "wouter";
import { useMemo, useCallback } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

// Custom hook for GitHub Pages base path
const useBasePath = (base = "/ai-agency-landing") => {
  const [location, setLocation] = useLocation();

  const basedLocation = useMemo(() => {
    // Remove the base from the current location
    if (location.startsWith(base)) {
      return location.slice(base.length) || "/";
    }
    return location;
  }, [location, base]);

  const navigate = useCallback(
    (to: string) => {
      // Add base to navigation
      setLocation(base + to);
    },
    [setLocation, base]
  );

  return [basedLocation, navigate] as const;
};

// Lazy load pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const WorkPage = lazy(() => import("./pages/WorkPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostDetail = lazy(() => import("./pages/BlogPostDetail"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/work" component={WorkPage} />
      <Route path="/work/:slug" component={CaseStudyDetail} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:slug" component={BlogPostDetail} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      // switchable
      >
        <TooltipProvider>
          {/* @ts-ignore */}
          <HelmetProvider>
            <Toaster />
            <Suspense fallback={<LoadingSpinner />}>
              <WouterRouter hook={useBasePath}>
                <Routes />
              </WouterRouter>
            </Suspense>
          </HelmetProvider>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
