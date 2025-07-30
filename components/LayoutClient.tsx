"use client";

import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SessionProvider, useSession } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import { Crisp } from "crisp-sdk-web";
import config from "@/config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CrispChat = (): null => {
  const pathname = usePathname();
  const { data } = useSession();

  useEffect(() => {
    if (config?.crisp?.id) {
      Crisp.configure(config.crisp.id);
      if (
        config.crisp.onlyShowOnRoutes &&
        !config.crisp.onlyShowOnRoutes?.includes(pathname)
      ) {
        Crisp.chat.hide();
        Crisp.chat.onChatClosed(() => {
          Crisp.chat.hide();
        });
      }
    }
  }, [pathname]);

  useEffect(() => {
    if (data?.user && config?.crisp?.id) {
      Crisp.session.setData({ userId: data.user?.id });
    }
  }, [data]);

  return null;
};

const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <NextTopLoader color={config.colors.main} showSpinner={false} />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Toaster toastOptions={{ duration: 3000 }} />
      <Tooltip id="tooltip" className="z-[60] !opacity-100 max-w-sm shadow-lg" />
      <CrispChat />
    </SessionProvider>
  );
};

export default ClientLayout;
