import { Toaster } from "@/components/ui/sonner";

export default function AdminLayout(props: {
  children: React.ReactNode;
  client: React.ReactNode;
  server: React.ReactNode;
}) {
  return (
    <div className="w-full flex-col items-center justify-center">
      <Toaster
        richColors
        closeButton
      />
      {props.children}
      <div className="flex justify-around mt-6">
        {props.client}
        {props.server}
      </div>
    </div>
  );
}
