import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="dark" lang="en">
      <body className={inter.className}>
        <div className="navbar bg-neutral">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl text-white">
              Where in the World?
            </a>
          </div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              {/* <i className="fas fa-moon"></i> */}
              <i className="fas fa-sun"></i>
              <span className="">Light Color</span>
              <span className="">Dark Color</span>
            </button>
          </div>
        </div>

        {children}

        <footer className="footer p-10 bg-neutral text-neutral-content">
          <nav>
            <header className="footer-title">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </body>
    </html>
  );
}
