import { Award} from 'lucide-react';

export const achievements = [
    {
      id: 1,
      title: "SIH Grand Finalist",
      year: "DEC 2024",
      rank: "Top 5 In India",
      icon: <Award className="text-[#10b981] mb-2" size={24} />,
      description: "Built a real-time collaboration tool using WebSocket and React, beating 50+ teams.",
      status: "completed"
    },
    {
      id: 2,
      title: "IISF-SIF Hackathon Finalist",
      year: "JAN 2024",
      rank: "Top 50 in India",
      icon: <Award className="text-[#10b981] mb-2" size={24} />,
      description: "Contributed to React.js core, with 100+ PRs merged and 1000+ commits.",
      status: "completed"
    },
    {
      id: 3,
      title: "TechFiest Finalist",
      year: " Mar 2024",
      rank: "Top 5 out of 30 teams",
      icon: <Award className="text-[#10b981] mb-2" size={24} />,
      description: "Solved 500+ problems, ranked in top 5% globally with expertise in dynamic programming.",
      status: "completed"
    }
  ];
