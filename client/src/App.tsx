import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Router } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

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
              <Router base="/ai-agency-landing">
                <Routes />
              </Router>
            </Suspense>
          </HelmetProvider>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
