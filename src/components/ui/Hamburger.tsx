"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ProductCollapsible } from "@/components/ui/ProductDropdown";
import Divider from "@/components/ui/Divider";
import { DOCS_LINK, GET_STARTED_LINK } from "@/lib/constants";
import clsx from "clsx";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // ✅ Detect clicks outside the hamburger dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={menuRef} className="relative inline-block md:hidden">
      {/* Animated Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
        className="relative w-10 h-10 flex items-center justify-center bg-white border border-gridline rounded-md"
      >
        <motion.div
          initial={false}
          animate={open ? "open" : "closed"}
          className="relative w-6 h-4 flex flex-col items-center justify-between"
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 4.5 },
            }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={clsx(
              "block w-6 h-[2px] transition-colors duration-300 ease-in-out rounded-full",
              open ? "bg-stone-300" : "bg-accent"
            )}
          />
          <motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={clsx(
              "block w-6 h-[2px] transition-colors duration-300 ease-in-out rounded-full",
              open ? "bg-stone-300" : "bg-accent"
            )}
          />
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -5.5 },
            }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={clsx(
              "block w-6 h-[2px] transition-colors duration-300 ease-in-out rounded-full",
              open ? "bg-stone-300" : "bg-accent"
            )}
          />
        </motion.div>
      </button>

      {/* Animated dropdown-style card */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute right-0 mt-[14px] w-72 bg-white border border-gridline border-t-0 shadow-[0_42px_93px_rgba(0,0,0,0.04),0_169px_169px_rgba(0,0,0,0.03)] z-50 overflow-hidden"
          >
            <div className="border-b border-gridline px-3 py-2 text-xs uppercase font-geistMono opacity-50">
              Menu
            </div>

            <ProductCollapsible />

            {/* Static links */}
            <div className="flex flex-col">
              <Link
                href={DOCS_LINK}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-[14px] hover:bg-black/5 transition"
              >
                Docs
              </Link>
              <Divider />
              <Link
                href="/blog"
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-[14px] hover:bg-black/5 transition"
              >
                Blogs
              </Link>
              <Divider />
              {/*  <Link
                href={GET_STARTED_LINK}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-accent text-[14px] hover:bg-black/5 transition"
              >
                Get Started
              </Link> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
