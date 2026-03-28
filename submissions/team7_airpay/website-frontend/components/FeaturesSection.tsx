import { WifiOff, Shield, Smartphone, Zap } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: WifiOff,
      title: 'Works In Low Connectivity',
      description: 'Designed for payment use cases where standard internet access is unstable.',
      metric: 'ACCESSIBLE',
    },
    {
      icon: Shield,
      title: 'Secure Experience',
      description: 'The product is designed around a guided and user-controlled payment journey.',
      metric: 'USER CONTROLLED',
    },
    {
      icon: Smartphone,
      title: 'Simple Interface',
      description: 'A mobile-friendly UI keeps the process easy to understand and use.',
      metric: 'MOBILE FIRST',
    },
    {
      icon: Zap,
      title: 'Fast Flow',
      description: 'Frontend screens are designed to reduce friction in the payment journey.',
      metric: 'QUICK FLOW',
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-24 border-b border-divider bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8 sm:mb-16 border-b border-divider pb-4">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight">
            Key Features
          </h2>
          <span className="font-mono text-xs sm:text-sm text-text-hint hidden sm:block">
            STATUS: <span className="text-success">ACTIVE</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-divider">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="p-6 sm:p-8 border-b md:border-b-0 md:border-r last:border-b-0 lg:last:border-r-0 border-divider bg-surface hover:bg-primary hover:text-text-primary transition-colors duration-200 flex flex-col group touch-manipulation"
              >
                <div className="flex justify-between items-center mb-8 font-mono text-xs">
                  <span className="text-text-hint group-hover:text-text-primary/50 transition-colors">FEAT.{i + 1}</span>
                  <Icon className="w-5 h-5 text-accent group-hover:text-accent transition-colors" strokeWidth={1.5} />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl uppercase tracking-wider mb-4 font-bold min-h-[56px] sm:h-14">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary group-hover:text-text-primary/70 transition-colors mb-6">
                    {feature.description}
                  </p>
                </div>

                <div className="font-mono text-xs tracking-widest text-success group-hover:text-success pt-4 border-t border-divider group-hover:border-text-primary/20 transition-colors">
                  [{feature.metric}]
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
