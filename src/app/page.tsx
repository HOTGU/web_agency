import FramerText from "@/components/animation/FramerText";
import Container from "@/components/container";
import Lottie from "@/components/lottie";
import Json from "@public/animation/main.json";

export default function Home() {
  return (
    <div>
      <div className="">
        <Container>
          <div className="flex h-screen">
            <div className="w-1/2 flex items-center justify-center">
              <FramerText text="hello world" type="title" />
            </div>
            <div className="w-1/2">
              <Lottie data={Json} loop={false} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
