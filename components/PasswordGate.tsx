"use client";

import { useState, useEffect } from "react";

const SESSION_KEY = "chatbot_authenticated";

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Check if already authenticated in this session
  useEffect(() => {
    if (typeof window !== "undefined") {
      const authenticated = sessionStorage.getItem(SESSION_KEY) === "true";
      setIsAuthenticated(authenticated);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Get password from environment variable
    // Note: Must use NEXT_PUBLIC_ prefix for client-side access
    const correctPassword = process.env.NEXT_PUBLIC_CHATBOT_PASSWORD || "";

    if (!correctPassword) {
      setError("Password protection not configured. Please set NEXT_PUBLIC_CHATBOT_PASSWORD environment variable.");
      return;
    }

    if (password === correctPassword) {
      if (typeof window !== "undefined") {
        sessionStorage.setItem(SESSION_KEY, "true");
      }
      setIsAuthenticated(true);
      setPassword("");
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100 dark:bg-slate-950">
        <div className="text-slate-600 dark:text-slate-400">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100 dark:bg-slate-950">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-slate-900">
          <div className="mb-6 text-center">
            <h1 className="mb-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
              Livelihood NW Chatbot
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Please enter the password to access the chatbot
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-[#7cad42] focus:outline-none focus:ring-1 focus:ring-[#7cad42] dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-500"
                placeholder="Enter password"
                autoFocus
              />
            </div>
            {error && (
              <div className="rounded-md bg-red-50 p-3 text-sm text-red-800 dark:bg-red-900/20 dark:text-red-400">
                {error}
              </div>
            )}
            <button
              type="submit"
              className="w-full rounded-md bg-[#7cad42] px-4 py-2 font-medium text-white transition-colors hover:bg-[#6b9d3a] focus:outline-none focus:ring-2 focus:ring-[#7cad42] focus:ring-offset-2"
            >
              Access Chatbot
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
