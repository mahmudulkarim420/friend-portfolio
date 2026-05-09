import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20" style={{ background: '#000000' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight mb-4 font-bebas" style={{
            background: "linear-gradient(90deg, #555 0%, #fff 40%, #aaa 60%, #555 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 3s linear infinite"
          }}>
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">Get to know me better</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative">
              <Image
                src="/images/img2.png"
                alt="Profile"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 sm:w-64 sm:h-64 bg-blue-600 rounded-full opacity-10 -z-10" />
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Hi, I&apos;m a passionate Web Developer & Graphic Designer
            </h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I specialize in creating visually stunning and highly functional digital experiences. With a blend of technical expertise in the MERN stack and a creative eye for graphic design, I build modern web applications and compelling visual identities that resonate with users.
            </p>

            <div className="text-base sm:text-lg text-gray-300 leading-relaxed">
              <p className="font-semibold text-white mb-3">I specialize in:</p>
              <ul className="space-y-2 ml-4">
                <li><span className="text-yellow-400">•</span> <strong>Web Development:</strong> MongoDB, Express.js, React.js, Node.js</li>
                <li><span className="text-yellow-400">•</span> <strong>Frontend Technologies:</strong> Next.js, Tailwind CSS, JavaScript</li>
                <li><span className="text-yellow-400">•</span> <strong>Graphic Design:</strong> Photoshop, Illustrator, Figma, Canva</li>
                <li><span className="text-yellow-400">•</span> <strong>UI/UX & Branding:</strong> Logo Design, Typography, User Interface Design</li>
                <li><span className="text-yellow-400">•</span> <strong>Multimedia:</strong> Video Editing, Premiere Pro, After Effects</li>
              </ul>
            </div>


            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6">
              <div className="p-3 sm:p-4 rounded-lg shadow" style={{ background: 'linear-gradient(90deg, #ff6b6b, #ffd93d)' }}>
                <p className="text-2xl sm:text-3xl font-bold text-white">50+</p>
                <p className="text-white text-xs sm:text-sm">Projects Completed</p>
              </div>
              <div className="p-3 sm:p-4 rounded-lg shadow" style={{ background: 'linear-gradient(90deg, #ff6b6b, #ffd93d)' }}>
                <p className="text-2xl sm:text-3xl font-bold text-white">30+</p>
                <p className="text-white text-xs sm:text-sm">Happy Clients</p>
              </div>
              <div className="p-3 sm:p-4 rounded-lg shadow" style={{ background: 'linear-gradient(90deg, #ff6b6b, #ffd93d)' }}>
                <p className="text-2xl sm:text-3xl font-bold text-white">10+</p>
                <p className="text-white text-xs sm:text-sm">Technologies Mastered</p>
              </div>
              <div className="p-3 sm:p-4 rounded-lg shadow" style={{ background: 'linear-gradient(90deg, #ff6b6b, #ffd93d)' }}>
                <p className="text-2xl sm:text-3xl font-bold text-white">3+</p>
                <p className="text-white text-xs sm:text-sm">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
