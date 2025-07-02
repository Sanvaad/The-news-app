/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Import necessary components from react-query

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
=======
import { QueryClient, QueryClientProvider } from "react-query"; // Import necessary components from react-query

import Home from "./pages/Home";
import Login from "./pages/Login";
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
import Bookmark from "./pages/Bookmark";
import { Toaster } from "react-hot-toast";
import { useUser } from "./features/auth/useUser";
import Spinner from "./ui/Spinner";

<<<<<<< HEAD
// Create a QueryClient instance with better defaults for auth
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      retry: false,
    },
  },
});
=======
// Create a QueryClient instance
const queryClient = new QueryClient();
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2

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
<<<<<<< HEAD
              <Route path="/signup" element={<Signup />} />
=======
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2
            </Routes>
          </AuthWrapper>
        </BrowserRouter>
        <Toaster />
      </QueryClientProvider>
    </>
  );
}
