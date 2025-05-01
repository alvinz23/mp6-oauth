
type Props = { code: string };
export default async function UserGreeting({ code }: Props) {
  const CLIENT_ID     = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID!;
  const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET!;
  const REDIRECT_URI  = "http://localhost:3000";

  const tokenRes = await fetch(
    "https://github.com/login/oauth/access_token",
    {method: "POST", headers: { Accept: "application/json", "Content-Type": "application/x-www-form-urlencoded", },
      body: "client_id=" + CLIENT_ID + "&client_secret="+ CLIENT_SECRET +"&code=" + code +"&redirect_uri=" + REDIRECT_URI, }
  );
  const { access_token } = await tokenRes.json();

  const userRes = await fetch("https://api.github.com/user", {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  const user = await userRes.json();

  return (
    <main className="flex h-screen items-center justify-center">
      <h1 className="text-2xl">
        Hello, {user.name || user.login}!
      </h1>
    </main>
  );
}