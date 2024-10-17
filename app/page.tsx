import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BrainCircuit, Zap, BarChart3 } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <header className="container mx-auto py-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">InnovateTech</h1>
          <div className="space-x-4">
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Services</Button>
            <Button variant="ghost">Contact</Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-20">
          <h2 className="text-5xl font-extrabold mb-4">Empowering Your Business with AI</h2>
          <p className="text-xl mb-8">Unlock the potential of artificial intelligence to drive growth and innovation.</p>
          <Button size="lg">Get Started</Button>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-20">
          <Card>
            <CardHeader>
              <BrainCircuit className="w-10 h-10 mb-2 text-primary" />
              <CardTitle>Smart Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Gain deep insights from your data with our AI-powered analytics platform.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="w-10 h-10 mb-2 text-primary" />
              <CardTitle>Automated Workflows</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Streamline your processes with intelligent automation and machine learning.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <BarChart3 className="w-10 h-10 mb-2 text-primary" />
              <CardTitle>Predictive Modeling</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Forecast trends and make data-driven decisions with our predictive AI models.</p>
            </CardContent>
          </Card>
        </section>

        <section className="bg-card rounded-lg p-8 mb-20">
          <blockquote className="text-xl italic mb-4">
            "InnovateTech's AI solutions have transformed our business operations, leading to a 30% increase in efficiency and a 25% boost in revenue."
          </blockquote>
          <p className="font-semibold">- Jane Doe, CEO of TechCorp</p>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Innovate?</h2>
          <p className="text-xl mb-8">Join the AI revolution and stay ahead of the competition.</p>
          <Button size="lg">Contact Us</Button>
        </section>
      </main>

      <footer className="bg-card text-card-foreground py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 InnovateTech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}