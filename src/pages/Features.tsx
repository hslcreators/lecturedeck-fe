import Feature from "@/components/Features/Feature";
import flash from '@/assets/flash.svg';
import message from '@/assets/message.svg';
import command from '@/assets/command.svg'
import bar from '@/assets/bar.svg'
import bg from '@/assets/bg-resources.png'

export default function Features() {
  return (
    <div
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
    }}>
      <Feature
       main="show" 
       title="Intelligent Flashcard Generation"
       description="Automatically generates flashcards from uploaded notes and reading materials. This feature uses AI algorithms to extract key concepts, tailor flashcards to your learning style, and adapt to your progress."
       firstFeatureIcon={flash}
       firstFeatureTitle="Extract Key Concepts"
       firstFeatureDescription="Our AI system intelligently extracts the key concepts and information from your uploaded notes."
       secondFeatureIcon={command}
       secondFeatureTitle="Tailored to Your Learning Style"
       secondFeatureDescription="Measure what matters with LectureDeck’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
       thirdFeatureIcon={bar}
       thirdFeatureTitle="Adaptive Learning"
       thirdFeatureDescription="Measure what matters with LectureDeck’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
      />
      <Feature 
       main=""
       title="Effortless Note Upload and Management"
       description="Simplifies the process of uploading and managing notes in various formats. It includes support for diverse file formats, drag-and-drop functionality, and seamless integration with your existing note-taking habits."
       firstFeatureIcon={flash}
       firstFeatureTitle="Wide Format Support"
       firstFeatureDescription="Upload your notes in various formats, including Word documents, PDFs, and even spreadsheets."
       secondFeatureIcon={command}
       secondFeatureTitle="Drag-and-Drop Functionality"
       secondFeatureDescription="Upload your notes with ease using our intuitive drag-and-drop interface."
       thirdFeatureIcon={bar}
       thirdFeatureTitle="Seamless Integration"
       thirdFeatureDescription="Our system seamlessly integrates with your existing note-taking habits and workflow."
      />
      <Feature 
       main=""
       title="Personalized Study Plan and Progress Tracking"
       description="Provides a customized study plan tailored to your uploaded notes and learning goals. It also offers real-time progress tracking and gamified elements to enhance motivation and engagement."
       firstFeatureIcon={message}
       firstFeatureTitle="Customized Study Plan"
       firstFeatureDescription="Receive a personalized study plan based on your uploaded notes and learning goals."
       secondFeatureIcon={command}
       secondFeatureTitle="Real-Time Progress Tracking"
       secondFeatureDescription="Monitor your progress and identify areas for improvement with real-time feedback."
       thirdFeatureIcon={bar}
       thirdFeatureTitle="Gamified Learning Experience"
       thirdFeatureDescription="Engage with gamified elements to make learning fun and motivating."
      />
      <Feature 
       main=""
       title="Interactive Flashcards for Enhanced Learning"
       description="Provides multimedia-rich flashcards with interactive exercises. It utilizes the proven spaced repetition algorithm to optimize learning and retention, making the learning process more engaging and effective."
       firstFeatureIcon={command}
       firstFeatureTitle="Multimedia Enhancements"
       firstFeatureDescription=" Experience flashcards enriched with images, audio, and video for a more engaging learning experience."
       secondFeatureIcon={bar}
       secondFeatureTitle="Spaced Repetition Algorithm"
       secondFeatureDescription="Utilize the proven spaced repetition algorithm to optimize learning and retention."
       thirdFeatureIcon={message}
       thirdFeatureTitle="Interactive Exercises"
       thirdFeatureDescription="Engage with interactive exercises to reinforce understanding and apply concepts."
      />
      <Feature 
       main=""
       title="Comprehensive Support and Community Engagement"
       description="Provides comprehensive support resources, an active learning community, and dedicated support team assistance. It ensures that users have access to the help they need when they need it, fostering a sense of community and support among learners."
       firstFeatureIcon={command}
       firstFeatureTitle="Self-Service Help Center"
       firstFeatureDescription="Access a comprehensive help center with FAQs, tutorials, and troubleshooting guides."
       secondFeatureIcon={bar}
       secondFeatureTitle="Active Learning Community"
       secondFeatureDescription="Join our vibrant community forum to connect with fellow learners and share knowledge."
       thirdFeatureIcon={message}
       thirdFeatureTitle="Dedicated Support Team Assistance"
       thirdFeatureDescription="Reach out to our dedicated support team for personalized assistance and feedback."
      />
    </div>
  );
}
