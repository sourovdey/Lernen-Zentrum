import React, { useRef, useEffect, useState } from "react";
import { Speech, MonitorCheck, Notebook, HeartPlus, TvMinimalPlay, Lollipop } from "lucide-react";
import GetImage from "../../assets/get.svg";

const features = [
  {
    icon: <Speech size={28} className="text-sky-500" />,
    title: "Speaking practice anytime",
    desc: "Practice German speaking whenever you want inside dedicated voice channels with other learners.",
  },
  {
    icon: <MonitorCheck size={28} className="text-sky-500" />,
    title: "Active learner community",
    desc: "Stay connected with motivated learners who are consistently learning and improving together.",
  },
  {
    icon: <Notebook size={28} className="text-sky-500" />,
    title: "Organized learning channels",
    desc: "Everything is neatly structured so you can easily find resources, discussions, and practice areas.",
  },
  {
    icon: <HeartPlus size={28} className="text-sky-500" />,
    title: "Support & motivation",
    desc: "Get help when you’re stuck and stay motivated by seeing others progress alongside you.",
  },
  {
    icon: <TvMinimalPlay size={28} className="text-sky-500" />,
    title: "Real-time interaction",
    desc: "Engage in live conversations, instant chats, and quick feedback to improve faster.",
  },
  {
    icon: <Lollipop size={28} className="text-sky-500" />,
    title: "Beginner-friendly environment",
    desc: "A safe and comfortable space where you can learn without fear, even if you're just starting out.",
  },
];

export default function Whatyouget() {
  const imgRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 } // 30% visible triggers
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#f5f7fb] py-16 px-4 overflow-hidden font-poppins">
      
      {/* Scroll-triggered Animated Image */}
      <div className="flex justify-center mb-6">
        <img
          ref={imgRef}
          src={GetImage}
          alt="Get Image"
          className={`w-20 md:w-24 object-contain transform transition-all duration-700 ease-out
            ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
          `}
        />
      </div>

      {/* Header */}
      <div className="text-center mb-18">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Everything You Need to{" "}
          <span className="text-sky-500">Learn German</span> in One Place
        </h2>
        <p className="text-gray-500 mt-2">Here’s What You’ll Get in the Community</p>
      </div>

      {/* Flex Container */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md flex flex-wrap overflow-hidden">
        {features.map((item, i) => (
          <div
            key={i}
            className={`
              w-full md:w-1/3 
              p-10 text-center flex flex-col items-center gap-4
              ${i % 3 !== 2 ? "md:border-r md:border-gray-200" : ""}
              ${i < 3 ? "md:border-b md:border-gray-200" : ""}
              ${i !== features.length - 1 ? "border-b border-gray-200" : ""}
            `}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-sky-50">
              {item.icon}
            </div>
            <h3 className="font-semibold text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}