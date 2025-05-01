"use client";

import Link from "next/link";
import styled from "styled-components";

const CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID!;
const REDIRECT_URI = "https://mp6-oauth-pl2e.vercel.app/"; 

const MainContainer = styled.main`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
`;

const Card = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1.5rem;
`;

const StyledLink = styled(Link)`
  display: block;
  background-color: #2563eb;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: medium;
  width: 90%;
  
  &:hover {
    background-color: #1d4ed8;
  }
`;

export function SignInButton() {
  const authUrl = "https://github.com/login/oauth/authorize" + "?client_id=" + CLIENT_ID + "&redirect_uri=" + REDIRECT_URI + "&scope=read:user user:email";

  return (
    <MainContainer>
      <Card>
        <Title>Welcome</Title>
        <StyledLink href={authUrl}>
          Sign in with GitHub
        </StyledLink>
      </Card>
    </MainContainer>
  );
}
