import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Résumé
          </h1>
        </div>
        <div className="container py-6">
          <div className="space-y-3">
            <div>
              <h2 className="text-lg font-bold leading-8 tracking-tight">SUMMARY</h2>
            </div>
            <div className="prose max-w-none text-sm text-gray-900 dark:text-gray-400">
              • Software Engineer with 8+ years of experience in web front-end, server, ui/ux and
              automation.
              <br />• Experience in working with diverse professionals from designers, AI
              researchers, product managers, and marketers, to business/strategy experts.
              <br />• Favorite keywords: user-centric, business-driven, optimization, automation and
              collaborative.
              <br />• Proficient in TypeScript, Next.js, Testing Tools, HTML, CSS, NodeJS and
              Python.
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-bold leading-8 tracking-tight">EXPERIENCE</h2>
            <div>
              <h3 className="text-lg font-bold leading-8 tracking-tight">
                Senior Software Engineer, Dunamu Levvels
              </h3>
              <div>Feb 2022 - Current</div>
              <div className="prose max-w-none text-sm text-gray-900 dark:text-gray-400">
                Levvels is a Joint Venture between Dunamu and Hybe, focusing on the cross-over of
                Blockchain and Entertainment. As a founding member, I led the front-end engineering.
              </div>
            </div>
            <div className="prose max-w-none text-sm text-gray-900 dark:text-gray-400">
              Momentica (Feb 2022 - May 2024)
              <br />
              Momentica is a marketplace for NFTs of premier K-Pop Artists used by 270k people.
              <br />
              • Developed the payment module with testable code and real-time monitoring,
              contributing stable revenue with zero errors over 2 years.
              <br />• Created a family registration system allowing minors to join, expanding the
              user base and increasing revenue by extending services to underage users.
              <br />
              • Led the planning and development of a Invite Friends event, securing up to 20,000
              new sign-ups per event (conducted a total of 10 events).
              <br />• Developed an algorithm and automation tool to expedite NFT merchandise
              production, reducing processing time by 91% (from 1hour to 5mins).
              <br />• Enhanced development productivity through reusable code and automated
              workflow.
            </div>
          </div>
          <div className="space-y-3 pt-9">
            <div>
              <h3 className="text-lg font-bold leading-8 tracking-tight">
                Software Engineer, Hyundai (AI Research Lab)
              </h3>
              <div>Apr 2020 - Feb 2022</div>
              <div className="prose max-w-none text-sm text-gray-900 dark:text-gray-400">
                Hyundai AIRS is the AI-focused division of Hyundai Motor Group, dedicated to
                developing innovative AI technologies for the automotive and mobility industries.
              </div>
            </div>
            <div className="prose max-w-none text-sm text-gray-900 dark:text-gray-400">
              Chatbot / Voice AI Assistant Builder (Feb 2021 - Feb 2022)
              <br />
              • Led the frontend development of the Chatbot and Builder, collaborating with UI/UX
              designers and conducting multiple POCs and user interviews to enhance user experience.
              <br />• Developed reusable and efficient architecture through caching and optimized
              data queries by proactively introducing GraphQL and Apollo Client.
              <br />• Reduced build and deployment overhead using Docker, GitHub Actions, and Cloud
              services.
              <br />• Developed a type-safe code and reusable UI using Next.js, TypeScript,
              Styled-Components, ensuring quality with unit tests.
              <br />
              <br />
              AI Analysis Platform for the Korean National Archery Team (Sep 2020 - Jan 2021)
              <br />
              • Frontend Lead, overseeing UI/UX design, user testing, POC, development, and
              deployment.
              <br />• Successfully launched, resulting in analysis 10 times faster than the previous
              method, contributing to the medal haul in the Tokyo Olympics.
              <br />• Developed an algorithm to provide users with estimated upload and analysis
              times based on the binary size of videos.
              <br />• Implemented a user-friendly interface using React, TypeScript, and
              Styled-Components.
              <br />
              <br />
              Miscellaneous
              <br />• Hyundai Motor's Enterprise Translation Service
              <br />• Hyundai Motor's Enterprise Wheel Design Platform
              <br />• OCR Analysis Log Dashboard
              <br />
            </div>
          </div>
          <div className="space-y-3 pt-9">
            <div>
              <h3 className="text-lg font-bold leading-8 tracking-tight">
                Software Engineer, Kakao
              </h3>
              <div>Oct 2015 - Apr 2020</div>
            </div>
            <div className="prose max-w-none text-sm text-gray-900 dark:text-gray-400">
              KakaoTalk OpenChat Bot (Feb 2020 - Apr 2020)
              <br />
              • Implemented a user-friendly interface using React, TypeScript, and
              Styled-Components.
              <br />• Successful launched service automating of administrative tasks in large-scale
              Kakaotalk chat.
              <br />
              <br />
              Chatbot Bug Tracking Tool (Sep 2019 - Jan 2021)
              <br />
              • Designed and developed a Bug Tracking System, improving fault recovery time by 10x
              through rapid failure identification with data processing and visualization.
              <br />• Introduced and implemented CNCF's OpenTracing to the team to improve the
              logging system.
              <br />• Migrated existing codebase to React and Redux for better reusability and
              maintainability with growing user numbers.
              <br />
              <br />
              Kakao Customer Service Chatbot Builder, Engine (May 2018 - Oct 2019)
              <br />
              • Developed an engine and platform converting large FAQ data files into consultative
              chatbots.
              <br />• Contributed to a 40% reduction in call volume for customer service
              representatives by introducing this model to the 'Kakao Customer Service' chatbot.
              <br />• Improved service performance through asynchronous queues (Celery) and
              multiprocessing for large-scale computing tasks.
              <br />• Recognized as the first South Korean chatbot engine for large FAQ data,
              leading to a patent application in April 2019.
              <br />
              <br />
              Kakao Editor Statistics Dashboard / Kakao News (Oct 2015 - Apr 2018)
              <br />• Developed a data visualization using HighChart, d3.js, and open-source
              libraries.
              <br />• Migrated existing codebase to React and Redux for reusable components and
              logic.
              <br />• Improved performance, speed, and development productivity through refactoring.
              <br />
              <br />
            </div>
          </div>
          <div className="space-y-3 pt-9">
            <h2 className="text-lg font-bold leading-8 tracking-tight">EDUCATION</h2>
            <div>
              <h3 className="text-lg font-bold leading-8 tracking-tight">NHN Next Institute</h3>
              <div>Mar 2014 - Feb 2016</div>
              <div className="prose max-w-none text-sm text-gray-900 dark:text-gray-400">
                NHN Next Institute is a college created and funded by NAVER Connect Foundation
                focusing on cultivating future software engineers. NAVER is “the search” company of
                Korea and one of the largest tech companies in Asia that also owns Line.
              </div>
              <div className="prose max-w-none text-sm text-gray-900 dark:text-gray-400">
                • Inaugural class with Full Scholarship worth of approximately $30,000.
                <br />• Projects: Google Maps for the Vulnerable Road Users, Recommendation System
                for Movie Merchandise.
                <br />• Specialization on Web Front-end & Server Engineering with Courses: OOP, Data
                Structures, Algorithms, OS, Network, Web Front/Server, Database, etc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
