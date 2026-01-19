import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactoPage() {
    return (
        <main className="min-h-screen bg-slate-50 py-20">
            <div className="container mx-auto px-6">

                {/* 1. Cabecera de la página */}
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                        Contacta con <span className="text-blue-600">nosotros</span>
                    </h1>
                    <p className="text-lg text-slate-600">
                        Estamos aquí para asesorarte. Cuéntanos tu proyecto o consulta y nos pondremos en contacto contigo a la mayor brevedad.
                    </p>
                </div>

                {/* 2. Contenedor del Formulario */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-4xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100 flex flex-col md:flex-row">

                        {/* Columna de Información (Opcional pero recomendada) */}
                        <div className="bg-slate-900 p-10 md:w-1/3 text-white flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold mb-8">Información de contacto</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="text-blue-400 shrink-0" size={20} />
                                        <span className="text-sm text-slate-300">Uría 12, Oviedo, Asturias</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Phone className="text-blue-400 shrink-0" size={20} />
                                        <span className="text-sm text-slate-300">+34 985 000 000</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Mail className="text-blue-400 shrink-0" size={20} />
                                        <span className="text-sm text-slate-300">info@principado.com</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-4">Horario</p>
                                <p className="text-sm text-slate-300">Lunes - Viernes<br />09:00 - 18:00</p>
                            </div>
                        </div>

                        {/* Columna del Formulario con Padding */}
                        <div className="p-10 md:w-2/3">
                            <ContactForm />
                        </div>

                    </div>
                </div>

            </div>
        </main>
    );
}