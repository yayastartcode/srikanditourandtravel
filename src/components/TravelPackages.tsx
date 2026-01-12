import { motion } from "motion/react";
import { getWhatsAppLink } from "@/config/contact";

const packages = [
  {
    id: 1,
    name: "Tour Batu - Malang",
    image:
      "https://youtzmedia.id/uploads/artikel/origins/f9c5919294dd8126741c10070df10e10.jpg",
    description:
      "Jelajahi keindahan Kota Batu dan Malang dengan wisata alam, kebun apel, dan kuliner khas yang menggugah selera.",
  },
  {
    id: 2,
    name: "Tour Jogja",
    image:
      "https://visitingjogja.jogjaprov.go.id/en/wp-content/uploads/2020/11/tugu-jogja.jpg",
    description:
      "Nikmati pesona budaya Yogyakarta dengan Candi Borobudur, Keraton, Malioboro, dan kuliner gudeg yang legendaris.",
  },
  {
    id: 3,
    name: "Tour Bromo",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7d/Mount_Bromo_at_sunrise%2C_showing_its_volcanoes_and_Mount_Semeru_%28background%29.jpg",
    description:
      "Saksikan keajaiban sunrise Gunung Bromo dengan lautan pasir yang luas dan pemandangan kawah yang spektakuler.",
  },
  {
    id: 4,
    name: "Tour Bali",
    image:
      "https://res.klook.com/image/upload/fl_lossy.progressive,q_60/Mobile/City/olvu6sgb3dcdjwlcpts3.jpg",
    description:
      "Rasakan keindahan Pulau Dewata dengan pantai eksotis, pura megah, sawah terasering, dan budaya yang memukau.",
  },
  {
    id: 5,
    name: "Tour Lombok",
    image:
      "https://www.indonesia.travel/contentassets/3f4346581ea04894902cd0ec8fa25057/lombok_cina_2.jpg",
    description:
      "Jelajahi keindahan Lombok dengan pantai Gili yang menawan, air terjun Sendang Gile, dan pesona Gunung Rinjani.",
  },
  {
    id: 6,
    name: "Tour Labuan Bajo",
    image:
      "https://res.klook.com/image/upload/fl_lossy.progressive,q_60/Mobile/City/rv76yqukp2hey0fckh99.jpg",
    description:
      "Temukan surga tersembunyi Labuan Bajo dengan Komodo, Pink Beach, dan keindahan bawah laut yang luar biasa.",
  },
];

export default function TravelPackages() {
  return (
    <section id="tours" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Paket Travel Populer
          </h2>
          <p className="text-gray-600 text-lg">
            Jelajahi destinasi travel impian Anda bersama kami.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {pkg.description}
                </p>
                <a
                  href={getWhatsAppLink(
                    `Halo, saya tertarik dengan Paket Travel ${pkg.name}. Mohon informasi detail dan harganya.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold inline-block text-center"
                >
                  Pesan Paket Ini
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Kami juga melayani:
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
              Paket wisata semua tujuan
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
              Paket wisata 3 Negara konsorsium / privat
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
              Voucher Hotel dan Villa
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
              Petik apel, strawberry, jeruk dan jambu
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
              Adventure
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
              MICE
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
              Paket kunjungan edukasi
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
