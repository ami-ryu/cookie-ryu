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
            CV
          </h1>
        </div>
        <div className="container py-6">
          <div className="space-y-3">
            <div>
              <h3 className="text-lg font-bold leading-8 tracking-tight">Dunamu Levvels</h3>
              <div>2022-Current</div>
            </div>
            <div className="prose max-w-none text-sm text-gray-900 dark:text-gray-400">
              𝐌𝐎𝐌𝐄𝐍𝐓𝐈𝐂𝐀 - 𝐃𝐢𝐠𝐢𝐭𝐚𝐥 𝐂𝐨𝐥𝐥𝐞𝐜𝐭𝐢𝐛𝐥𝐞𝐬 𝐬𝐞𝐫𝐯𝐢𝐜𝐞
              <br />
              𝐂𝐨𝐧𝐭𝐞𝐧𝐭𝐬 𝐌𝐚𝐧𝐚𝐠𝐞𝐫 𝐒𝐲𝐬𝐭𝐞𝐦, 𝐍𝐅𝐓 𝐌𝐢𝐧𝐭𝐢𝐧𝐠 𝐀𝐝𝐦𝐢𝐧
            </div>
          </div>
          <div className="space-y-3 pt-9">
            <div>
              <h3 className="text-lg font-bold leading-8 tracking-tight">Hyundai Motor Company</h3>
              <div>2020-2022</div>
            </div>
            <div className="prose max-w-none text-sm text-gray-900 dark:text-gray-400">
              𝐁𝐨𝐭 𝐒𝐞𝐫𝐯𝐢𝐜𝐞𝐬 (𝟐𝟎𝟐𝟏.𝟎𝟖 - 𝟐𝟎𝟐𝟐.𝟎𝟐)
              <br />
              • Identified issues in customer service and collaborated with UI/UX designers to
              define improvements. <br />
              • Designed architecture with Hybrid Rendering using Next.js. <br />
              • Efficient state management with Context API. <br />
              • Improved productivity using CSS-in-JS Emotion. <br />
              • Ensured stable management of complex data structures and prevented type-related
              errors by using TypeScript. <br />
              • Enhanced speed and performance by implementing a chat system using grpc and
              grpc-web.
              <br />
              • Implemented unit tests using Jest. <br />
              • Established an efficient deployment pipeline using Docker, GitHub Actions, and AWS
              EC2.
              <br />
              <br />
              𝐀𝐈 𝐕𝐨𝐢𝐜𝐞 𝐀𝐬𝐬𝐢𝐬𝐭𝐚𝐧𝐭 𝐁𝐮𝐢𝐥𝐝𝐞𝐫 (𝟐𝟎𝟐𝟏.𝟎𝟐 - 𝟐𝟎𝟐𝟏.𝟎𝟕)
              <br />
              • Proactively introduced GraphQL due to frequent data structure changes between client
              and server. <br />
              • Efficiently managed large and complex data using Apollo Client for state management,
              caching, and loading processing.
              <br />
              • Collaborated with server developers to design optimized GraphQL queries.
              <br />• Improved existing MongoDB tables and designed new tables based on new
              requirements. <br />• Implemented UI using React, TypeScript, and Styled-Components.
              <br />
              <br />
              𝐀𝐫𝐜𝐡𝐞𝐫𝐲 𝐍𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐓𝐞𝐚𝐦 𝐀𝐈 𝐀𝐧𝐚𝐥𝐲𝐬𝐢𝐬 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦 (𝟐𝟎𝟐𝟎.𝟎𝟗 - 𝟐𝟎𝟐𝟏.𝟎𝟏) <br />• Led as a
              Frontend Lead, overseeing UI/UX design, user testing, POC, development, and
              deployment. <br />
              • Successfully launched, resulting in analysis 10 times faster than the previous
              method, contributing to the medal haul in the Tokyo Olympics. <br />
              • Managed state using Context API. <br2 />
              • Developed an algorithm to provide users with estimated upload and analysis times
              based on the binary size of videos. <br />• Implemented a user-friendly interface
              using React, TypeScript, and Styled-Components. <br />
              <br />
              𝐎𝐭𝐡𝐞𝐫 𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬 <br />• Hyundai Motor's Enterprise Translation Service <br />• Hyundai
              Motor's Enterprise Wheel Design Platform <br />• OCR Analysis Log Dashboard
            </div>
          </div>
          <div className="space-y-3 pt-9">
            <div>
              <h3 className="text-lg font-bold leading-8 tracking-tight">Kakao Corp</h3>
              <div>2015-2020</div>
            </div>
            <div className="prose max-w-none text-sm text-gray-900 dark:text-gray-400">
              𝐊𝐚𝐤𝐚𝐨𝐓𝐚𝐥𝐤 𝐎𝐩𝐞𝐧 𝐂𝐡𝐚𝐭𝐛𝐨𝐭 (𝟐𝟎𝟐𝟎.𝟎𝟐 - 𝟐𝟎𝟐𝟎.𝟎𝟒)
              <br />
              • UI implementation using HTML, CSS, SASS, and Web API.
              <br />
              • User interface development using React, TypeScript, and Styled-Components.
              <br />
              • State management with Context API.
              <br />
              • Successful launch resulting in the automation of administrative tasks.
              <br />
              <br />
              𝐂𝐡𝐚𝐭𝐛𝐨𝐭 𝐁𝐮𝐠 𝐓𝐫𝐚𝐜𝐤𝐢𝐧𝐠 𝐓𝐨𝐨𝐥 (𝟐𝟎𝟏𝟗.𝟎𝟗 - 𝟐𝟎𝟐𝟎.𝟎𝟏)
              <br />
              • Introduced CNCF's OpenTracing to improve team logging systems.
              <br />
              • Designed and developed the Bug Tracking System for rapid failure identification
              through data processing and visualization.
              <br />
              • Reduced fault recovery time by over 10 times.
              <br />
              • Transitioned to React and Redux for better maintainability and reusability with
              growing user numbers.
              <br />
              <br />
              𝐊𝐚𝐤𝐚𝐨 𝐂𝐮𝐬𝐭𝐨𝐦𝐞𝐫 𝐒𝐞𝐫𝐯𝐢𝐜𝐞 𝐂𝐡𝐚𝐭𝐛𝐨𝐭 𝐁𝐮𝐢𝐥𝐝𝐞𝐫, 𝐄𝐧𝐠𝐢𝐧𝐞 (𝟐𝟎𝟏𝟖.𝟎𝟓 - 𝟐𝟎𝟏𝟗.𝟎𝟖) <br />• Engine and
              platform design to convert large FAQ data files into consultative chatbots.
              <br />• Contributed to a 40% reduction in call volume for customer service
              representatives by introducing this model to the 'Kakao Customer Service' chatbot.
              <br />
              • Frontend implementation using React and Redux.
              <br />
              • Improved service performance through asynchronous queues (Celery) and
              multiprocessing for large-scale computing tasks.
              <br />
              • Recognized as the first South Korean chatbot engine for large FAQ data, leading to a
              patent application in April 2019. <br />
              <br />
              𝐊𝐚𝐤𝐚𝐨 𝐄𝐝𝐢𝐭𝐨𝐫 𝐒𝐭𝐚𝐭𝐢𝐬𝐭𝐢𝐜𝐬 𝐃𝐚𝐬𝐡𝐛𝐨𝐚𝐫𝐝 (𝟐𝟎𝟏𝟖.𝟎𝟏 - 𝟐𝟎𝟏𝟖.𝟎𝟒) <br />• UI implementation using
              HTML, CSS, and SASS.
              <br />
              • Component and logic development using React and Redux.
              <br />• Data visualization using HighChart, d3.js, and open-source libraries.
              <br />
              <br />
              𝐊𝐚𝐤𝐚𝐨 (𝐟𝐨𝐫𝐦𝐞𝐫𝐥𝐲 𝐃𝐚𝐮𝐦) 𝐍𝐞𝐰𝐬, 𝐒𝐧𝐚𝐜𝐤 𝐂𝐨𝐧𝐭𝐞𝐧𝐭 (𝟐𝟎𝟏𝟓.𝟏𝟎 - 𝟐𝟎𝟏𝟕.𝟏𝟐) <br />• UI
              implementation using HTML, CSS, and SASS.
              <br />
              • Animation implementation and optimization using JavaScript and jQuery.
              <br />
              • Improved performance, speed, and development productivity through refactoring.
              <br />• Engaged in content planning and management.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
