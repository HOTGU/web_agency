import Link from "next/link";
import React from "react";

import LogoutForm from "@/components/forms/logoutForm";
import { getSession } from "@/actions/authAction";
import Container from "./container";

const Navbar = async () => {
  const session = await getSession();

  return (
    <nav className="fixed w-full top-0 border-b h-14 z-50 border-gray-600">
      <Container>
        <div className="flex justify-between items-center h-full">
          <Link href="/">모홈</Link>
          <div>
            <Link href="/contact">문의하기</Link>
            <Link href="/portfolio">포트폴리오</Link>
            {session.isLoggedIn && <LogoutForm />}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
