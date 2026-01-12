import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Destinasi mana saja yang dilayani Srikandi Tour?",
    answer:
      "Kami melayani berbagai destinasi wisata populer termasuk Batu-Malang, Jogja, Bromo, Bali, Lombok, Labuan Bajo, serta paket wisata 3 Negara konsorsium/privat dan semua tujuan lainnya sesuai permintaan.",
  },
  {
    id: 2,
    question: "Apakah tersedia paket wisata untuk rombongan atau perusahaan?",
    answer:
      "Ya, kami menyediakan paket MICE (Meeting, Incentive, Convention, Exhibition) untuk kebutuhan perusahaan, serta paket kunjungan edukasi untuk sekolah dan institusi pendidikan.",
  },
  {
    id: 3,
    question: "Layanan apa saja yang tersedia selain paket wisata?",
    answer:
      "Selain paket wisata, kami juga menyediakan voucher Hotel dan Villa, paket Adventure, serta wisata petik buah seperti apel, strawberry, jeruk, dan jambu.",
  },
  {
    id: 4,
    question: "Bagaimana cara memesan paket wisata?",
    answer:
      "Anda dapat memesan melalui WhatsApp atau telepon. Pilih paket yang diinginkan, tentukan tanggal keberangkatan dan jumlah peserta, lalu lakukan konfirmasi pembayaran. Tim kami akan segera memproses pesanan Anda.",
  },
  {
    id: 5,
    question: "Apakah bisa request paket wisata custom?",
    answer:
      "Tentu saja! Kami melayani paket wisata semua tujuan sesuai keinginan Anda. Hubungi kami untuk konsultasi dan mendapatkan penawaran terbaik untuk perjalanan impian Anda.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tanya Jawab
          </h2>
          <p className="text-gray-600 text-lg">
            Temukan jawaban dari pertanyaan yang sering diajukan.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <ChevronDown size={24} className="text-gray-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
