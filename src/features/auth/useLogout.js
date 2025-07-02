import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { toast } from "react-hot-toast";
=======
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
<<<<<<< HEAD
      toast.success("Successfully logged out!");
      navigate("/login", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Error logging out");
    },
=======
      navigate("/login", { replace: true });
    },
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2
  });

  return { logout, isLoading };
}
