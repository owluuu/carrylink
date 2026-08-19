"use client";

import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return <main>Loading...</main>;
  }

  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <h1>CarryLink</h1>

      <p>
        代理購入と旅行者をつなぐサービス
      </p>

      {!user ? (
        <a href="/api/auth/login">
          <button>Sign in with Cognito</button>
        </a>
      ) : (
        <div>
          <h2>ログイン済み</h2>

          <p>
            User ID: {user.userId}
          </p>

          <p>
            Username: {user.username}
          </p>

          <a href="/api/auth/logout">
            <button>Sign out</button>
          </a>
        </div>
      )}
    </main>
  );
}