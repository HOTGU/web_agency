import Container from "@/components/container";
import ContactForm from "@/components/forms/contactForm";
import Image from "next/image";

import codingAnimation from "@public/animation/coding.json";
import Lottie from "@/components/lottie";

const ContactPage = () => {
  return (
    <Container>
      <div className="flex h-[600px] shadow-xl">
        <div className="w-2/5 h-full bg-purple-50 flex flex-col items-center justify-between p-4">
          <Lottie data={codingAnimation} width={400} height={400} />
          <div className="self-start">
            <h1 className="text-2xl font-bold mb-4 text-purple-600">
              문의하기
            </h1>
            <ol className="text-sm text-neutral-500 space-y-2 list-disc ml-4">
              <li>
                문의 양식을 자세히 적을수록, 상담내용이 짧아질 수 있습니다.
              </li>
              <li>저희는 1인 1프로젝트만 진행하고 있습니다.</li>
              <li>시안을 받아보고 마음에 안 드시면 100% 환불 가능합니다.</li>
            </ol>
          </div>
        </div>
        <div className="w-3/5 h-full px-10 py-4 overflow-y-auto">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;
