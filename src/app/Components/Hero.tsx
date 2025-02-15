export default function Hero() {
  return (
    <section className=" text-center py-16 bg-opacity-90">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-indigo-800">Welcome to My Website</h2>
        <p className="text-black font-bold text-lg italic mt-4">
          We provide the best services for you. Our team ensures high-quality solutions to meet your needs.
        </p>
        <p className="text-black font-bold text-lg mt-2 italic">
          "Your satisfaction is our priority. Let's build something amazing together!"
        </p>
        <button className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-lg shadow-md hover:bg-indigo-500">
          Get Started
        </button>
      </div>
    </section>
  );
}
