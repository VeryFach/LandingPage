import Image from 'next/image';

const CompanyProfile = () => {
  const videoUrl = "https://www.youtube.com/embed/SMMCzNkIDVE";
  
  return (
    <section className="flex flex-col items-center bg-white py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-semibold text-teal-700 italic text-center">
        Company Profile
      </h1>
      <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mt-2">
        Kabinet <span className="text-teal-500">Cerita Kita</span>
      </h2>
      
      <div className="relative w-full max-w-7xl mt-8 shadow-lg aspect-video">
        <iframe 
          width="100%" 
          height="100%" 
          src={videoUrl} 
          title="Brawijaya Chronicles" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="w-full h-full rounded-lg"
        ></iframe>
      </div>
    </section>
  );
};

export default CompanyProfile;