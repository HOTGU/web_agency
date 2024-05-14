import Form from "./form";
import Input from "../inputs/input";

import { login } from "@/actions/authAction";

const LoginForm = () => {
  return (
    <Form action={login} buttonLabel="로그인" className=" max-w-64 mx-auto">
      <div className="space-y-4 mb-4">
        <Input name="id" type="text" required label="아이디" />
        <Input name="password" type="password" required label="비밀번호" />
      </div>
    </Form>
  );
};

export default LoginForm;
