"use client";
import { UserButton } from "@clerk/nextjs";
import { HiSparkles } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const CwNavbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between border-b border-solid px-8 py-4">
      {/* ESQUERDA */}
      <div className="flex items-center gap-10">
        <Image
          src="/logo.svg"
          width={173}
          height={39}
          alt="Couple Wealth AI"
          onClick={() => {
            window.location.href = "/";
          }}
        />
        <Link
          href="/"
          className={
            pathname === "/"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === "/transactions"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Transações
        </Link>
        <Link
          href="/website-page"
          className={
            pathname === "/website-page"
              ? "font-bold text-primary inline-flex items-center gap-1"
              : "text-muted-foreground inline-flex items-center gap-1"
          }
        >
          Diagnóstico <HiSparkles className="h-5 w-5" />
        </Link>
        <Link
          href="/subscription"
          className={
            pathname === "/subscription"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Pro
        </Link>
      </div>
      {/* DIREITA */}
      <UserButton showName />
    </nav>
  );
};
export default CwNavbar;
