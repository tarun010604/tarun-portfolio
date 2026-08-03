export default function GlassCard({
  children,
  className = "",
}) {
  return (
    <div
      className={`
      rounded-3xl

      border border-white/10

      bg-white/5

      backdrop-blur-2xl

      shadow-[0_0_60px_rgba(59,130,246,.15)]

      transition-all

      duration-500

      hover:border-blue-500/30

      ${className}
      `}
    >
      {children}
    </div>
  );
}