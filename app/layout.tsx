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
          {/* ===== TOP NAVBAR ===== */}
          <nav className="nav-bar relative z-50 flex items-center justify-between px-4 lg:px-8 py-4 bg-[#0F172A]">
            <div className="flex items-center gap-4">
              {/* ===== MOBILE MENU ===== */}
              <details className="lg:hidden relative z-50 group">
                <summary
                  className="list-none w-8 h-6 cursor-pointer flex flex-col justify-between"
                >
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
                             group-open:translate-x-0"
                >
                  <div className="h-full relative">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-semibold uppercase text-white">
                        User&apos;s Name
                      </h2>
                    </div>
                    <hr className="my-4 border-gray-600" />

                    {/* Mobile dropdowns now float */}
                    <nav className="side-tab flex flex-col gap-2 relative">
                      {[
                        { title: "Updates", links: items },
                        { title: "Colleges", links: colleges },
                        { title: "About Us", links: aboutItems },
                      ].map((section) => (
                        <details
                          key={section.title}
                          className="group relative dropdown"
                        >
                          <summary className="cursor-pointer list-none text-sm font-semibold uppercase text-white flex justify-between items-center">
                            <span>{section.title}</span>
                            <span className="transition-transform group-open:rotate-180">▲</span>
                          </summary>

                          {/* Floating ul */}
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

            <div className="flex gap-6 font-medium">
              <Cart />
            </div>
          </nav>

          {/* ===== DESKTOP SIDEBAR ===== */}
          <aside className="hidden lg:block fixed top-0 left-0 z-40 h-full w-64 bg-[#0F172A] border-r px-6 py-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold uppercase text-white">
                User&apos;s Name
              </h2>
              <hr className="my-4 border-gray-600" />
            </div>

            <nav className="side-tab flex flex-col gap-2">
              {[
                { title: "Updates", links: items },
                { title: "Colleges", links: colleges },
                { title: "About Us", links: aboutItems },
              ].map((section) => (
                <details
                  key={section.title}
                  className="group relative dropdown"
                >
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
          </aside>

          {/* ===== MAIN CONTENT ===== */}
          <main className="lg:ml-64 p-6 lg:p-8 overflow-auto">
            {children}
          </main>
        </div>

        {/* ===== SCRIPT: Single open dropdown + click outside + auto-flip desktop dropdowns ===== */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener("DOMContentLoaded", function () {
              const dropdowns = document.querySelectorAll("details.dropdown");

              dropdowns.forEach((dropdown) => {
                dropdown.addEventListener("toggle", () => {
                  if (dropdown.open) {
                    // Close others
                    dropdowns.forEach((d) => {
                      if (d !== dropdown) d.open = false;
                    });

                    // Flip left if desktop dropdown overflows
                    const ul = dropdown.querySelector("ul");
                    if (ul && window.innerWidth >= 1024) {
                      const rect = ul.getBoundingClientRect();
                      if (rect.right > window.innerWidth) {
                        ul.classList.add("left-auto", "right-full");
                      } else {
                        ul.classList.remove("left-auto", "right-full");
                      }
                    }
                  }
                });
              });

              // Close all when clicking outside
              document.addEventListener("click", function(event) {
                dropdowns.forEach((dropdown) => {
                  if (!dropdown.contains(event.target)) {
                    dropdown.open = false;
                  }
                });
              });
            });
          `,
          }}
        />
      </body>
    </html>
  );
}
