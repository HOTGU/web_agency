"use server";
import bcrypt from "bcrypt";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import prisma from "@/lib/prisma";
import { SessionData, defaultSession, sessionOptions } from "@/lib/session";

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

export const signup = async (prevState: any, formData: FormData) => {
  const formId = formData.get("id") as string;
  const formPassword = formData.get("password") as string;
  const formVerifyPassword = formData.get("verifyPassword") as string;

  if (formPassword !== formVerifyPassword)
    return { error: "비밀번호 확인이 다릅니다" };

  const hashedPassword = bcrypt.hashSync(formPassword, 10);

  const newUser = await prisma.user.create({
    data: { custom_id: formId, password: hashedPassword },
  });
  redirect("/login");
};

export const login = async (prevState: any, formData: FormData) => {
  const session = await getSession();

  if (!session)
    return { error: "세션 가져오는 도중 에러발생, 다시 시도해주세요" };

  const formId = formData.get("id") as string;
  const formPassword = formData.get("password") as string;

  if (!formId || !formPassword) return { error: "필수항목을 입력하세요" };

  const user = await prisma.user.findUnique({
    where: { custom_id: formId },
  });

  if (!user) return { error: "해당 ID는 존재하지 않는 계정입니다" };

  const checkPassword = bcrypt.compareSync(formPassword, user.password);

  if (!checkPassword) return { error: "ID와 비밀번호를 확인하세요" };

  session.isAdmin = user.role === "ADMIN";
  session.isLoggedIn = true;
  session.userId = user.id;
  session.username = user.custom_id;

  await session.save();
  redirect("/");
};

export const logout = async () => {
  try {
    const session = await getSession();

    session.destroy();
    redirect("/");
  } catch (error) {
    return { error: "로그아웃 실패 다시 시도해주세요" };
  }
};
