import { createContext, ReactNode, useEffect, useState } from "react";

interface UserData {
  id?: number;
  username: string;
  email?: string;
}

type AuthProviderProps = {
  children: ReactNode;
};

interface AuthContextType {
  user: UserData | null;
  isAuth: boolean;
  login: (userData: UserData, token: string) => void;
  logout: () => void;
  token: string | null;
  setToken: (token: string) => void;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
      setIsAuth(true);
    }
  }, []);

  const login = (userData: UserData, authToken: string) => {
    setUser(userData);
    setIsAuth(true);
    setToken(authToken);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", authToken);
  };

  const logout = () => {
    setUser(null);
    setIsAuth(false);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuth, login, logout, token, setToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
