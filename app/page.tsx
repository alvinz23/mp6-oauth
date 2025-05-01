import { SignInButton } from "../app/components/SignInButton";
import UserGreeting from "../app/components/UserGreeting";
import { redirect } from "next/navigation"; 

export default async function HomePage(props: { searchParams: Promise<{ code?: string | null; error?: string | null }> }) {
  const { code } = await props.searchParams;

  if (!code) {
    return (
      redirect("https://mp6-oauth-pl2e.vercel.app/"), 
    <SignInButton />
    );
  }

  return (
    <main>
      <UserGreeting code={code} />
    </main>
  );
}