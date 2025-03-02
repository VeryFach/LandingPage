import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flexCenter bg-gradient-to-b from-[#007B8E] to-[#002328] text-white w-full min-h-[300px] overflow-hidden">
      <div className="padding-container max-container flex w-full flex-col gap-14 py-10">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="LogoNama Samping Putih.svg" alt="logo" width={400} height={29} />
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn key={index} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4">
                  {columns.links.map((link, linkIndex) => (
                    <Link href="/" key={linkIndex} className="text-white hover:underline">
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              {FOOTER_CONTACT_INFO.map((section, index) => (
                <FooterColumn key={index} title={section.title}>
                  <div className="flex flex-col">
                    {section.links.map((item, i) => (
                      <p key={i} className="text-white text-base font-normal">{item}</p>
                    ))}
                  </div>
                </FooterColumn>
              ))}
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4">
                  {SOCIALS.links.map((link, index) => (
                    <Link href="/" key={index}>
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <p className="regular-14 w-full text-center text-white">©️ 2024 EKSEKUTIF MAHASISWA UNIVERSITAS BRAWIJAYA | Made with ♡ by KOMINFO EM UB 2024</p>
      </div>
    </footer>
  );
};

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap text-white">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
