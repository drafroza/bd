"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const privateRoute = pathname?.startsWith("/private-vault");
  return privateRoute ? children : <><Nav />{children}<Footer /></>;
}
