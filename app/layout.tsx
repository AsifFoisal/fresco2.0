import type {Metadata} from 'next';
import {Playfair_Display, Plus_Jakarta_Sans, Alex_Brush, Cormorant_Garamond} from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const alexBrush = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Fresco. - Italian Restaurant | Locally Crafted Food & Wine',
  description: 'Authentic Italian specialties, handcrafted pasta, wood-fired pizza, and fine wines since 1978.',
  openGraph: {
    title: 'Fresco. - Italian Restaurant',
    description: 'Authentic Italian specialties, handcrafted pasta, wood-fired pizza, and fine wines since 1978.',
    type: 'website',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable} ${alexBrush.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased bg-white text-[#2a2a2a] selection:bg-[#ff6900] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

