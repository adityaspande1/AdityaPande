import React from 'react';
import { MailIcon, GithubIcon } from 'lucide-react';
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { motion } from "framer-motion";

interface ContactItemProps {
  title: string;
  link: string;
  icon: React.ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({ title, link, icon }) => (
  <motion.div
    className="flex flex-col items-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-sky-400 transition-colors"
    >
      {icon}
      <span className="text-sm sm:text-base">{link.replace('https://', '').replace('mailto:', '')}</span>
    </motion.a>
  </motion.div>
);

export const Contacts: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" mt-20  text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <ContactItem
            title="LinkedIn"
            link="https://www.linkedin.com/in/aditya-s-pande"
            icon={<CiLinkedin size={30} />}
          />
          <ContactItem
            title="Email"
            link="mailto:adityaspande1@gmail.com"
            icon={<MailIcon size={25} />}
          />
          <ContactItem
            title="GitHub"
            link="https://github.com/adityaspande1"
            icon={<GithubIcon size={25} />}
          />
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Coding Profiles</h3>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://leetcode.com/u/adityapande1/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors"
              >
                <SiLeetcode size={30} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.codechef.com/users/adityaspande2"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors"
              >
                <SiCodechef size={30} />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-8 pt-8 border-t border-gray-800">
          <p>&copy; {currentYear} Aditya Pande. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ Aditya Pande</p>
        </div>
      </div>
    </footer>
  );
};

