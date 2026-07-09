import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "ParkQR | Smart QR Tags For Every Moment Of Your Life",
  description: "Secure, anonymous, and instant QR tags for vehicles, safety emergencies, pets, and personal belongings. Made in India with privacy at its core.",
  keywords: ["Smart QR Tag", "Parking management", "Privacy calling", "Emergency SOS", "Pet tracking", "Bharat Smart Tag"],
  authors: [{ name: "ParkQR Team" }],
  openGraph: {
    title: "ParkQR | Smart QR Tags For Every Moment Of Your Life",
    description: "Secure, anonymous, and instant QR tags for vehicles, safety emergencies, pets, and personal belongings.",
    url: "https://parkqr.in",
    siteName: "ParkQR",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FCFBFF] text-[#090810]">
        {children}
      </body>
    </html>
  );
}
