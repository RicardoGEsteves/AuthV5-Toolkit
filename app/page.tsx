import { MdOutlineSecurity } from "react-icons/md";

import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="space-y-6 text-center">
        <div className="flex items-center justify-center">
          <MdOutlineSecurity className="text-sky-400 text-8xl" />
          <h1 className="text-6xl font-semibold text-primary drop-shadow-md">
            Auth
          </h1>
        </div>

        <p className="text-primary text-lg">
          Welcome to authentication service.
        </p>

        <div>
          {/* Other option is to use the <LoginButton mode="modal" asChild /> component with that props,
          as a modal instead of redirecting to the login page.
          - You can do the same for Register, but in that case i would recommend to create a separate component for it.
          Like a new Login and register form component and a register button component.
          Or refactor the login form or card-wrapper.
          */}
          <LoginButton>
            <Button
              className="bg-gradient-to-r from-sky-400 to-sky-500 text-primary hover:bg-gradient-to-l hover:from-sky-400 hover:to-sky-500"
              size="lg"
            >
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
