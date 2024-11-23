import { Card } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";

const ContactLink = ({ icon: Icon, label, value, href }: { icon: any, label: string, value: string, href: string }) => (
  <a href={href} className="flex items-center gap-3 group hover:bg-workshop-purple/20 p-4 rounded-lg transition-all">
    <div className="p-3 bg-workshop-purple/30 rounded-full">
      <Icon className="h-6 w-6 text-workshop-cyan" />
    </div>
    <div className="flex-1">
      <p className="text-sm text-gray-400">{label}</p>
      <p className="text-gray-200">{value}</p>
    </div>
  </a>
);

export const Contact = () => {
  const contacts = [
    { icon: Mail, label: "Email", value: "contact@anishkfoundation.org", href: "mailto:contact@anishkfoundation.org" },
    { icon: Phone, label: "Phone", value: "+1 (234) 567-890", href: "tel:+1234567890" },
    { icon: Github, label: "GitHub", value: "yourusername", href: "https://github.com/yourusername" },
    { icon: Linkedin, label: "LinkedIn", value: "yourusername", href: "https://linkedin.com/in/yourusername" },
    { icon: Twitter, label: "Twitter", value: "@yourusername", href: "https://twitter.com/yourusername" }
  ];

  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Get in Touch
          </h2>
          <Card className="p-8 bg-black/50 border border-workshop-cyan hover:neon-border transition-all">
            <div className="grid gap-4">
              {contacts.map((contact, index) => (
                <ContactLink key={index} {...contact} />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};