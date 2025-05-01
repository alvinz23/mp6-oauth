// app/page.tsx
import { SignInButton } from "../app/components/SignInButton"
import UserGreeting from "../app/components/UserGreeting";

type SearchParams = { code?: string; error?: string };

export default async function HomePage({
  searchParams,
}: {
  searchParams: { code?: string; error?: string };
}) {
  const { code } = searchParams;

  if (!code) {
    return <SignInButton />;
  }

  return (
    <main>
      <UserGreeting code={code} />
    </main>
  );
}