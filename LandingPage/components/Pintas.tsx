"use client";

import React from 'react';
import { motion } from 'framer-motion';

const boxItems = [
  "Fast & Secure", "User Friendly", "High Performance", "Easy Integration",
  "Reliable Support", "Smooth Experience", "AI Powered", "Cross Platform",
  "Lightweight & Fast", "Customizable UI"
];

const Pintas = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      {/* Tambahkan teks "Tautan Pintas" di sini */}
      <h2 className="bold-32 text-center mt-10 mb-6 text-gray-900">
        Tautan Pintas
      </h2>

      <div className="mt-10 w-full max-w-6xl overflow-x-auto flex gap-6 p-4 scrollbar-hide">
        {boxItems.map((text, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`p-8 rounded-xl shadow-md w-[500px] text-center cursor-pointer ${index % 2 === 0 ? 'bg-[#4682B4]' : 'bg-[#00CED1]'} text-white`}
          >
            <h3 className="bold-20">{text}</h3>
            <p className="regular-14 mt-2">Experience the best performance and security</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pintas;