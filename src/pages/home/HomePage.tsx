import { Hero } from './Hero'
import { MaterialDownloadSection } from './MaterialDownloadSection'
import { AboutSection } from './AboutSection'
import { LearningPathsSection } from './LearningPathsSection'
import { ChallengesSection } from './ChallengesSection'
import { GamificationSection } from './GamificationSection'
import { NewsletterSection } from './NewsletterSection'

export function HomePage() {
  return (
    <main>
      <Hero />
      <MaterialDownloadSection />
      <AboutSection />
      <LearningPathsSection />
      <ChallengesSection />
      <GamificationSection />
      <NewsletterSection />
    </main>
  )
}
