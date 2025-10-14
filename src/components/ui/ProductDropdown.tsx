"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";
import GuardrailsIcon from "@/assets/svg/gaurdrails_icon";
import VaultIcon from "@/assets/svg/vault_icon";
import PersonalizationIcon from "@/assets/svg/personalization_icon";
import { DOCS_LINK } from "@/lib/constants";

export const productItems = [
  {
    title: "Personalization",
    subtitle: "Product Description",
    link: DOCS_LINK,
    icon: <PersonalizationIcon />,
  },
  {
    title: "Data Vault",
    subtitle: "Product Description",
    link: DOCS_LINK,
    icon: <VaultIcon />,
  },
  {
    title: "Guardrails",
    subtitle: "Coming Soon",
    link: DOCS_LINK,
    icon: <GuardrailsIcon />,
  },
];

export function ProductDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // ✅ Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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
    <div ref={dropdownRef} className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className={clsx("flex items-center gap-1 relative cursor-pointer")}
      >
        <div
          className={clsx(
            "absolute -inset-1 z-0 bg-[#f2f2f2] rounded-md transition-opacity duration-200 ease-in-out",
            open ? "opacity-100" : "opacity-0"
          )}
        ></div>

        <span className="relative hover:text-accent transiiition-colors duration-300 ease-in-out">
          Products
        </span>

        <ChevronDown
          className={`relative w-4 h-4 transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute mt-[24px] w-72 bg-white border border-gridline shadow-[0_42px_93px_rgba(0,0,0,0.04),0_169px_169px_rgba(0,0,0,0.03)] z-50"
          >
            <div className="border-b border-gridline px-3 py-2 text-xs uppercase font-geistMono opacity-50">
              Category
            </div>
            {productItems.map((item, i) => (
              <Link
                href={item.link}
                key={i}
                onClick={() => setOpen(false)} // ✅ also close when clicking inside
                className="flex gap-3 items-start border-b border-gridline px-3 py-3 hover:bg-black/1 transition"
              >
                <div className="relative size-11 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-md bg-black/5" />
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-base">{item.title}</span>
                  <span className="text-[14px] text-foreground/60">
                    {item.subtitle}
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ProductCollapsible() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center py-3 px-3 border-b border-gridline"
      >
        <span className="text-[14px]">Products</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden flex flex-col bg-white w-full "
          >
            {productItems.map((item, i) => (
              <div
                key={i}
                className="w-full flex items-center gap-3 py-3 border-b border-gridline hover:bg-black/5 transition px-4"
              >
                <div className="size-9 flex items-center justify-center bg-black/5 rounded-md">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-geist text-black">
                    {item.title}
                  </span>
                  <span className="text-xs text-black/60">{item.subtitle}</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
