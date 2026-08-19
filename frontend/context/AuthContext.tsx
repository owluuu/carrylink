"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthUser = {
  userId: string;
  username: string;
};

type AuthContextType = {
  user: AuthUser | null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    fetch("/api/auth/me")
      .then(async (response) => {
        if (ignore) return;

        if (!response.ok) {
          setUser(null);
          return;
        }

        const data = await response.json();

        if (!ignore) {
          setUser(data.user);
        }
      })
      .catch(() => {
        if (!ignore) {
          setUser(null);
        }
      })
      .finally(() => {
        if (!ignore) {
          setLoading(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
