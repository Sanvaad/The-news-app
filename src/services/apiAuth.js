<<<<<<< HEAD
import supabase from "./supabase";

export async function login({ email, password }) {
  console.log("Attempting login with:", { email, password: "***" });
  
=======
import supabase, { supabaseUrl } from "./supabase";

export async function login({ email, password }) {
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

<<<<<<< HEAD
  console.log("Supabase response:", { data, error });

  if (error) {
    console.log("Supabase auth error:", error);
    throw new Error(error.message);
  }
=======
  if (error) throw new Error(error.message);
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
<<<<<<< HEAD

export async function signup({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}
=======
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2
