import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Better Fitness Club | Gimnasio en Mar del Plata",
  description:
    "Centro de entrenamiento integral en Mar del Plata. Funcional, running, comunidad deportiva y Better FC. Alvarado 2837.",
  icons: {
    icon: [{ url: "/assets/better/better_fitness_logo_4k_full.png", type: "image/png" }],
    shortcut: "/assets/better/better_fitness_logo_4k_full.png",
    apple: "/assets/better/better_fitness_logo_4k_full.png",
  },
  openGraph: {
    title: "Better Fitness Club | Gimnasio en Mar del Plata",
    description:
      "Centro de entrenamiento integral en Mar del Plata. Funcional, running, comunidad deportiva y Better FC. Alvarado 2837.",
    type: "website",
    locale: "es_AR",
    siteName: "Better Fitness Club",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(localStorage.getItem('theme')!=='light')document.documentElement.classList.add('dark');})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              name: "Better Fitness Club",
              description:
                "Centro de entrenamiento integral en Mar del Plata. Funcional, running, comunidad deportiva y Better FC.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Alvarado 2837",
                addressLocality: "Mar del Plata",
                addressRegion: "Buenos Aires",
                addressCountry: "AR",
              },
              telephone: "+5492234374913",
              url: "https://www.instagram.com/better.fitness.club",
              sameAs: ["https://www.instagram.com/better.fitness.club"],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "113",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "07:00",
                  closes: "21:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "09:00",
                  closes: "13:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
