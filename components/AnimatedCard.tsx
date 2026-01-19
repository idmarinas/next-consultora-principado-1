"use client";

import { motion } from "framer-motion";

interface AnimatedCardProps {
    children: React.ReactNode;
    index: number; // El índice nos servirá para el retraso (delay)
}

export default function AnimatedCard({ children, index }: AnimatedCardProps) {
    return (
        <motion.div
            // Estado inicial: invisible y 20px más abajo
            initial={{ opacity: 0, y: 20 }}
            // Estado final: visible y en su posición original
            whileInView={{ opacity: 1, y: 0 }}
            // Solo se anima la primera vez que entra en el viewport
            viewport={{ once: true }}
            // Transición: el 'delay' se multiplica por el índice para el efecto "escalera"
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98] // Curva de suavizado premium
            }}
        >
            {children}
        </motion.div>
    );
}