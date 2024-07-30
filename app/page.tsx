import NavBar from "@/components/custom/nav-bar";
import ParallaxContent from "@/components/custom/parallax-content";
import { CustomBackgroundGradient } from "@/components/custom/custom-background-gradient";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Home() {
  return (
    <main>
      {/* <BackgroundGradientAnimation
        interactive={false}
        className="fixed inset-0 z-0"
      /> */}
      <CustomBackgroundGradient
        interactive={false}
        className="fixed inset-0 z-0"
      />
      <NavBar />
      <div className="absolute flex flex-col h-[100dvh] w-[100dvw]">
        <ParallaxContent />
      </div>
    </main>
  );
}
