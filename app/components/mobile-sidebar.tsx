"use client";
import Link from "next/link";
import { useState } from "react";

// Sidebar links
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

export default function MobileSidebar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const menuSections = [
    { title: "Updates", links: items },
    { title: "Colleges", links: colleges },
    { title: "About Us", links: aboutItems },
  ];

  return (
    <details className="lg:hidden relative z-50 group">
      <summary className="list-none w-8 h-6 cursor-pointer flex flex-col justify-between">
        <span className="block h-0.5 w-full bg-white rounded transition-all duration-300 group-open:rotate-45 group-open:translate-y-2.5" />
        <span className="block h-0.5 w-full bg-white rounded transition-all duration-300 group-open:opacity-0" />
        <span className="block h-0.5 w-full bg-white rounded transition-all duration-300 group-open:-rotate-45 group-open:-translate-y-2.5" />
      </summary>

      {/* Overlay */}
      <div className="fixed top-16 left-0 right-0 bottom-0 bg-black/40 opacity-0 pointer-events-none transition-opacity duration-300 group-open:opacity-100 group-open:pointer-events-auto" />

      {/* Sidebar */}
      <div className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-[#0F172A] p-6 shadow-xl transform -translate-x-full transition-transform duration-300 ease-in-out group-open:translate-x-0">
        <div className="h-full overflow-y-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold uppercase text-white">User&apos;s Name</h2>
          </div>
          <hr className="my-4 border-gray-600" />

          {/* Nav */}
          <nav className="flex flex-col gap-2 relative">
            {menuSections.map((section) => (
              <div key={section.title} className="relative">
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenDropdown(openDropdown === section.title ? null : section.title);
                  }}
                  className="text-sm font-semibold uppercase text-white flex justify-between items-center w-full cursor-pointer"
                >
                  <span>{section.title}</span>
                  <span className="ml-2">▼</span>
                </Link>

                {openDropdown === section.title && (
                  <ul className="absolute left-0 mt-1 w-56 bg-[#0F172A] border border-gray-700 rounded shadow-lg z-50">
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
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </details>
  );
}
