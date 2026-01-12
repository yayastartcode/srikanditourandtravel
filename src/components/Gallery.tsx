import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = Array.from({ length: 23 }, (_, i) => `/images/gallery/srgl${i + 1}.jpeg`);

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + images.length) % images.length);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Galeri</h2>
          <p className="text-gray-600 text-lg">Dokumentasi perjalanan bersama Srikandi Tour</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="aspect-square cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setLightbox(i)}
            >
              <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full">
              <X size={32} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); navigate(-1); }} className="absolute left-4 text-white p-2 hover:bg-white/20 rounded-full">
              <ChevronLeft size={40} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); navigate(1); }} className="absolute right-4 text-white p-2 hover:bg-white/20 rounded-full">
              <ChevronRight size={40} />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={images[lightbox]}
              alt={`Gallery ${lightbox + 1}`}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
