import { User } from "@/types/next-auth";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface UserInfoProps {
  user?: User;
  label: string;
}

const UserInfo = ({ user, label }: UserInfoProps) => {
  const userDetails = {
    ID: user?.id,
    Name: user?.name,
    Email: user?.email,
    Role: user?.role,
    "Two Factor Authentication": user?.isTwoFactorEnabled,
  };

  return (
    <Card className="w-auto shadow-sm">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {Object.entries(userDetails).map(([key, value]) => (
          <div
            key={key}
            className="flex flex-row items-center justify-between rounded-lg border p-3"
          >
            <p className="text-sm font-medium">{key}</p>
            {key === "Two Factor Authentication" ? (
              <Badge
                variant={value ? "success" : "destructive"}
                className="ml-4"
              >
                {value ? "Enabled" : "Disabled"}
              </Badge>
            ) : (
              <p className="truncate text-xs max-w-[180px] p-1 bg-secondary rounded-md">
                {value}
              </p>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default UserInfo;
