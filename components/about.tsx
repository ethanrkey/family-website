import { TypeAnimation } from 'react-type-animation';

export default function About() {
    return (
        <div className="relative overflow-x-hidden pt-6">
            <h2 className="text-2xl text-center font-bold">About Me</h2>
            <div className="mx-auto mt-4 max-w-3xl pb-6">
                {/* Paragraph 1 */}
                <TypeAnimation
                sequence={[
                    "I am a passionate and driven Computer Science student at Boston University, expected to graduate in May 2026. I have a strong foundation in programming, software development, and problem-solving, coupled with a curiosity for learning and applying new technologies. My academic journey has been marked by dedication, perseverance, and a commitment to achieving excellence in all aspects of my work.",
                ]}
                wrapper="p"
                cursor={true}
                repeat={0}
                className="text-center text-lg leading-8"
                />

                {/* Paragraph 2 */}
                <TypeAnimation
                sequence={[
                    22000, // Wait for 5 seconds to start typing the next paragraph
                    "I thrive on building innovative solutions that combine technical expertise with creativity. Whether it's developing user-friendly applications, exploring full-stack development, or designing efficient algorithms, I enjoy tackling challenges that have a meaningful impact. I am particularly drawn to projects that intersect technology with real-world usability, finding fulfillment in crafting solutions that improve user experiences and solve practical problems.",
                ]}
                wrapper="p"
                cursor={true}
                repeat={0}
                className="text-center text-lg leading-8 mt-4"
                />

                {/* Paragraph 3 */}
                <TypeAnimation
                sequence={[
                    39000, // Wait for 12 seconds to start typing the final paragraph
                    "Outside of academics, I enjoy exploring creative tech projects, experimenting with new frameworks, and continuously honing my skills in software engineering and development. Collaboration and continuous learning are at the core of my approach, and I take pride in bringing a fresh perspective and dedication to everything I work on. I am excited to grow further and contribute to impactful projects that push the boundaries of innovation.",
                ]}
                wrapper="p"
                cursor={true}
                repeat={0}
                className="text-center text-lg leading-8 mt-4"
                />
            </div>
        </div>
      );
  }