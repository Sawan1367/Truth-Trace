
import { motion } from "framer-motion";
import { BrainCircuit, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-background to-accent/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <div className="mb-6 flex justify-center">
          <BrainCircuit className="h-16 w-16 text-primary animate-float" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Personalized Growth Insights with AI
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Empowering the Future Generation to Discover Their Path
        </p>
        <div className="flex gap-4 justify-center items-center flex-wrap">
          <Link
          to={"/dashboard"}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all"
            
          >
            Get Started
          </motion.button></Link>
          <Link 
            to="/features" 
            className="px-6 py-3 rounded-full border border-primary/20 hover:bg-accent/10 text-primary font-medium transition-all"
          >
            Features
          </Link>
          <Link 
            to="/about" 
            className="px-6 py-3 rounded-full border border-primary/20 hover:bg-accent/10 text-primary font-medium transition-all"
          >
            About
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8"
      >
        <ChevronDown className="w-8 h-8 animate-bounce text-primary/60" />
      </motion.div>
    </section>
  );
};

export default Hero;
