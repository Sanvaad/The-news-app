import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
<<<<<<< HEAD
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      toast.success("Successfully logged in!");
      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.log("LOGIN ERROR:", err);
      console.log("Error message:", err.message);
      toast.error(`Login failed: ${err.message}`);
=======
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2
    },
  });

  return { login, isLoading };
}
