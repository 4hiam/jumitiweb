import { motion } from "motion/react";
import { PROFILE_DATA } from "../constants";
import { Card } from "./Card";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section className="py-24 px-4 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="Áreas de Experiencia" 
          subtitle="Compromiso con la inclusión en diversos contextos"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROFILE_DATA.experience.map((exp, index) => (
            <Card key={`exp-${index}`} title={exp.title} delay={index * 0.1}>
              {exp.description}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="Habilidades Clave" 
          centered
        />
        
        <div className="flex flex-wrap justify-center gap-4">
          {PROFILE_DATA.skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="px-8 py-4 bg-white rounded-full border border-sand text-olive font-medium font-sans shadow-sm hover:bg-sand hover:text-white transition-colors cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Specializations() {
  return (
    <section className="py-24 px-4 bg-sage/5">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="Formación Continua" 
          subtitle="Especializaciones y herramientas técnicas"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROFILE_DATA.specializations.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm overflow-hidden relative group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-sand/20 rounded-bl-full group-hover:w-32 group-hover:h-32 transition-all duration-500" />
              
              <h3 className="text-xl font-bold text-olive mb-6 uppercase tracking-wider font-sans border-b border-sand pb-2 inline-block">
                {spec.category}
              </h3>
              
              <ul className="grid grid-cols-1 gap-3">
                {spec.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 font-sans">
                    <div className="w-1.5 h-1.5 bg-sage rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
