import { Card } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";

const SocialLink = ({ icon: Icon, href }: { icon: any, href: string }) => (
  <a 
    href={href} 
    className="p-4 hover:bg-workshop-purple/20 rounded-full transition-all"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="h-6 w-6 text-workshop-cyan hover:text-workshop-neonPurple" />
  </a>
);

export const Contact = () => {
  const socials = [
    { icon: Github, href: "https://github.com/yourusername" },
    { icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
    { icon: Twitter, href: "https://twitter.com/yourusername" }
  ];

  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Connect With Us
          </h2>
          <Card className="p-8 bg-black/50 border border-workshop-cyan hover:neon-border transition-all">
            <div className="flex justify-center gap-6">
              {socials.map((social, index) => (
                <SocialLink key={index} {...social} />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};