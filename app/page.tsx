import { SignInButton } from "../app/components/SignInButton";
import UserGreeting from "../app/components/UserGreeting";

export default async function HomePage(props: { searchParams: Promise<{ code?: string | null; error?: string | null }> }) {
  const { code } = await props.searchParams;

  if (!code) {
    return (
    <SignInButton />
    );
  }

  return (
    <main>
      <UserGreeting code={code} />
    </main>
  );
}