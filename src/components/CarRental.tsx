import { motion } from "motion/react";
import { getWhatsAppLink } from "@/config/contact";

const cars = [
  {
    id: 1,
    name: "Toyota Hiace Premio",
    price: "Rp Call",
    image: "/images/srhia.jpg",
    description: "include driver + BBM",
  },
  {
    id: 2,
    name: "Isuzu ELF Long",
    price: "Rp Call",
    image: "/images/srelf.jpg",
    description: "include driver + BBM",
  },
  {
    id: 3,
    name: "Toyota Hiace Commuter",
    price: "Rp Call",
    image: "/images/srhie.jpg",
    description: "include driver + BBM",
  },
  {
    id: 4,
    name: "Toyota Innova",
    price: "Rp Call",
    image: "/images/srino.jpg",
    description: "include driver + BBM",
  },
  {
    id: 5,
    name: "Avanza",
    price: "Rp Call",
    image: "/images/sravz.jpg",
    description: "include driver + BBM",
  },
];

export default function CarRental() {
  return (
    <section id="cars" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sewa Mobil Srikandi Tour and Travel
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-linear-to-br from-red-500 to-red-700 rounded-3xl transform rotate-3 opacity-90"></div>
                <div className="relative bg-white rounded-3xl p-4 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {car.name}
                </h3>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Harga Mulai:</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {car.price}
                  </p>
                </div>
                <p className="text-gray-600 text-sm">{car.description}</p>
                <a
                  href={getWhatsAppLink(
                    `Halo, saya ingin booking ${car.name} dengan harga ${car.price}. Mohon informasi lebih lanjut.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-semibold inline-block text-center"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
