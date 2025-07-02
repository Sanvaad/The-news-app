import { useLogout } from "./useLogout";
<<<<<<< HEAD
=======
import logoutIcon from "../../images/logout.svg";
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2
import Spinner from "../../ui/Spinner";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
<<<<<<< HEAD
    <button 
      disabled={isLoading} 
      onClick={logout}
      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
      title="Logout"
    >
      {!isLoading ? (
        <svg 
          className="h-6 w-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
          />
        </svg>
=======
    <button disabled={isLoading} onClick={logout}>
      {!isLoading ? (
        <img src={logoutIcon} alt="" className="h-8" />
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2
      ) : (
        <Spinner />
      )}
    </button>
  );
}

export default Logout;
