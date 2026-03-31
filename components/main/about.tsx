export const About = () => {
  return (
    <section
      id="about-me"
      className="relative flex flex-col items-center justify-center py-24 px-6 text-center text-white overflow-hidden"
    >

      {/* ✨ Glow */}
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full -z-10" />

      {/* 🔤 Title */}
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        About{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Me
        </span>
      </h2>

      {/* 💬 Content */}
      <p className="max-w-3xl text-gray-300 text-lg leading-relaxed">
  I’m Devanupriy Jain, a passionate Full Stack Developer and a 1st year BTech
  Computer Science student at VIT.

  <br /><br />

  I focus on building fast, modern, and scalable web applications using
  technologies like React, Next.js, and Tailwind CSS.

  <br /><br />

  I enjoy solving real-world problems through code and constantly learning new
  technologies. Currently, I’m improving my skills in development, data
  structures, and building impactful projects.
</p>

    </section>
  );
};