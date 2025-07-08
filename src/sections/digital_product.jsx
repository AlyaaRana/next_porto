const DigitalProduct = () => {
  const products = [
    {
      title: "Gak Kuliah IT, Gak Masalah",
      description:
        "Panduan masuk dunia Flutter dari nol, cocok buat pemula yang gak punya background IT.",
      image: "/ebook/flutter-cover.jpg",
      link: "https://gumroad.com/l/your-product-link",
    },
    {
      title: "Coming Soon: Dev Girl Diary",
      description:
        "Cerita chaos, growth, dan developer life ala cewek Gen Z. Stay tuned!",
      image: "/ebook/devgirl-cover.jpg",
      link: "#",
    },
    {
      title: "Notion Template: Daily Dev Planner",
      description:
        "Template gratis buat nyusun waktu belajar, nulis log project, dan manage coding life.",
      image: "/ebook/notion-cover.jpg",
      link: "#",
    },
  ];

  return (
    <div className="w-full" style={{ backgroundColor: "#1f1f1f" }}>
      <section className="relative w-full flex justify-center text-white overflow-hidden px-0 py-[20px]">
        <div className="w-full max-w-7xl text-center space-y-6">
          <div className="h3">Digital Product</div>
          <p>
            Tools, eBooks, and little things I built in my orbit. Everything you find here is meant to help Gen Z devs grow.
          </p>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-[#111] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-50 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-sm text-gray-400 mb-4">
                  {product.description}
                </p>
                <a
                  href={product.link}
                  target="_blank"
                  className="inline-block text-sm text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition"
                >
                  View Product
                </a>
              </div>
            </div>
          ))}
        </div>
        </div>

       
      </section>
    </div>
  );
};

export default DigitalProduct;
