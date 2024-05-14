import Form from "./form";
import Input from "../inputs/input";

import { signup } from "@/actions/authAction";

const SignupForm = () => {
  return (
    <Form
      action={signup}
      buttonLabel="회원가입"
      className=" max-w-64 space-y-4 mx-auto"
    >
      <Input name="id" type="text" required placeholder="아이디" />
      <Input name="password" type="password" required placeholder="비밀번호" />
      <Input
        name="verifyPassword"
        type="password"
        required
        placeholder="비밀번호 확인"
      />
    </Form>
  );
};

export default SignupForm;
