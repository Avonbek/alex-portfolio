import Image from "next/image";

export default function About() {
  return (
    <div className="about">
      <Image
        src="/me-and-mabel-edited.png"
        alt="Picture of the author and his cat Mable"
        width={300}
        height={300}
        className="rounded-full"
      />
      About Me
      <div className="about-description">
        <h3>
          I'm a software engineer and full stack developer. <br /> I specialize
          in web-development, and have a passion for creating applications that
          incorporate AI.
        </h3>
      </div>
    </div>
  );
}
