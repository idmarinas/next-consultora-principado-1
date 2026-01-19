"use client";

import { useState } from "react";
import { fetchAPI } from "@/lib/wordpress";
import { MUTATION_CREATE_LEAD } from "@/lib/queries";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);

        // IMPORTANTE: Los nombres de las propiedades deben coincidir EXACTAMENTE 
        // con los 'inputFields' que definiste en el snippet de WPCode Lite.
        const variables = {
            input: {
                nombre: formData.get("fullname"),
                email: formData.get("email"),
                telefono: formData.get("phone"),
                empresa: formData.get("company"), // Capturamos el nuevo campo
                mensaje: formData.get("message"),
            }
        };

        try {
            const data = await fetchAPI<{ enviarFormularioContacto: { success: boolean } }>(MUTATION_CREATE_LEAD, { variables });

            if (data?.enviarFormularioContacto?.success) {
                setStatus("success");
                (e.target as HTMLFormElement).reset(); // Limpiar formulario
            } else {
                throw new Error("El servidor no pudo procesar la solicitud.");
            }
        } catch (err) {
            console.error("Error al enviar el formulario:", err);
            setStatus("error");
            setErrorMessage("Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.");
        }
    };

    if (status === "success") {
        return (
            <div className="bg-emerald-50 border border-emerald-100 p-10 rounded-3xl text-center animate-in fade-in zoom-in duration-500">
                <CheckCircle className="mx-auto text-emerald-500 mb-4" size={50} />
                <h3 className="text-2xl font-black text-slate-900 mb-2">¡Mensaje Recibido!</h3>
                <p className="text-slate-600">Gracias por confiar en Consultora Principado. Un asesor se pondrá en contacto contigo en las próximas 24 horas.</p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-sm font-bold text-emerald-600 uppercase tracking-widest hover:text-emerald-700"
                >
                    Enviar otra consulta
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nombre */}
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase text-slate-400 ml-1">Nombre Completo</label>
                    <input
                        required name="fullname" type="text" placeholder="Ej: Javier Rodríguez"
                        className="px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all outline-none"
                    />
                </div>
                {/* Email */}
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase text-slate-400 ml-1">Email Corporativo</label>
                    <input
                        required name="email" type="email" placeholder="javier@empresa.es"
                        className="px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all outline-none"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Teléfono */}
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase text-slate-400 ml-1">Teléfono</label>
                    <input
                        required name="phone" type="tel" placeholder="+34 600 000 000"
                        className="px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all outline-none"
                    />
                </div>
                {/* Asunto (Visual) */}
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase text-slate-400 ml-1">Motivo de consulta</label>
                    <select className="px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all outline-none appearance-none">
                        <option>Asesoría Fiscal</option>
                        <option>Consultoría Estratégica</option>
                        <option>Otros servicios</option>
                    </select>
                </div>
            </div>
            {/* Empresa */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase text-slate-400 ml-1">Empresa / Organización</label>
                <input
                    required
                    name="company"
                    type="text"
                    placeholder="Nombre de su empresa"
                    className="px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all outline-none"
                />
            </div>
            {/* Mensaje */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase text-slate-400 ml-1">Mensaje</label>
                <textarea
                    required name="message" rows={5} placeholder="Describa brevemente su necesidad..."
                    className="px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all outline-none resize-none"
                />
            </div>

            {/* Mensaje de Error */}
            {status === "error" && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl text-sm">
                    <AlertCircle size={18} />
                    <span>{errorMessage}</span>
                </div>
            )}

            {/* Botón de envío */}
            <button
                disabled={status === "loading"}
                className="w-full md:w-auto px-12 py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-slate-900/10"
            >
                {status === "loading" ? (
                    <>
                        <Loader2 className="animate-spin" size={20} />
                        <span>Procesando...</span>
                    </>
                ) : (
                    <>
                        <span>Enviar solicitud</span>
                        <Send size={18} />
                    </>
                )}
            </button>
        </form>
    );
}