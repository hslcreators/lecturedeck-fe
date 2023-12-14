import flash from "../assets/flash.svg";

export default function Feature() {
  return (
    <div className="text-center px-6 lg:px-32 pt-[139px] pb-16 lg:h-screen flex flex-col items-center justify-center font-inter">
      <h4 className="font-bold text-sm text-blue mb-2">FEATURES</h4>
      <h1 className="font-bold text-3xl lg:text-4xl">Intelligent Flashcard Generation</h1>
      <p className="text-lg lg:text-xl mt-4 mb-12 text-slate-600 lg:px-48">
        Automatically generates flashcards from uploaded notes and reading
        materials. This feature uses AI algorithms to extract key concepts,
        tailor flashcards to your learning style, and adapt to your progress.
      </p>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col items-center">
          <img src={flash} alt="flash" className="w-16"/>
          <h2 className="font-bold text-xl my-4">Extract Key Concepts</h2>
          <p className="text-slate-600 text-lg">
            Our AI system intelligently extracts the key concepts and
            information from your uploaded notes.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={flash} alt="flash" className="w-16"/>
          <h2 className="font-bold text-xl my-4">Extract Key Concepts</h2>
          <p className="text-slate-600 text-lg">
            Our AI system intelligently extracts the key concepts and
            information from your uploaded notes.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={flash} alt="flash" className="w-16"/>
          <h2 className="font-bold text-xl my-4">Extract Key Concepts</h2>
          <p className="text-slate-600 text-lg">
            Our AI system intelligently extracts the key concepts and
            information from your uploaded notes.
          </p>
        </div>
        
      </div>
    </div>
  );
}
