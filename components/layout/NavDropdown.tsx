"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { MenuItem } from "@/types/wordpress";

export default function NavDropdown({ item }: { item: MenuItem }) {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = item.childItems && item.childItems.nodes.length > 0;

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div className="flex items-center gap-1 cursor-pointer py-2">
                <Link
                    href={item.path}
                    className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                >
                    {item.label}
                </Link>
                {hasChildren && (
                    <ChevronDown
                        size={14}
                        className={`text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                )}
            </div>

            <AnimatePresence>
                {isOpen && hasChildren && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full min-w-52 w-auto rounded-xl border border-slate-100 bg-white p-2 shadow-xl"
                    >
                        <div className="flex flex-col gap-1">
                            {item.childItems?.nodes.map((child) => (
                                <Link
                                    key={child.id}
                                    href={child.path}
                                    className="rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-colors whitespace-nowrap"
                                >
                                    {child.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}