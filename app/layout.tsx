import "./globals.css";
import { Inter } from "next/font/google";
import { FFATNav } from "@/components/FFATNav";
import { loadTheme } from "@/lib/themeLoader";
import { NextIntlClientProvider, useMessages } from 'next-intl';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ReSonet",
  description: "Resonanz als neues Betriebssystem",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = (await import(`@/messages/${params.locale}/common.json`)).default;
  const theme = await loadTheme();

  return (
    <html lang={params.locale}>
      <body className={`${inter.className} min-h-screen flex flex-col bg-[${theme.colors.background}] text-[${theme.colors.text}]`}>
        <NextIntlClientProvider messages={messages} locale={params.locale}>
          {/* Header */}
          <header className="w-full p-4 flex justify-between items-center">
            <img src={theme.logo} alt="ReSonet Logo" className="h-12" />
            <h1 className="text-xl font-bold">{theme.title}</h1>
          </header>

          {/* Hauptinhalt in goldenem Schnitt */}
          <main className="flex-grow flex justify-center">
            <div className="w-full max-w-screen-lg px-4 md:px-8 py-6 md:py-12" style={{ maxWidth: "61.8%" }}>
              {children}
            </div>
          </main>

          {/* FFAT Navigation */}
          <footer className="w-full">
            <FFATNav theme={theme} />
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
