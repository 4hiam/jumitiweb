import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";
import { PROFILE_DATA } from "../constants";

export function ContactBar() {
  return (
    <footer className="bg-olive text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl serif italic">Contacto</h2>
          <p className="text-gray-300 font-sans max-w-xs text-lg">
            {PROFILE_DATA.contact.motto}
          </p>
        </div>
        
        <div className="space-y-4 font-sans">
          <div className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <Phone size={20} />
            </div>
            <p className="text-lg">{PROFILE_DATA.contact.phone}</p>
          </div>
          
          <div className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <Mail size={20} />
            </div>
            <p className="text-lg">{PROFILE_DATA.contact.email}</p>
          </div>
          
          <div className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <MapPin size={20} />
            </div>
            <p className="text-lg">{PROFILE_DATA.contact.location}</p>
          </div>
        </div>

        <div className="flex flex-col justify-end items-start md:items-end">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="border border-white/30 rounded-full p-8 inline-block text-center"
          >
            <p className="text-2xl italic serif">J.T.</p>
          </motion.div>
          <p className="mt-8 text-xs text-white/50 uppercase tracking-widest font-sans">
            © 2026 Judith Tito - Portfolio Profesional
          </p>
        </div>
      </div>
    </footer>
  );
}
