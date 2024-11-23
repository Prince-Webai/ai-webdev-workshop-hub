import { Card } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-6">
        <Card className="p-6 bg-black/50 border border-workshop-cyan">
          <h3 className="text-2xl font-bold gradient-text mb-6">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-gray-300">Email:</span>
              <div className="flex-1"></div>
              <a href="mailto:contact@anishkfoundation.org" className="text-gray-300 hover:text-workshop-cyan transition-colors flex items-center gap-2">
                contact@anishkfoundation.org
                <Mail className="h-5 w-5 text-workshop-cyan" />
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-300">Phone:</span>
              <div className="flex-1"></div>
              <a href="tel:+1234567890" className="text-gray-300 hover:text-workshop-cyan transition-colors flex items-center gap-2">
                +1 (234) 567-890
                <Phone className="h-5 w-5 text-workshop-cyan" />
              </a>
            </div>
            
            {/* Social Media Links */}
            <div className="pt-4 border-t border-workshop-cyan/30">
              <h4 className="text-lg font-semibold gradient-text mb-4">Connect With Me</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-gray-300">GitHub:</span>
                  <div className="flex-1"></div>
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-workshop-cyan transition-colors flex items-center gap-2"
                  >
                    yourusername
                    <Github className="h-5 w-5" />
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-300">LinkedIn:</span>
                  <div className="flex-1"></div>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-workshop-cyan transition-colors flex items-center gap-2"
                  >
                    yourusername
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-300">Twitter:</span>
                  <div className="flex-1"></div>
                  <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-workshop-cyan transition-colors flex items-center gap-2"
                  >
                    @yourusername
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};