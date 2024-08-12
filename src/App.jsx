/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query"; // Import necessary components from react-query

import Home from "./pages/Home";
import Login from "./pages/Login";
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
import Bookmark from "./pages/Bookmark";
import { Toaster } from "react-hot-toast";
import { useUser } from "./features/auth/useUser";
import Spinner from "./ui/Spinner";

// Create a QueryClient instance
const queryClient = new QueryClient();

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
            </Routes>
          </AuthWrapper>
        </BrowserRouter>
        <Toaster />
      </QueryClientProvider>
    </>
  );
}
