import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

const scheduleData = [
  {
    date: "March 15",
    sessions: [
      {
        time: "9:00 - 10:00 AM",
        title: "Opening Keynote: The Future of AI",
        speaker: "Dr. Susan Chen",
        description: "A visionary talk on AI's impact on society and business.",
        type: "Keynote"
      },
      {
        time: "11:00 - 12:30 PM",
        title: "Robotics in Manufacturing",
        speaker: "Mr. Raj Patel",
        description: "How robotics is transforming industrial workflows.",
        type: "Session"
      }
    ]
  },

  {
    date: "March 16",
    sessions: [
      {
        time: "2:00 - 3:30 PM",
        title: "Blockchain Beyond Cryptocurrency",
        speaker: "Ms. Elena Garcia",
        description: "Exploring real-world blockchain applications in finance.",
        type: "Workshop"
      }
    ]
  },
  
  {
    date: "March 17",
    sessions: [
      {
        time: "10:00 - 11:00 AM",
        title: "Panel Discussion: Ethics in AI",
        speaker: "Various Industry Experts",
        description: "Industry experts discuss ethical considerations in AI.",
        type: "Panel"
      }
    ]
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "Keynote": return "bg-tech-blue/20 text-tech-blue border-tech-blue/30";
    case "Workshop": return "bg-tech-purple/20 text-tech-purple border-tech-purple/30";
    case "Panel": return "bg-tech-cyan/20 text-tech-cyan border-tech-cyan/30";
    default: return "bg-muted/20 text-muted-foreground border-muted/30";
  }
};

export default function Schedule() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-tech-purple bg-clip-text text-transparent">
            Conference Schedule
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three days packed with insights, workshops, and networking opportunities
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {scheduleData.map((day, dayIndex) => (
            <div key={dayIndex} className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-tech-blue" />
                <h3 className="text-2xl font-bold">{day.date}</h3>
              </div>
              
              <div className="space-y-4">
                {day.sessions.map((session, sessionIndex) => (
                  <Card key={sessionIndex} className="group hover:shadow-tech transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Clock className="w-4 h-4 text-tech-blue" />
                            <span className="text-sm font-medium text-tech-blue">{session.time}</span>
                            <Badge className={getTypeColor(session.type)}>
                              {session.type}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl mb-2 group-hover:text-tech-blue transition-colors">
                            {session.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <User className="w-4 h-4" />
                            <span className="text-sm">{session.speaker}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{session.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}