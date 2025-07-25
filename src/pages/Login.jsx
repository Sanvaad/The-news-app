<<<<<<< HEAD
import { useEffect, useCallback } from "react";
import LoginForm from "../features/auth/LoginForm";
import { useUser } from "../features/auth/useUser";
import Spinner from "../ui/Spinner";
import { Navigate } from "react-router-dom";
import supabase from "../services/supabase";
=======
import LoginForm from "../features/auth/LoginForm";
import Logo from "../ui/Logo";
import { useUser } from "../features/auth/useUser";
import Spinner from "../ui/Spinner";
import { Navigate } from "react-router-dom";
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2

export default function Login() {
  const { isLoading, isAuthenticated } = useUser();

<<<<<<< HEAD
  // Define the global callback function
  const handleSignInWithGoogle = useCallback(async (response) => {
    try {
      console.log("Google Sign-In response:", response);
      
      const { data, error } = await supabase.auth.signInWithIdToken({
        provider: "google",
        token: response.credential,
      });

      if (error) {
        console.error("Google Sign-In error:", error);
        alert(`Google Sign-In failed: ${error.message}`);
      } else {
        console.log("Google Sign-In successful:", data);
        // Refresh the page to trigger auth state update
        window.location.reload();
      }
    } catch (err) {
      console.error("Google Sign-In error:", err);
      alert(`Google Sign-In failed: ${err.message}`);
    }
  }, []);

  useEffect(() => {
    // Load Google Sign-In script
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    
    script.onload = () => {
      // Initialize Google Sign-In after script loads
      if (window.google) {
        const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
        
        // Check if Google Client ID is properly configured
        if (!googleClientId || googleClientId === "YOUR_GOOGLE_CLIENT_ID_HERE") {
          console.warn("Google Client ID not configured. Google Sign-In will be disabled.");
          const buttonContainer = document.getElementById("google-signin-button");
          if (buttonContainer) {
            buttonContainer.innerHTML = `
              <div class="text-center text-sm text-gray-500 p-4 border border-gray-200 rounded-lg">
                <p class="mb-2">Google Sign-In not configured</p>
                <p class="text-xs">Please set VITE_GOOGLE_CLIENT_ID in your .env file</p>
              </div>
            `;
          }
          return;
        }

        try {
          window.google.accounts.id.initialize({
            client_id: googleClientId,
            callback: handleSignInWithGoogle,
            auto_select: false,
            cancel_on_tap_outside: false,
          });

          // Render the button
          const buttonContainer = document.getElementById("google-signin-button");
          if (buttonContainer) {
            window.google.accounts.id.renderButton(buttonContainer, {
              type: "standard",
              shape: "pill", 
              theme: "outline",
              text: "signin_with",
              size: "large",
              logo_alignment: "left",
              width: "100%"
            });
          }
        } catch (error) {
          console.error("Failed to initialize Google Sign-In:", error);
          const buttonContainer = document.getElementById("google-signin-button");
          if (buttonContainer) {
            buttonContainer.innerHTML = `
              <div class="text-center text-sm text-red-500 p-4 border border-red-200 rounded-lg">
                <p>Google Sign-In initialization failed</p>
              </div>
            `;
          }
        }
      }
    };

    document.head.appendChild(script);

    // Set global callback for compatibility
    window.handleSignInWithGoogle = handleSignInWithGoogle;

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      delete window.handleSignInWithGoogle;
    };
  }, [handleSignInWithGoogle]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Spinner />
      </div>
    );
=======
  if (isLoading) {
    return <Spinner />;
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2
  }

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-400">
      <div className="min-h-screen bg-white grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Illustration */}
        <div className="bg-gradient-to-br from-teal-300 to-emerald-400 p-8 lg:p-12 flex flex-col justify-between relative">
          {/* News Theme Illustration */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative">
              {/* Main Newspaper */}
              <div className="relative z-10">
                <div className="w-40 h-48 bg-white rounded-lg shadow-2xl relative transform -rotate-3">
                  {/* Newspaper header */}
                  <div className="p-4">
                    <div className="h-3 bg-gray-800 rounded mb-2"></div>
                    <div className="h-1 bg-gray-600 rounded w-3/4 mb-4"></div>
                    
                    {/* Headlines */}
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-700 rounded w-full"></div>
                      <div className="h-2 bg-gray-500 rounded w-5/6"></div>
                      <div className="h-2 bg-gray-500 rounded w-4/6"></div>
                    </div>
                    
                    {/* Article columns */}
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <div className="h-1 bg-gray-400 rounded w-full"></div>
                        <div className="h-1 bg-gray-400 rounded w-4/5"></div>
                        <div className="h-1 bg-gray-400 rounded w-full"></div>
                        <div className="h-1 bg-gray-400 rounded w-3/5"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-1 bg-gray-400 rounded w-full"></div>
                        <div className="h-1 bg-gray-400 rounded w-5/6"></div>
                        <div className="h-1 bg-gray-400 rounded w-full"></div>
                        <div className="h-1 bg-gray-400 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating news elements */}
              <div className="absolute -top-6 -left-8">
                <div className="w-8 h-8 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center transform rotate-12">
                  <div className="w-4 h-4 bg-white rounded"></div>
                </div>
              </div>

              <div className="absolute -top-2 -right-10">
                <div className="w-6 h-6 bg-red-500 rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="absolute -bottom-6 left-2">
                <div className="w-10 h-6 bg-green-500 rounded-lg shadow-lg transform -rotate-12"></div>
              </div>

              <div className="absolute -bottom-2 -right-6">
                <div className="w-7 h-7 bg-yellow-500 rounded-lg shadow-lg transform rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Stay Informed, Stay Ahead
            </h2>
            <p className="text-teal-100 text-sm leading-relaxed max-w-sm mx-auto">
              Get the latest news from trusted sources around the world. Your
              gateway to staying informed with breaking news and updates.
            </p>

            {/* Pagination dots */}
            <div className="flex justify-center space-x-2 mt-8">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <LoginForm />
        </div>
      </div>
=======
    <div className="min-h-[100vh] flex flex-col justify-center items-center">
      <Logo />
      <h3 className="mb-10 text-[2.1rem]">Log in to your account</h3>
      <LoginForm />
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2
    </div>
  );
}
