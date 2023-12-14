export default function Hero() {
  return (
    <div className="text-center px-6 lg:px-48 pt-[75px] h-screen flex flex-col items-center justify-center font-inter">
      <h1 className="text-4xl lg:text-7xl font-black mb-8">
        <span className="text-blue">Create</span> flashcards with ease using{" "}
        <span className="text-blue">LectureDeck</span>
      </h1>
      <p className="text-xl text-slate-500 mb-8">
        Embrace effortless learning and achieve your academic goals with the
        power of AI.
      </p>

      <div className="flex flex-col lg:flex-row">
        <button className="px-8 py-3 text-xl mr-8 border-slate-400 bg-blue text-white font-bold rounded-lg w-full lg:w-auto mb-4 lg:mb-0">
          Upload Your Notes Now
        </button>
        <button className="px-6 py-3 text-xl border-2 border-slate-400 text-slate-700 font-bold rounded-lg w-full lg:w-auto">
          Learn More
        </button>
      </div>
    </div>
  );
}
