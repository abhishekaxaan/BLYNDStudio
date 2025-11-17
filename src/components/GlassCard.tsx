import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}

export default function GlassCard({ children, className = '', hover = false, style }: GlassCardProps) {
  return (
    <div
      className={`
        glass-panel rounded-2xl p-6
        ${hover ? 'glass-hover' : ''}
        ${className}
      `}
      style={style}
    >
      {children}
    </div>
  );
}
