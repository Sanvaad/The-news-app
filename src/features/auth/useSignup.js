import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ email, password, fullName }) => signupApi({ email, password, fullName }),
    onSuccess: (data) => {
      console.log("Signup successful:", data);
      toast.success("Account created successfully! Please check your email for verification.");
    },
    onError: (err) => {
      console.log("SIGNUP ERROR:", err);
      toast.error(`Signup failed: ${err.message}`);
    },
  });

  return { signup, isLoading };
}