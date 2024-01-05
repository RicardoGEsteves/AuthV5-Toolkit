import { MdOutlineSecurity } from "react-icons/md";

type HeaderProps = {
  label: string;
};

const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <div className="flex items-center justify-center">
        <MdOutlineSecurity className="text-sky-400 text-3xl" />
        <h1 className="text-3xl font-semibold text-primary drop-shadow-md">
          Auth
        </h1>
      </div>

      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export default Header;
