import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  Brain, Network, Cpu, Database, Fingerprint, Zap,
  Server, Code, Terminal, Layers, Shield, Workflow,
  Lightbulb, Users, MessageSquare, Target, Compass, Briefcase
} from 'lucide-react';

type LoaderType = 'ai' | 'software' | 'softskill' | 'default';

interface LoaderProps {
  type?: LoaderType;
}

const config = {
  ai: [
    { icon: Briefcase, label: "ZEPHYR", color: "#719A73" },
    { icon: Users, label: "300+", color: "#1F73C2" },
    { icon: Target, label: "PLANO", color: "#719A73" },
    { icon: Database, label: "R$ 260M", color: "#1F73C2" },
    { icon: Shield, label: "SUCESSÃO", color: "#719A73" },
    { icon: Compass, label: "DÉCADAS", color: "#1F73C2" }
  ],
  software: [
    { icon: Server, label: "ATLAS", color: "#1F73C2" },
    { icon: Layers, label: "SUPABASE", color: "#719A73" },
    { icon: Code, label: "ZEPHYR", color: "#719A73" },
    { icon: Layers, label: "CRIA", color: "#719A73" },
    { icon: Brain, label: "IA", color: "#1F73C2" },
    { icon: Workflow, label: "NO AR", color: "#719A73" }
  ],
  softskill: [
    { icon: Lightbulb, label: "IDEIA", color: "#719A73" },
    { icon: Network, label: "MÉTODO", color: "#1F73C2" },
    { icon: MessageSquare, label: "1:1", color: "#719A73" },
    { icon: Target, label: "META", color: "#1F73C2" },
    { icon: Zap, label: "24H", color: "#719A73" },
    { icon: Cpu, label: "SISTEMA", color: "#1F73C2" }
  ],
  default: [
    { icon: Zap, label: "Início", color: "#1F73C2" },
    { icon: Zap, label: "Ação", color: "#719A73" },
    { icon: Zap, label: "Foco", color: "#F4F0E7" },
    { icon: Zap, label: "Espera", color: "#ffffff" },
    { icon: Zap, label: "Vai", color: "#719A73" },
    { icon: Zap, label: "Carregando", color: "#1F73C2" }
  ]
};

const Loader = ({ type = 'default' }: LoaderProps) => {
  const stageRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  const faces = config[type] || config.default;

  useEffect(() => {
    // Stage Jump
    gsap.set(stageRef.current, { scale: 1, rotateX: -20, rotateY: 0 });
    const stageTween = gsap.to(stageRef.current, {
      scale: 1.3,
      rotateX: 160,
      rotateY: 180,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });

    // Auto Rotate Cube
    const cubeTween = gsap.to(cubeRef.current, {
      rotateY: 360,
      rotateZ: 360,
      duration: 8,
      ease: "none",
      repeat: -1
    });

    // Shadow Pulse
    gsap.set(shadowRef.current, { scale: 1, opacity: 0.5 });
    const shadowTween = gsap.to(shadowRef.current, {
      scale: 0.4,
      opacity: 0.1,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });

    return () => {
      stageTween.kill();
      cubeTween.kill();
      shadowTween.kill();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden bg-transparent" style={{ perspective: 1500 }}>
      {/* Background Dots */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none hidden"
        style={{
          backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)',
          backgroundSize: '15px 15px'
        }}
      />

      <div className="relative flex items-center justify-center">
        {/* The 3D Stage */}
        <div
          ref={stageRef}
          className="relative w-[110px] h-[110px]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* The Auto-Rotating Cube */}
          <div
            ref={cubeRef}
            className="absolute inset-0"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Face icon={faces[0].icon} label={faces[0].label} color={faces[0].color} transform="rotateY(0deg) translateZ(55px)" />
            <Face icon={faces[1].icon} label={faces[1].label} color={faces[1].color} transform="rotateY(180deg) translateZ(55px)" />
            <Face icon={faces[2].icon} label={faces[2].label} color={faces[2].color} transform="rotateY(90deg) translateZ(55px)" />
            <Face icon={faces[3].icon} label={faces[3].label} color={faces[3].color} transform="rotateY(-90deg) translateZ(55px)" />
            <Face icon={faces[4].icon} label={faces[4].label} color={faces[4].color} transform="rotateX(90deg) translateZ(55px)" />
            <Face icon={faces[5].icon} label={faces[5].label} color={faces[5].color} transform="rotateX(-90deg) translateZ(55px)" />
          </div>
        </div>

        {/* Shadow Floor */}
        <div
          ref={shadowRef}
          className="absolute -bottom-[80px] w-[120px] h-[30px] bg-black/40 dark:bg-white/10 rounded-[100%] blur-[8px]"
        />
      </div>
    </div>
  );
};

function Face({ icon: Icon, label, color, transform }: { icon: any, label: string, color: string, transform: string }) {
  return (
    <div
      className="absolute w-full h-full border-[5px] border-black box-border flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: color,
        transform,
        backfaceVisibility: 'visible',
        boxShadow: '12px 12px 0 black'
      }}
    >
      <div className="absolute w-[150%] h-[20px] bg-black opacity-20 -rotate-45 -translate-y-10" />
      <Icon className="w-10 h-10 text-black z-10 mb-1" strokeWidth={2.5} />
      <span className="font-['Arial_Black',sans-serif] text-[10px] bg-black text-white px-2 mt-1 uppercase z-10 tracking-widest rounded-sm">
        {label}
      </span>
    </div>
  );
}

export default Loader;
