import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";

type PageTypeCardProps = {
  title: string;
  role: UserRole;
};

const PageTypeCard = ({ title, role }: PageTypeCardProps) => {
  return (
    <Card className="w-auto shadow-sm">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{title}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-row items-center justify-between rounded-lg border p-3">
          <p className="text-sm font-medium">Role</p>
          <p className="truncate text-xs max-w-[180px] p-1 bg-sky-400 text-primary-foreground rounded-md">
            {role}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PageTypeCard;
