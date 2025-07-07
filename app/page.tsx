import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-secondary-white px-4">
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 text-center leading-tight">
        PCO Skill Acquisition
      </h1>
      <p className="text-base sm:text-lg max-w-xl text-center mb-6">
        Yo, Naija! Ready to own your future? From coding to fashion design, we’re your plug for skills that pay. Join our community and start your hustle now!
      </p>
      <Link
        href="/courses"
        className="px-6 py-3 bg-accent text-primary rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-200 text-sm sm:text-base shadow-md"
      >
        Start Your Hustle
      </Link>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
        <div className="bg-deep-navy p-4 rounded-lg text-center shadow-md">
          <h3 className="text-lg sm:text-xl font-bold mb-2">Tech Skills</h3>
          <p className="text-sm sm:text-base">
            Build apps, code websites, or dive into AI with our cutting-edge courses.
          </p>
        </div>
        <div className="bg-deep-navy p-4 rounded-lg text-center shadow-md">
          <h3 className="text-lg sm:text-xl font-bold mb-2">Creative Arts</h3>
          <p className="text-sm sm:text-base">
            From fashion to music production, unleash your creative vibe.
          </p>
        </div>
      </div>
    </div>
  );
}