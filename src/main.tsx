import React, { Component, ErrorInfo, ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "framer-motion";
import App from "./App.tsx";
import "./index.css";

// --- 1. AGENCY CONSOLE SIGNATURE ---
// A subtle touch found in high-end production sites
if (import.meta.env.PROD) {
  console.log(
    "%c FAST SHIPPING & LOGISTICS %c v1.0.0 ",
    "background: #444cf7; color: white; font-weight: bold; border-radius: 4px 0 0 4px; padding: 4px;",
    "background: #1e293b; color: #94a3b8; font-weight: bold; border-radius: 0 4px 4px 0; padding: 4px;"
  );
  console.log(
    "%c Crafted with precision. ",
    "color: #94a3b8; font-size: 10px; font-style: italic;"
  );
}

// --- 2. PREMIUM ERROR BOUNDARY ---
// Catches crashes gracefully instead of showing a white screen
class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#0a0f1c] text-white p-4 text-center selection:bg-red-500/30">
          <div className="w-full max-w-md space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-8 h-8 text-red-500"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                <path d="M12 9v4"/>
                <path d="M12 17h.01"/>
              </svg>
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Something went wrong.</h1>
            <p className="text-slate-400">
              The application encountered an unexpected error. Our team has been notified.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-slate-200 transition-colors"
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// --- 3. ROOT RENDER ---
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      {/* MotionConfig sets the "House Style" for animation physics.
        reducedMotion="user" respects system accessibility settings.
      */}
      <MotionConfig 
        transition={{ 
          type: "spring", 
          stiffness: 150, 
          damping: 20, 
          mass: 0.8 
        }}
        reducedMotion="user"
      >
        <App />
      </MotionConfig>
    </ErrorBoundary>
  </React.StrictMode>
);