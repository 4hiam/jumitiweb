import { motion } from "motion/react";
import { PROFILE_DATA } from "../constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-4 py-12 md:py-20 overflow-hidden bg-warm-bg">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-full md:w-1/3 h-64 md:h-full bg-sand/10 rounded-b-[100px] md:rounded-l-[200px] -z-10" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sage/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="order-2 lg:order-1"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-sand text-olive text-xs md:text-sm font-semibold mb-6 uppercase tracking-widest font-sans shadow-sm"
          >
            Perfil Profesional
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-olive leading-[1.1] mb-6">
            {PROFILE_DATA.name}
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-sage serif italic mb-8 max-w-xl leading-relaxed">
            {PROFILE_DATA.title}
          </p>
          
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[1px] w-12 bg-olive opacity-30" />
            <p className="text-base md:text-lg text-gray-500 font-sans tracking-wide">
              {PROFILE_DATA.specialization}
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white/90 backdrop-blur-md p-6 md:p-10 rounded-[32px] border border-white shadow-2xl shadow-olive/5 max-w-lg relative"
          >
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-sand/10 rounded-bl-[32px] -z-10" />
            
            <h2 className="text-2xl font-bold text-olive mb-4 serif italic">¿Quién soy?</h2>
            <p className="text-gray-600 leading-relaxed font-sans text-base md:text-lg">
              {PROFILE_DATA.aboutMe}
            </p>
          </motion.div>
        </motion.div>

        {/* Board / Photo Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
        >
          {/* Main Photo "Board" Card */}
          <div className="relative group max-w-sm md:max-w-md w-full">
            {/* Shadow decoration */}
            <div className="absolute inset-0 bg-olive/5 rounded-[48px] blur-2xl translate-y-10 scale-95" />
            
            <div className="bg-white p-4 md:p-6 rounded-[40px] shadow-2xl relative z-10 border border-gray-100 transform transition-transform group-hover:-rotate-1 duration-500">
              <div className="aspect-[4/5] rounded-[28px] overflow-hidden relative mb-6">
                <img
                  src={`${import.meta.env.BASE_URL}judith_profile.png`}
                  alt="Judith Tito"
                  className="w-full h-full object-cover object-top"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              <div className="text-center pb-2">
                <p className="font-serif italic text-2xl text-olive">Judith Tito</p>
                <div className="flex justify-center gap-1 mt-2">
                  <div className="w-1 h-1 rounded-full bg-sand" />
                  <div className="w-1 h-1 rounded-full bg-sand" />
                  <div className="w-1 h-1 rounded-full bg-sand" />
                </div>
              </div>
            </div>
            
            {/* Floating elements to give "Board" feel */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-20 h-20 bg-sand rounded-full flex items-center justify-center shadow-lg z-20"
            >
              <span className="text-white font-bold text-xs text-center leading-tight">INCLUSIÓN<br/>REAL</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-14 h-14 bg-sage rounded-full shadow-lg z-20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
