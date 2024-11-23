import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, Award, Rocket, Brain, Code, Users, ChevronRight, Gift } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center p-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,27,105,0.5)_0%,rgba(0,0,0,0.8)_100%)]" />
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-left space-y-6">
            <Badge className="bg-workshop-purple text-workshop-cyan border-workshop-cyan animate-pulse">
              Live Workshop
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              Master Class on Web Dev Using AI!
            </h1>
            <p className="text-lg text-gray-300">
              Join us for an intensive 3-hour session to maximize your web development skills with AI-powered tools.
            </p>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-workshop-cyan hover:bg-workshop-purple text-black hover:text-white transition-all neon-border">
                  Register Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <div className="flex items-center gap-4 text-gray-300">
                  <CalendarDays className="h-5 w-5 text-workshop-cyan" />
                  <span>27 November 2024</span>
                  <Clock className="h-5 w-5 text-workshop-cyan" />
                  <span>4:00 PM - 7:00 PM</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Gift className="h-5 w-5 text-workshop-cyan" />
                <span>Donation: Rs. 21 - Considered for noble causes</span>
              </div>
            </div>
          </div>
          <div className="animate-float">
            <img 
              src="/lovable-uploads/4c1d6be9-b681-4ffd-85a4-9a26e589aab9.png" 
              alt="Workshop Banner" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="py-20 bg-workshop-purple/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Earn Your AI Web Development Certificate
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Upon completion of the workshop, receive an industry-recognized certificate validating your expertise in AI-powered web development.
            </p>
          </div>
          <Card className="p-6 bg-black/50 border border-workshop-cyan neon-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-workshop-cyan">Certificate Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Industry-recognized certification",
                    "Validates AI development skills",
                    "Enhances your portfolio",
                    "Lifetime validity",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-workshop-cyan" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-workshop-purple/30 p-8 rounded-lg border border-workshop-cyan">
                <div className="aspect-[4/3] bg-gradient-to-r from-workshop-purple to-workshop-neonPurple rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-white">Sample Certificate</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            Career Opportunities with AI
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8" />,
                title: "AI-Powered Development",
                description: "Build cutting-edge applications using AI tools and frameworks",
              },
              {
                icon: <Brain className="h-8 w-8" />,
                title: "AI Integration Specialist",
                description: "Help companies integrate AI solutions into their existing systems",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "AI Consultant",
                description: "Guide businesses in implementing AI-driven development practices",
              },
            ].map((career, index) => (
              <Card key={index} className="p-6 bg-black/50 border border-workshop-cyan hover:neon-border transition-all">
                <div className="text-workshop-cyan mb-4">{career.icon}</div>
                <h3 className="text-xl font-bold mb-2">{career.title}</h3>
                <p className="text-gray-300">{career.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Impact Section */}
      <section className="py-20 bg-workshop-purple/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            How AI is Changing the World
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-6 bg-black/50 border border-workshop-cyan">
              <h3 className="text-2xl font-bold mb-6 text-workshop-cyan">
                Revolutionary Impact
              </h3>
              <ul className="space-y-4">
                {[
                  "Automating repetitive development tasks",
                  "Enhancing code quality and security",
                  "Accelerating development cycles",
                  "Creating more intuitive user experiences",
                  "Enabling natural language programming",
                ].map((impact, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Rocket className="h-5 w-5 text-workshop-cyan" />
                    <span>{impact}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                AI is revolutionizing the way we approach web development, making it more efficient, 
                accessible, and powerful than ever before. Join us to be at the forefront of this 
                technological revolution.
              </p>
              <Button className="w-full bg-workshop-cyan hover:bg-workshop-purple text-black hover:text-white transition-all neon-border">
                Join the AI Revolution
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;