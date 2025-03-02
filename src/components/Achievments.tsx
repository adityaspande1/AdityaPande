
import { motion } from 'framer-motion';
import { achievements } from '../data/Achievements';

export default function Achievements() {
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {achievements.map((achievement) => (
        <motion.div 
          key={achievement.id}
          className="achievement-card"
          variants={item}
        >
          <div className="achievement-year ">{achievement.year}</div>
          <div className="flex items-center mb-4">
            {achievement.icon}
            <h3 className="text-xl font-bold text-white mt-2">{achievement.title}</h3>
          </div>
          <div className="mb-2">
            <span className="text-[#38bdf8] font-mono">rank: {achievement.rank}</span>
          </div>
          <div className="text-gray-300 mb-4 pl-4 border-l-2 border-[#334155]">
            {achievement.description}
          </div>
          <div className="achievement-status">
            $ status: {achievement.status}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}