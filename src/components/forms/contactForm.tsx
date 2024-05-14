import React from "react";
import Form from "./form";
import Input from "../inputs/input";

import { contact } from "@/actions/contactAction";
import Textarea from "../inputs/textarea";

const ContactForm = () => {
  return (
    <Form
      action={contact}
      buttonLabel="문의하기"
      className="flex flex-col justify-between h-full"
    >
      <div className="space-y-4 flex-1">
        <div className="flex gap-4">
          <Input
            name="company"
            label="회사명*"
            placeholder="(주)한국"
            required
          />
          <Input name="client" label="고객명*" placeholder="홍길동" required />
        </div>
        <div className="flex gap-4">
          <Input
            name="phone"
            label="전화번호*"
            placeholder="01012345678"
            required
          />
          <Input
            name="email"
            label="이메일*"
            placeholder="email@email.com"
            required
          />
        </div>
        <Textarea
          name="purpose"
          label="문의내용*"
          placeholder="홈페이지를 만드는 목적이나 필요한 기능 등 원하는 바를 자세히 적어주세요"
          required
        />

        <Input name="page" label="필요한 페이지수를 적어주세요*" required />
        <Input
          name="currentUrl"
          label="운영중인 사이트가 있다면 URL 주소를 적어주세요(선택)"
        />
        <Input
          name="referenceUrl"
          label="참고할 사이트가 있다면 URL 주소를 적어주세요(선택)"
        />
      </div>
    </Form>
  );
};

export default ContactForm;
