
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <Link 
      
        to="/" 
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6">Features</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="text-xl font-semibold mb-3">ML-Powered Analysis</h3>
            <p className="text-muted-foreground">
              Advanced machine learning algorithms analyze your digital footprint to provide personalized insights.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="text-xl font-semibold mb-3">NLP Integration</h3>
            <p className="text-muted-foreground">
              Natural Language Processing helps understand your interests and preferences at a deeper level.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="text-xl font-semibold mb-3">LLM Insights</h3>
            <p className="text-muted-foreground">
              Large Language Models provide contextual and creative recommendations tailored to your goals.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Features;
