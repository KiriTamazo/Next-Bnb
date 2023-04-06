"use client";

import { useEffect, useState } from "react";

interface ClientOnlyPros {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyPros> = ({ children }) => {
  const [hasMounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};
export default ClientOnly;
