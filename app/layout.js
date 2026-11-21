import "./globals.css";

export const metadata = {
  title: "Minha linda família: eu e minha família serviremos a Deus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
