"use client";
import { useState } from 'react';
import { MenuItem } from '@/types/wordpress';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileNavItem from '@/components/layout/MobileNavItem'

export default function MobileMenu({ menuItems }: { menuItems: MenuItem[] }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden">
            {/* Botón Hamburguesa */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-60 p-2 text-blue-900 focus:outline-none"
                aria-label="Menu"
            >
                {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

            {/* Overlay del Menú */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-50 bg-white px-6 pt-24 pb-10 overflow-y-auto"
                    >
                        <nav className="flex flex-col gap-2">
                            {menuItems.map((item) => (
                                <MobileNavItem
                                    key={item.id}
                                    item={item}
                                    onClose={() => setIsOpen(false)}
                                />
                            ))}

                            {/* Botón de acción destacado en móvil */}
                            <Link
                                href="/contacto"
                                onClick={() => setIsOpen(false)}
                                className="mt-6 w-full rounded-xl bg-blue-600 py-4 text-center font-bold text-white shadow-lg"
                            >
                                Solicitar Información
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}