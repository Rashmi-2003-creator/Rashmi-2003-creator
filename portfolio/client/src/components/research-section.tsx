import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Cpu, Network, Gauge, ExternalLink } from "lucide-react";

export default function ResearchSection() {
  const researchHighlights = [
    {
      icon: Cpu,
      title: "1D-CNN Architecture",
      description: "Optimized convolutional layers for ECG signal pattern recognition",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Network,
      title: "Bi-LSTM Integration",
      description: "Bidirectional processing for temporal pattern analysis",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      description: "Achieved 30% faster inference without accuracy compromise",
      color: "text-green-600",
      bgColor: "bg-green-100"
    }
  ];

  const metrics = [
    { value: "99.4%", label: "Model Accuracy", color: "text-primary", bgColor: "bg-primary/5" },
    { value: "30%", label: "Faster Inference", color: "text-green-600", bgColor: "bg-green-50" }
  ];

  return (
    <section id="research" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Research & Awards</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Breakthrough research in healthcare AI with national recognition and industry impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Award Highlight */}
            <Card className="bg-gradient-to-r from-accent to-accent/100 text-white mb-8">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Trophy className="h-8 w-8 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold">Best Paper Award 2025</h3>
                    <p className="opacity-90">NIELIT Ropar, Track 6: Digital Technologies</p>
                  </div>
                </div>
                <p className="opacity-95">
                  Recognized for outstanding research contribution in ECG Arrhythmia Detection 
                  at national conference with 200+ attendees.
                </p>
              </CardContent>
            </Card>

            {/* Research Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <Card key={index} className={`${metric.bgColor} dark:opacity-80 dark:border-gray-600`}>
                  <CardContent className="p-6 text-center">
                    <div className={`text-3xl font-bold mb-2 ${metric.color}`}>{metric.value}</div>
                    <div className="text-gray-600 dark:text-gray-300">{metric.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">ECG Arrhythmia Detection</h3>
            <div className="space-y-6">
              <Card className="bg-gray-50 dark:bg-gray-800 dark:border-gray-600">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Research Overview</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Developed an innovative ECG arrhythmia detection system using advanced deep learning 
                    architectures that combines 1D-CNN and Bi-LSTM networks for superior cardiac anomaly detection.
                  </p>
                  <div className="flex items-center text-primary">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    <span className="font-medium">Published at NIELIT Conference</span>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                {researchHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`${highlight.bgColor} dark:opacity-80 p-2 rounded-lg`}>
                      <highlight.icon className={`h-5 w-5 ${highlight.color}`} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white">{highlight.title}</h5>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
