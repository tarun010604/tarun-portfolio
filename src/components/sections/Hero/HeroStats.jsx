import CountUp from "react-countup";
import GlassCard from "../../ui/GlassCard";

const stats = [
  {
    number: 3,
    suffix: "+",
    label: "Projects",
  },
  {
    number: 25,
    suffix: "+",
    label: "Technologies",
  },
  {
    number: 200,
    suffix: "+",
    label: "DSA Problems",
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8 max-w-xl">

      {stats.map((item) => (
        <GlassCard
          key={item.label}
          className="p-5 text-center"
        >
          <h2 className="text-3xl font-bold text-blue-400">
  {item.number}
  {item.suffix}
</h2>

          <p className="text-slate-400 text-sm mt-2">
            {item.label}
          </p>
        </GlassCard>
      ))}

    </div>
  );
}