"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Visi = () => {
  const [isVisionVisible, setIsVisionVisible] = useState(false);
  const [isMissionVisible, setIsMissionVisible] = useState(false);
  const visionRef = useRef(null);
  const missionRef = useRef(null);

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.5 };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.target === visionRef.current) setIsVisionVisible(entry.isIntersecting);
        if (entry.target === missionRef.current) setIsMissionVisible(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    if (visionRef.current) observer.observe(visionRef.current);
    if (missionRef.current) observer.observe(missionRef.current);

    return () => {
      if (visionRef.current) observer.unobserve(visionRef.current);
      if (missionRef.current) observer.unobserve(missionRef.current);
    };
  }, []);

  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      {/* Background Image */}
      <div className="h-[640px] w-full bg-cover bg-center bg-[url('/g.png')] relative"></div>

      {/* Visi & Misi Section */}
      <div className="flex flex-col mt-10 px-6 space-y-20">
        <div className="w-full flex items-center justify-between" ref={visionRef}>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isVisionVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-7xl font-extrabold text-[#007B8E]"
          >
            VISI.
          </motion.h2>
          {isVisionVisible && (
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="ml-6 text-4xl text-gray-700 max-w-[60%] text-right"
            >
              Terwujudnya Eksekutif Mahasiswa Brawijaya sebagai Motor Pembaharuan dan Konektor bagi seluruh Simpul Brawijaya dengan Bernafaskan Inisiatif. Progresif dan Komunikatif dalam Mengukir Cerita Baik bagi Brawijaya dan Indonesia.
            </motion.p>
          )}
        </div>

        <div className="w-full flex items-center justify-between" ref={missionRef}>
          {isMissionVisible && (
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mr-6 text-4xl text-gray-700 max-w-[60%]"
            >
              Advocacy Student Well-Being Oriented Maximaze Collaborative Governance Intergrity and Enpowering Student Movement Spread Impactful Energy Self Efficacy and Future Oriented Community Development based on Social Needs Information
            </motion.p>
          )}
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            animate={isMissionVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="text-7xl font-extrabold bg-gradient-to-r from-[#007B8E] via-white to-[#2A1C7E] bg-clip-text text-transparent"
          >
            MISI.
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default Visi;