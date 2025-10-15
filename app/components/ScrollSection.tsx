\"use client\";
import FeatureCard from "./FeatureCard";

const features = [
  { title: "Adaptive Intelligence", desc: "Learns and evolves with your data in real-time." },
  { title: "Autonomous Workflow", desc: "Streamline operations with secure automation." },
  { title: "Contextual Understanding", desc: "Understands nuance and adapts to intent." },
  { title: "Predictive Insights", desc: "Forecast trends and decisions with confidence." },
];

export default function ScrollSection() {
  return (
    <section id="features" className="min-h-screen py-20 px-8 md:px-16">
      <h2 className="text-3xl font-semibold mb-12 text-center">Capabilities</h2>
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <FeatureCard key={i} title={f.title} description={f.desc} />
        ))}
      </div>
    </section>
  );
}