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

const aboutItems = [{ label: "Contact", href: "/about-us/contact" }];

// Simulate user name (replace with actual user data in production)
const userName = "Juan Dela Cruz";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
      >
        <div className="relative h-full">
          {/* ===== FIXED TOP NAVBAR ===== */}
          <nav className="nav-bar fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 lg:px-8 py-4 bg-[#263C41]">
            <div className="flex items-center gap-4">
              {/* MOBILE MENU */}
              <details className="lg:hidden relative z-50 group">
                <summary className="list-none w-8 h-6 cursor-pointer flex flex-col justify-between">
                  <span className="block h-0.5 w-full bg-white rounded transition-all duration-300 group-open:rotate-45 group-open:translate-y-2.5" />
                  <span className="block h-0.5 w-full bg-white rounded transition-all duration-300 group-open:opacity-0" />
                  <span className="block h-0.5 w-full bg-white rounded transition-all duration-300 group-open:-rotate-45 group-open:-translate-y-2.5" />
                </summary>

                {/* Overlay */}
                <div
                  className="fixed top-16 left-0 right-0 bottom-0 bg-black/40
                             opacity-0 pointer-events-none
                             transition-opacity duration-300
                             group-open:opacity-100 group-open:pointer-events-auto"
                />

                {/* Mobile Sidebar */}
                <div
                  className="mob-nav fixed top-16 left-0 w-64
                             h-[calc(100vh-4rem)]
                             bg-[#0F172A] p-6 shadow-xl
                             transform -translate-x-full
                             transition-transform duration-300 ease-in-out
                             group-open:translate-x-0 flex flex-col justify-between"
                >
                  <div>
                    {/* ===== USER NAME HEADER ===== */}
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-white">{userName}</h2>
                      <hr className="border-gray-600 mt-2" />
                    </div>

                    {/* DROPDOWN TABS */}
                    <nav className="side-tab flex flex-col gap-2 relative">
                      {[
                        { title: "Updates", links: items },
                        { title: "Colleges", links: colleges },
                        { title: "About Us", links: aboutItems },
                      ].map((section) => (
                        <details key={section.title} className="group relative dropdown">
                          <summary className="cursor-pointer list-none text-sm font-semibold uppercase text-white flex justify-between items-center">
                            <span>{section.title}</span>
                            <span className="transition-transform group-open:rotate-180">▲</span>
                          </summary>

                          <ul className="absolute top-full left-0 mt-1 w-64 bg-[#0F172A] border border-gray-700 rounded shadow-lg z-50 max-h-[calc(100vh-4rem)] overflow-auto">
                            {section.links.map(({ label, href }) => (
                              <li key={label}>
                                <Link
                                  href={href}
                                  className="block px-3 py-2 text-sm rounded hover:bg-gray-700 text-white whitespace-nowrap"
                                >
                                  {label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </details>
                      ))}
                    </nav>
                  </div>

                  {/* SEARCH + PROFILE + LOGOUT at BOTTOM */}
                  <div className="mt-4">
                    <form action="/search" method="GET" className="flex items-center bg-[#0d191c] rounded px-3 py-2 mb-4 w-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                      </svg>
                      <input
                        type="text"
                        name="q"
                        placeholder="Search..."
                        className="ml-2 bg-transparent focus:outline-none text-white placeholder-gray-400 w-full"
                        suppressHydrationWarning
                      />
                    </form>

                    <Link
                      href="/profile"
                      className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700 text-white font-semibold"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9 9 0 1118.88 6.196 9 9 0 015.12 17.804z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12v.01M12 16h.01M16 12h.01M8 12h.01M12 8h.01" />
                      </svg>
                      <span>Profile</span>
                    </Link>

                    <Link
                      href="/logout"
                      className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700 text-white font-semibold mt-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10V5" />
                      </svg>
                      Logout
                    </Link>
                  </div>
                </div>
              </details>

              {/* Logo */}
              <Link href="/" className="ml-4 lg:ml-0">
                <img
                  src="/vibe-logo-white.png"
                  alt="Vibe Logo"
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* CART ICON */}
            <div className="flex gap-6 font-medium">
              <Cart />
            </div>
          </nav>

          {/* ===== DESKTOP SIDEBAR ===== */}
          <aside className="hidden lg:flex fixed top-0 left-0 z-40 h-full w-64 flex-col bg-[#0F172A] border-r px-6 pt-20 pb-6 justify-between">
            <div>
              {/* ===== USER NAME HEADER ===== */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white">{userName}</h2>
                <hr className="border-gray-600 mt-2" />
              </div>

              {/* DROPDOWN TABS */}
              <nav className="side-tab flex flex-col gap-2">
                {[
                  { title: "Updates", links: items },
                  { title: "Colleges", links: colleges },
                  { title: "About Us", links: aboutItems },
                ].map((section) => (
                  <details key={section.title} className="group relative dropdown">
                    <summary className="cursor-pointer select-none flex justify-between items-center text-sm font-semibold uppercase text-white">
                      <span>{section.title}</span>
                      <span className="transition-transform group-open:rotate-180">▲</span>
                    </summary>

                    <ul className="absolute top-0 mt-0 w-48 bg-[#0F172A] border border-gray-700 rounded shadow-lg z-50 left-full min-w-max max-w-[calc(100vw-4rem)] transition-all duration-200">
                      {section.links.map(({ label, href }) => (
                        <li key={label}>
                          <Link
                            href={href}
                            className="block px-3 py-2 text-sm rounded hover:bg-gray-700 text-white whitespace-nowrap"
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </nav>
            </div>

            {/* SEARCH + PROFILE + LOGOUT at BOTTOM */}
            <div>
              <form action="/search" method="GET" className="flex items-center bg-[#0d191c] rounded px-3 py-2 mb-4 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                </svg>
                <input
                  type="text"
                  name="q"
                  placeholder="Search..."
                  className="ml-2 bg-transparent focus:outline-none text-white placeholder-gray-400 w-full"
                  suppressHydrationWarning
                />
              </form>

              {/* PROFILE TAB */}
              <Link
                href="/profile"
                className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700 text-white font-semibold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9 9 0 1118.88 6.196 9 9 0 015.12 17.804z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12v.01M12 16h.01M16 12h.01M8 12h.01M12 8h.01" />
                </svg>
                <span>Profile</span>
              </Link>

              <Link
                href="/logout"
                className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700 text-white font-semibold mt-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10V5" />
                </svg>
                Logout
              </Link>
            </div>
          </aside>

          {/* ===== MAIN CONTENT ===== */}
          <main className="lg:ml-64 pt-20 p-6 lg:p-8 overflow-auto">

            {/* PAGE CONTENT */}
            {children}
          </main>
        </div>

        {/* ===== DROPDOWN AUTO-CLOSE SCRIPT ===== */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('click', function(event) {
                const dropdowns = document.querySelectorAll('details.dropdown');
                dropdowns.forEach(dropdown => {
                  const summary = dropdown.querySelector('summary');
                  if (!dropdown.contains(event.target)) {
                    dropdown.open = false;
                  } else {
                    if (event.target === summary) {
                      dropdowns.forEach(d => {
                        if (d !== dropdown) d.open = false;
                      });
                    }
                  }
                });
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
