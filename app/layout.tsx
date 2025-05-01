import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <header className = "font-extrabold text-3xl">
      CS391 MP6 Oauth
    </header>
    <html lang="en">
      <body>{children}</body>
    </html>
    </>

  );
}