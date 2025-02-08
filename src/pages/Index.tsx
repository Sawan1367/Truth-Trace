
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProblemStatement from "@/components/ProblemStatement";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <ProblemStatement />
      <Features />
    </div>
  );
};

export default Index;
