import NavBar from "@/components/nav-bar";
import ParallaxContent from "@/components/parallax-content";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="flex flex-col h-[100dvh] w-[100dvw]">
        <ParallaxContent />
      </div>
    </main>
  );
}
