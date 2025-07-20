const Languages = () => {
  const langs = [
    { lang: "Bahasa Indonesia", level: "Native", percent: 100 },
    { lang: "English", level: "Intermediate", percent: 50 },
    { lang: "Chinese", level: "Beginner", percent: 30 },
  ];

  return (
    <div className="w-full" style={{ backgroundColor: "#1f1f1f" }}>
      <section className="relative w-full flex justify-center text-white overflow-hidden px-4 md:px-8 lg:px-0 pt-[60px] pb-[100px]">
        <div className="w-full max-w-7xl text-center space-y-6">
          <div className="text-center mb-12">
            <p className="text-4xl font-bold">Languages</p>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto px-4 md:px-0">
              A multilingual communicator with diverse language capabilities that support global collaboration and outreach.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-6 px-4 md:px-0">
            {langs.map((item, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span className="text-lg">{item.lang}</span>
                  <span className="text-sm text-gray-400">{item.level}</span>
                </div>
                <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-yellow-400 h-full rounded-full transition-all duration-300"
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Languages;
