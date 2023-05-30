import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./Web/header";
import { RobotSection } from "./Web/RobotSection";
import { OurFeaturesSection } from "./Web/OurFeatures";
import { HowItWorksSection } from "./Web/Works";
import { WhyChooseIntellifinanceSection } from "./Web/ChooseFillance";
import { GetStartedTodaySection } from "./Web/Getstarted";
import { Footer } from "./Web/Footer";
import { FounderCard } from "./Web/FounderCard";
import { MissionVision } from "./Web/Mission";




export function App(){
  return(
    <ThemeProvider theme={defaultTheme}>
      <div>
       <Header />
       <RobotSection />
       <OurFeaturesSection />
       <HowItWorksSection />
       <WhyChooseIntellifinanceSection />
       <MissionVision />
       <FounderCard />
       <GetStartedTodaySection />
       <Footer />
      <GlobalStyle />
      </div>
    </ThemeProvider>
  )
}
