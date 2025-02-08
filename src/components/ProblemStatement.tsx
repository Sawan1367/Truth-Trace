
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const ProblemStatement = () => {
  return (
    <section className="py-24 px-4 bg-accent/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">The Problem</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Today's generation is overwhelmed by choices and unsure about their future direction. Despite consuming vast amounts of digital content, they lack tailored insights to make informed decisions.
            </p>
            <ul className="space-y-4">
              {["Information overload", "Lack of personalization", "Uncertainty about the future"].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl" />
              <HelpCircle className="w-48 h-48 text-primary relative z-10" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;
