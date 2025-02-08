
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const About = () => {
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
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-muted-foreground mb-6">
          We're on a mission to empower the future generation with AI-driven insights to help them make informed decisions about their path forward.
        </p>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
            <p className="text-muted-foreground">
              To create a world where every individual has access to personalized guidance powered by cutting-edge AI technology.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-3">Our Approach</h2>
            <p className="text-muted-foreground">
              We combine ML, NLP, and LLMs to analyze your digital footprint and provide tailored recommendations for personal and professional growth.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
