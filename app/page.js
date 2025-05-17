export default function Home() {
  return (
    <div>
      <div
        className="h-[70vh] bg-fixed sm:bg-cover bg-contain bg-center flex items-center justify-center text-white text-4xl font-bold"
        style={{
          backgroundImage: "url('/Developer.png')",
        }}
      >
        <h1 className="text-white sm:text-5xl font-raleway font-bold text-center">
          Naing Lin Maung - Software Developer
        </h1>
      </div>
      <div className="m-5 sm:m-20 text-center">
        <span>
          I am a developer currently working at Feral Interactive, working on
          porting game titles to mobile platforms, primarily iOS, through a C++
          library. This has required me to write code optimised for mobile
          platforms while adapting to design requirements for new controls and
          input methods and ensuring the game works on various devices with
          different processing capabilities and screen resolutions. At Feral
          Interactive, I have worked on multiple games alongside multiple
          departments (design, QA, etc.) to develop new features and fix bugs.
          Before this, I had the opportunity to work on creating live services
          solutions involving a front-end website and databases, as well as
          developing a multiplayer VR representation of an in-construction
          building. I have developed both my general game development skills and
          my programming skills, more specifically through my studies at the
          Algonquin College Game Development program and at the University of
          Westminster Computer Games Development course.
        </span>
      </div>
    </div>
  );
}
