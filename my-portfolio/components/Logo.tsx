interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 40, className = "" }: LogoProps) {
  return (
    <div
      className={`flex items-center justify-center bg-gray-900 text-white rounded-lg font-medium ${className}`}
      style={{ width: size, height: size }}
    >
      <span className="text-sm sm:text-base" style={{ fontSize: `${size * 0.4}px` }}>
        OA
      </span>
    </div>
  );
}

