export default function Hero() {
  return (
    <section className="text-center py-8 bg-opacity-90">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-4xl font-bold text-orange-600">Welcome to My Website</h2>
        <p className="text-black font-bold text-lg italic mt-4">
          We provide the best services for you. Our team ensures high-quality solutions to meet your needs.
        </p>
        <p className="text-black font-bold text-lg mt-2 italic">
          &quot;Your satisfaction is our priority. Let&apos;s build something amazing together!&quot;
        </p>
        <button className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-lg shadow-md hover:bg-indigo-500">
          Get Started
        </button>
      </div>
    </section>
  );
}
