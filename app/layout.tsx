import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://recruitment.awslpu.in"
  ),
  title: {
    default: "AWS LPU Recruitment",
    template: "%s | AWS LPU Recruitment",
  },
  description:
    "AWS LPU Recruitment Management Portal for managing applications, applicants, recruitment processes, and offers.",
  applicationName: "AWS LPU Recruitment",
  keywords: [
    "AWS LPU",
    "AWS LPU Recruitment",
    "Recruitment Management",
    "LPU Recruitment",
  ],
  openGraph: {
    type: "website",
    url: "https://recruitment.awslpu.in",
    siteName: "AWS LPU Recruitment",
    title: "AWS LPU Recruitment",
    description:
      "AWS LPU Recruitment Management Portal.",
  },
  twitter: {
    card: "summary",
    title: "AWS LPU Recruitment",
    description:
      "AWS LPU Recruitment Management Portal.",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#f5f5f5] font-sans">
        <div className="flex min-h-screen w-full flex-col px-8">
          <Navbar />

          <main className="flex flex-1 flex-col">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}