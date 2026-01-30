import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Cart from "./components/cart";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vibe Website",
  description: "Valuable Insights for Better Events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const items = [
  { label: "Events", href: "/events" },
  { label: "News", href: "/news" },
  { label: "Calendar", href: "/calendar" },
];


const colleges = [
  { label: "Arts & Sciences", href: "/colleges/arts-sciences" },
  { label: "Business", href: "/colleges/business" },
  { label: "Computer", href: "/colleges/computer" },
  { label: "Criminology", href: "/colleges/criminology" },
  { label: "Education", href: "/colleges/education" },
  { label: "Engineering", href: "/colleges/engineering" },
  { label: "Health Sciences", href: "/colleges/health-sciences" },
  { label: "Hospitality Management", href: "/colleges/hospitality-management" },
];

const aboutItems = [
  { label: "Contact", href: "/about-us/contact" },
];



   return (
    <html lang="en">
      
      <body
         suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen overflow-hidden`}
      >
        {/* SIDEBAR TOGGLE (CSS ONLY) */}
        <input
          type="checkbox"
          id="sidebar-toggle"
          className="peer hidden"
        />

        {/* TOP NAVBAR */}
        <nav className="flex items-center justify-between px-4 md:px-8 py-4">
          <div className="flex items-center gap-3">
            {/* MOBILE HAMBURGER */}
            <label
              htmlFor="sidebar-toggle"
              className="md:hidden cursor-pointer text-white text-2xl"
            >
              ☰
            </label>

            <Link href="/">
              <img
                src="/vibe-logo-white.png"
                alt="Vibe Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <div className="nav-tab flex gap-6 font-medium">
            <Cart />
          </div>
        </nav>

 {/* MAIN LAYOUT */}
        <div className="relative flex h-[calc(100vh-64px)]">

          {/* MOBILE OVERLAY */}
          <label
            htmlFor="sidebar-toggle"
            className="fixed inset-0 bg-black/50 z-40 hidden peer-checked:block md:hidden"
          />

          {/* SIDEBAR */}
          <aside
            className="
              fixed md:static top-0 left-0 z-50
              h-full w-64
              border-r px-6 py-6 bg-[#0F172A]
              transform transition-transform duration-300
              -translate-x-full peer-checked:translate-x-0
              md:translate-x-0
            "
          >
            {/* MOBILE CLOSE */}
            <label
              htmlFor="sidebar-toggle"
              className="md:hidden mb-4 block cursor-pointer text-white text-xl"
            >
              ✕
            </label>

            <div className="profile">
              <h2 className="mb-4 text-lg font-semibold uppercase text-white">
                User&apos;s Name
              </h2>
              <hr className="my-4 border-gray-200" />
            </div>

            {/* UPDATES */}
            <details className="group relative mb-4">
              <summary className="cursor-pointer list-none text-sm font-semibold uppercase text-white flex justify-between">
                <span>Updates</span>
                <span className="group-open:rotate-180">▼</span>
              </summary>

              <ul className="mt-2 space-y-1">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <label htmlFor="sidebar-toggle">
                      <Link
                        href={href}
                        className="block px-3 py-2 text-sm rounded hover:bg-gray-700"
                      >
                        {label}
                      </Link>
                    </label>
                  </li>
                ))}
              </ul>
            </details>

            {/* COLLEGES */}
            <details className="group relative mb-4">
              <summary className="cursor-pointer list-none text-sm font-semibold uppercase text-white flex justify-between">
                <span>Colleges</span>
                <span className="group-open:rotate-180">▼</span>
              </summary>

              <ul className="mt-2 space-y-1">
                {colleges.map(({ label, href }) => (
                  <li key={label}>
                    <label htmlFor="sidebar-toggle">
                      <Link
                        href={href}
                        className="block px-3 py-2 text-sm rounded hover:bg-gray-700"
                      >
                        {label}
                      </Link>
                    </label>
                  </li>
                ))}
              </ul>
            </details>

            {/* ABOUT US */}
            <details className="group relative">
              <summary className="cursor-pointer list-none text-sm font-semibold uppercase text-white flex justify-between">
                <span>About Us</span>
                <span className="group-open:rotate-180">▼</span>
              </summary>

              <ul className="mt-2 space-y-1">
                {aboutItems.map(({ label, href }) => (
                  <li key={label}>
                    <label htmlFor="sidebar-toggle">
                      <Link
                        href={href}
                        className="block px-3 py-2 text-sm rounded hover:bg-gray-700"
                      >
                        {label}
                      </Link>
                    </label>
                  </li>
                ))}
              </ul>
            </details>
          </aside>

          {/* PAGE CONTENT */}
          <main className="flex-1 p-6 md:p-8 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}