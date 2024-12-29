import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-800 text-white min-h-screen">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-5xl font-bold">Key Family</h1>
        <p className="text-xl mt-4">Dedicated. Resilient. Determined.</p>
      </header>

      {/* Family Members Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-8 py-16">
        {/* Amy Key */}
        <div className="flex items-center space-x-4">
          <div className="w-24 h-24 bg-gray-400 rounded-full"></div>
          <div>
            <h2 className="text-2xl font-semibold">Amy Key</h2>
            <p>Amy Key is a ...</p>
          </div>
        </div>

        {/* Ethan Key */}
        <div className="flex items-center space-x-4">
          <div className="w-24 h-24 bg-gray-400 rounded-full"></div>
          <div>
            <h2 className="text-2xl font-semibold">Ethan Key</h2>
            <p>Ethan Key is a ...</p>
          </div>
        </div>

        {/* Bryce Key */}
        <div className="flex items-center space-x-4">
          <div className="w-24 h-24 bg-gray-400 rounded-full"></div>
          <div>
            <h2 className="text-2xl font-semibold">Bryce Key</h2>
            <p>Bryce Key is a ...</p>
          </div>
        </div>
      </section>

      {/* Animated Images Section */}
      <section className="flex items-center justify-center h-96 bg-gray-700">
        <p className="text-xl">Images with animations</p>
      </section>
    </div>
  );
}
