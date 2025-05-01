// app/page.tsx
import { SignInButton } from "../app/components/SignInButton";
import UserGreeting from "../app/components/UserGreeting";

interface PageProps {
  searchParams: {
    code?: string | null;
    error?: string | null;
  };
}

export default async function HomePage({ searchParams }: PageProps) {
  const { code, error } = searchParams;

  if (!code) {
    return <SignInButton />;
  }

  return (
    <main>
      <UserGreeting code={code} />
    </main>
  );
}