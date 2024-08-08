import Image from "next/image";

type AboutMeProps = {
  visibility: any;
  variants: any;
};

export default function AboutMe({ visibility, variants }: AboutMeProps) {
  return (
    <div className="about-me">
      <Image
        src="/me-and-mabel-edited.png"
        alt="Picture of the author and his cat Mable"
        width={270}
        height={270}
        className="about-me-image"
      />
      <h2 className="about-me-title">About Me</h2>
      <h3 className="about-me-description">
        I'm a software engineer and full stack developer. <br /> I specialize in
        web-development and have a passion for creating applications that
        incorporate AI.
      </h3>
    </div>
  );
}
