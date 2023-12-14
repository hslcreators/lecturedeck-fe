interface FeatureProps {
  main: string;
  title: string;
  description: string;
  firstFeatureIcon: string;
  firstFeatureTitle: string;
  firstFeatureDescription: string;
  secondFeatureIcon: string;
  secondFeatureTitle: string;
  secondFeatureDescription: string;
  thirdFeatureIcon: string;
  thirdFeatureTitle: string;
  thirdFeatureDescription: string;
}

export default function Feature({main, title, description, firstFeatureIcon, firstFeatureTitle, firstFeatureDescription, secondFeatureIcon, secondFeatureTitle, secondFeatureDescription, thirdFeatureIcon, thirdFeatureTitle, thirdFeatureDescription}: FeatureProps) {
  return (
    <div className="text-center px-6 lg:px-32 pt-[139px] pb-16 lg:h-screen flex flex-col items-center justify-center font-inter">
      {main != "" ? (
        <h4 className="font-bold text-sm text-blue mb-2">FEATURES</h4>
      ) : ""
      }
      <h1 className="font-bold text-3xl lg:text-4xl">{title}</h1>
      <p className="text-lg lg:text-xl mt-4 mb-12 text-slate-600 lg:px-48">
        {description}
      </p>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col items-center">
          <img src={firstFeatureIcon} alt="flash" className="w-16"/>
          <h2 className="font-bold text-xl my-4">{firstFeatureTitle}</h2>
          <p className="text-slate-600 text-lg">
            {firstFeatureDescription}
          </p>
        </div>       
        <div className="flex flex-col items-center">
          <img src={secondFeatureIcon} alt="flash" className="w-16"/>
          <h2 className="font-bold text-xl my-4">{secondFeatureTitle}</h2>
          <p className="text-slate-600 text-lg">
            {secondFeatureDescription}
          </p>
        </div>       
        <div className="flex flex-col items-center">
          <img src={thirdFeatureIcon} alt="flash" className="w-16"/>
          <h2 className="font-bold text-xl my-4">{thirdFeatureTitle}</h2>
          <p className="text-slate-600 text-lg">
            {thirdFeatureDescription}
          </p>
        </div>       
      </div>
    </div>
  );
}
