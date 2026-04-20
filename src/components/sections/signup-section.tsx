import { Card, CardContent, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";

const SignupSection = () => {
  return (
    <section className="bg-sand-100 py-16 md:py-28 lg:py-32">
      <div className="container">
        <div className="flex flex-col gap-4">
          <Card className="mx-auto w-full max-w-sm">
            <CardHeader className="flex flex-col items-center space-y-0">
              <img
                src="/images/logo.svg"
                alt="Maestro"
                width={97}
                height={15}
                className="mb-7 h-[15px] w-auto dark:invert"
              />
              <p className="mb-2 text-2xl font-bold">Start your free trial</p>
              <p className="text-muted-foreground">
                Sign up in less than 2 minutes.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Input type="text" placeholder="Enter your name" required />
                <Input type="email" placeholder="Enter your email" required />
                <div>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                  <p className="text-muted-foreground mt-1 text-sm">
                    Must be at least 8 characters.
                  </p>
                </div>
                <Button type="submit" className="mt-2 w-full">
                  Create an account
                </Button>
                <Button variant="outline" className="w-full">
                  <FcGoogle className="mr-2 size-5" />
                  Sign up with Google
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
