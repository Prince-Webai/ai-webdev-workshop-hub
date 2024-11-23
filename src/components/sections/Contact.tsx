import { Card } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Get in Touch
          </h2>
          
          <div className="grid gap-6">
            {/* Primary Contact Card */}
            <Card className="p-8 bg-black/50 border border-workshop-cyan hover:neon-border transition-all">
              <div className="space-y-6">
                <div className="flex items-center gap-3 group hover:bg-workshop-purple/20 p-4 rounded-lg transition-all">
                  <div className="p-3 bg-workshop-purple/30 rounded-full">
                    <Mail className="h-6 w-6 text-workshop-cyan" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">Email</p>
                    <a 
                      href="mailto:contact@anishkfoundation.org" 
                      className="text-gray-200 hover:text-workshop-cyan transition-colors"
                    >
                      contact@anishkfoundation.org
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 group hover:bg-workshop-purple/20 p-4 rounded-lg transition-all">
                  <div className="p-3 bg-workshop-purple/30 rounded-full">
                    <Phone className="h-6 w-6 text-workshop-cyan" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">Phone</p>
                    <a 
                      href="tel:+1234567890" 
                      className="text-gray-200 hover:text-workshop-cyan transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links Card */}
            <Card className="p-8 bg-black/50 border border-workshop-cyan hover:neon-border transition-all">
              <h3 className="text-xl font-semibold gradient-text mb-6">Connect on Social Media</h3>
              <div className="grid gap-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group hover:bg-workshop-purple/20 p-4 rounded-lg transition-all"
                >
                  <div className="p-3 bg-workshop-purple/30 rounded-full">
                    <Github className="h-6 w-6 text-workshop-cyan" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">GitHub</p>
                    <p className="text-gray-200">yourusername</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group hover:bg-workshop-purple/20 p-4 rounded-lg transition-all"
                >
                  <div className="p-3 bg-workshop-purple/30 rounded-full">
                    <Linkedin className="h-6 w-6 text-workshop-cyan" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <p className="text-gray-200">yourusername</p>
                  </div>
                </a>

                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group hover:bg-workshop-purple/20 p-4 rounded-lg transition-all"
                >
                  <div className="p-3 bg-workshop-purple/30 rounded-full">
                    <Twitter className="h-6 w-6 text-workshop-cyan" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">Twitter</p>
                    <p className="text-gray-200">@yourusername</p>
                  </div>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};