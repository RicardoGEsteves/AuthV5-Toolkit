import { useIsClient } from "@/hooks/use-is-client";
import Spinner from "./spinner";

export function ClientOnly({ children }: { children: React.ReactNode }) {
  const isClient = useIsClient();

  return isClient ? <>{children}</> : <Spinner />;
}
