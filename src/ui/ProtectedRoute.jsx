/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/auth/useUser";
import Spinner from "./Spinner";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
<<<<<<< HEAD
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
=======
      if (!isAuthenticated) navigate("/login");
    },
    [isAuthenticated, navigate]
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2
  );

  if (isLoading) return <Spinner />;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
