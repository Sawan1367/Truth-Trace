
import { motion } from "framer-motion";
import { Brain, Lock, Settings, UserPlus } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced ML models analyze your digital footprint to provide personalized insights.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description: "Your data is encrypted and protected with state-of-the-art security measures.",
  },
  {
    icon: Settings,
    title: "Customizable Experience",
    description: "Tailor the platform to your specific needs and preferences.",
  },
  {
    icon: UserPlus,
    title: "Personal Growth",
    description: "Track your progress and receive actionable recommendations for improvement.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how our platform can help you unlock your potential and guide your journey to success.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card border shadow-sm hover:shadow-md transition-all"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
