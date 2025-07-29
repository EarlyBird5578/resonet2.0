import "./globals.css";
import { loadTheme } from "@/lib/themeLoader";
import FFATNav from "@/components/FFATNav";

export default function RootLayout({ children }) {
  const theme = loadTheme();

  return (
    <html lang="de">
      <body className={theme.background + " " + theme.textColor}>
        <header className="text-center p-6 text-3xl font-bold">ReSonet</header>
        <FFATNav buttons={theme.buttons} />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
