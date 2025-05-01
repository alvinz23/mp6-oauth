"use client";

import Link from "next/link";

const CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID!;
const REDIRECT_URI = "https://mp6-oauth-pl2e.vercel.app/";

export function SignInButton() {
  const authUrl =
    "https://github.com/login/oauth/authorize" +
    "?client_id=" +
    CLIENT_ID +
    "&redirect_uri=" +
    REDIRECT_URI +
    "&scope=read:user user:email";

  return (
    <main className="flex h-screen items-center justify-center bg-gray-10">
      <div className="bg-zinc-200 p-8 rounded shadow-md w-96 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome</h2>
        <Link
          href={authUrl}
          className="block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded text-center font-medium w-11/12 mx-auto"
        >
          Sign in with GitHub
        </Link>
      </div>
    </main>
  );
}