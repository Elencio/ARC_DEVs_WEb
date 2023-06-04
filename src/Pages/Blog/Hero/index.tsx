import {options} from "../data"
import { BlockWrapper, Heading, HeroSection, Subheading, Tag} from "./styles"

export function Hero() {

  return(
  <>
     <HeroSection>
        <Heading>Welcome to our website</Heading>
        <Subheading>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subheading>
      </HeroSection>
      <BlockWrapper>
        {options.map((option) => (
          <Tag
            key={option}
          >
            {option}
          </Tag>
        ))}
      </BlockWrapper>
  </>
  )
 
}