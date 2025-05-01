
type Props = { code: string };
export default async function UserGreeting({ code }: Props) {
  const CLIENT_ID     = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID!;
  const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET!;
  const REDIRECT_URI  = "https://mp6-oauth-pl2e.vercel.app/"; 

  const tokenRes = await fetch(
    "https://github.com/login/oauth/access_token",
    {method: "POST", headers: { Accept: "application/json", "Content-Type": "application/x-www-form-urlencoded", },
      body: "client_id=" + CLIENT_ID + "&client_secret="+ CLIENT_SECRET +"&code=" + code +"&redirect_uri=" + REDIRECT_URI}
  );
  const { access_token } = await tokenRes.json();

  const userRes = await fetch("https://api.github.com/user", {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  const user = await userRes.json();

  const date = new Date().toLocaleDateString("en-US");

  return (
    <main className="border-4 rounded-lg border-black bg-blue-700 flex items-center justify-center w-[50%] mx-auto mt-40 h-96">
      <ul className="text-5xl text-white space-y-12">
        <li>Authentication successful!</li>
       <li>Name : {user.name || user.login}</li>
       <li>Current date : {date}</li>
      </ul>
    </main>
  );
}

