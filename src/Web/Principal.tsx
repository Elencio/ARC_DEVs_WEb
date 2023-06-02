import { RobotSection } from "./RobotSection";
import { OurFeaturesSection } from "./OurFeatures";
import { HowItWorksSection } from "./Works";
import { SectionWhyChooose} from "./ChooseFillance";
import { GetStartedTodaySection } from "./Getstarted";
import { Footer } from "./Footer";
import { FounderCard } from "./FounderCard";
import { MissionVision } from "./Mission";
import { Header } from "./header";




export function Principal(){
  return (
    <div>
       <Header />
       <RobotSection />
       <OurFeaturesSection />
       <HowItWorksSection />
       <SectionWhyChooose />
       <MissionVision />
       <FounderCard />
       <GetStartedTodaySection />
       <Footer />
    </div>
  )
}