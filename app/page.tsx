// app/page.tsx
import { SignInButton } from "../app/components/SignInButton"
import UserGreeting from "../app/components/UserGreeting";

type SearchParams = { code?: string; error?: string };

export default async function HomePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  if (searchParams.error || !searchParams.code) {
    return <SignInButton />;
  }

  return <UserGreeting code={searchParams.code} />;
}