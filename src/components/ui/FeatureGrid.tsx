interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureGridProps {
  features: FeatureItem[];
}

export default function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, idx) => (
        <div key={idx} className="p-6 rounded-2xl bg-zinc-950/40 border border-zinc-800/60 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all duration-300 group">
          <div className="h-12 w-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/5">
            {feature.icon}
          </div>
          <h4 className="text-lg font-bold text-white mb-2 tracking-tight">{feature.title}</h4>
          <p className="text-sm font-light text-zinc-400 leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
