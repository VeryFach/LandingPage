"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Berita = () => {
  return (
    <section className="flexCenter flex-col">
      {/* Bagian Gambar */}
      <div className="max-container w-full flex justify-center items-center pb-8 mt-10">
        <Image
          src="/Value.png"
          alt="value"
          width={700}
          height={500}
          className="w-[700px] h-[500px] object-cover object-center 2xl:rounded-3xl"
        />
      </div>

      {/* Bagian Berita */}
      <div className="max-container w-full px-5 mt-10">
        <h2 className="bold-40 text-center mb-5">BERITA EM UB 2024</h2>
        <div className="flex overflow-x-auto gap-5 scrollbar-hide p-5">
          {newsData.map((news, index) => (
            <motion.div
              key={index}
              className="w-[300px] lg:w-1/3 bg-white p-5 rounded-xl shadow-md flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={news.image}
                alt={news.city}
                width={250}
                height={170}
                className="rounded-lg mb-3"
              />
              <h3 className="bold-20 text-center">{news.city}</h3>
              <p className="regular-16 text-gray-600 mt-2 text-center">{news.description}</p>
              <button className="mt-3 bg-black text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-700 transition">
                Baca Selengkapnya
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const newsData = [
  { city: "Jakarta", description: "Jakarta mengalami peningkatan wisatawan tahun ini dengan berbagai festival budaya yang menarik perhatian pengunjung dari dalam dan luar negeri.", image: "/image 19.png" },
  { city: "Surabaya", description: "Festival tahunan Surabaya telah dimulai! Acara ini menghadirkan berbagai pertunjukan seni, kuliner khas, dan pameran budaya yang sangat menarik.", image: "/image 19.png" },
  { city: "Bandung", description: "Kuliner malam Bandung semakin populer di kalangan wisatawan. Berbagai makanan khas seperti seblak dan cireng kini menjadi daya tarik utama.", image: "/image 19.png" },
  { city: "Bali", description: "Bali kembali menjadi destinasi favorit di Asia dengan pantai yang indah, kehidupan malam yang meriah, serta budaya yang tetap lestari meskipun modernisasi terus berjalan.", image: "/image 19.png" },
  { city: "Yogyakarta", description: "Yogyakarta menawarkan wisata sejarah dan budaya yang kaya, mulai dari Keraton hingga wisata alam seperti Gunung Merapi dan pantai-pantai indah di sekitarnya.", image: "/image 19.png" }
];

export default Berita;
