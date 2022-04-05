import { useAuth } from "../../context/authContext";
import Link from "next/link";

interface Props {}

const Header = (props: Props) => {
  const { login, logout, user } = useAuth();

  return (
    <header className="container flex items-center justify-between my-4 border-b-2 border-primary-text pb-4">
      <div id="logo">
        <span className="font-bold text-2xl">
          <Link href="/">Engineering Overflow</Link>
        </span>
      </div>
      <nav>
        <ul>
          <li>
            {user ? (
              <button onClick={logout}>Logout</button>
            ) : (
              <button onClick={login}>Login</button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
