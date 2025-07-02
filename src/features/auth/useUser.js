import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

<<<<<<< HEAD
  return { isLoading, user, isAuthenticated: !!user };
=======
  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2
}
