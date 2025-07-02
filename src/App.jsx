/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Import necessary components from react-query

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
import Bookmark from "./pages/Bookmark";
import { Toaster } from "react-hot-toast";
import { useUser } from "./features/auth/useUser";
import Spinner from "./ui/Spinner";

// Create a QueryClient instance with better defaults for auth
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      retry: false,
    },
  },
});

function AuthWrapper({ children }) {
  const { isLoading } = useUser();

  if (isLoading) {
    return <Spinner />;
  }

  return children;
}

export default function App() {
  return (
    <>
      {/* Wrap the application in QueryClientProvider and pass the queryClient instance */}
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthWrapper>
            <Routes>
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="/" element={<Home />} />
                <Route path="/bookmark" element={<Bookmark />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </AuthWrapper>
        </BrowserRouter>
        <Toaster />
      </QueryClientProvider>
    </>
  );
}
