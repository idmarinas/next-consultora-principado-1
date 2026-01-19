import { MapPin, Car, Train, Navigation } from 'lucide-react';

export default function OfficeMap() {
    // Coordenadas de ejemplo (Calle Uría, Oviedo)
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.4410118671!2d-5.8491834!3d43.3626781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd368ce4916a0487%3A0x673c6838a1631551!2sCalle%20Ur%C3%ADa%2C%20Oviedo%2C%20Asturias!5e0!3m2!1ses!2ses!4v1705150000000!5m2!1ses!2ses";

    return (
        <div className="w-full bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
            <div className="flex flex-col lg:flex-row">

                {/* Información de acceso */}
                <div className="p-8 lg:w-1/3 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-blue-400">
                            <MapPin size={20} />
                            <span className="font-bold uppercase tracking-wider text-xs">Ubicación Central</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Nuestra Oficina</h3>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <Car className="text-slate-500 shrink-0" size={20} />
                                <div>
                                    <p className="text-sm font-semibold text-slate-200">En coche</p>
                                    <p className="text-xs text-slate-400">Parking público "Uría" a 50 metros de la entrada.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Train className="text-slate-500 shrink-0" size={20} />
                                <div>
                                    <p className="text-sm font-semibold text-slate-200">Transporte Público</p>
                                    <p className="text-xs text-slate-400">A 2 minutos de la Estación del Norte (Renfe) y paradas de TUA.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a
                        href="https://www.google.com/maps?ll=43.364226,-5.850694&z=16&t=m&hl=es&gl=ES&mapclient=embed&q=C.+Ur%C3%ADa+Oviedo+Asturias" // Tu enlace directo de Google Maps
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 flex items-center justify-center gap-2 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all group"
                    >
                        <Navigation size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        Cómo llegar
                    </a>
                </div>

                {/* El Mapa */}
                <div className="lg:w-2/3 h-[300px] lg:h-[400px] relative grayscale-[0.2] contrast-[1.1] brightness-[0.9]">
                    <iframe
                        src={mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="opacity-80 hover:opacity-100 transition-opacity duration-500"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}