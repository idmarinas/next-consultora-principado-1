import { useState } from 'react'
import { MenuItem } from '@/types/wordpress'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


export default function MobileNavItem({ item, onClose }: { item: MenuItem; onClose: () => void }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasChildren = item.childItems && item.childItems.nodes.length > 0;

    return (
        <div className="border-b border-slate-100 last:border-0">
            <div className="flex items-center justify-between py-4">
                <Link
                    href={item.path}
                    onClick={onClose}
                    className="text-xl font-semibold text-slate-800"
                >
                    {item.label}
                </Link>

                {hasChildren && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={`p-2 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                    >
                        <ChevronDown size={24} className="text-slate-400" />
                    </button>
                )}
            </div>

            {/* Submenú animado */}
            <AnimatePresence>
                {isExpanded && hasChildren && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-slate-50 rounded-lg"
                    >
                        <div className="flex flex-col py-2 px-4 gap-4">
                            {item.childItems?.nodes.map((child) => (
                                <Link
                                    key={child.id}
                                    href={child.path}
                                    onClick={onClose}
                                    className="text-lg text-slate-600 active:text-blue-600"
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