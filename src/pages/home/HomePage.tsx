import { Hero } from './Hero'
import { AboutSection } from './AboutSection'
import { LearningPathsSection } from './LearningPathsSection'
import { ChallengesSection } from './ChallengesSection'
import { GamificationSection } from './GamificationSection'
import { NewsletterSection } from './NewsletterSection'

export function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <LearningPathsSection />
      <ChallengesSection />
      <GamificationSection />
      <NewsletterSection />
    </main>
  )
}
