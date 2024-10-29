import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  IconButton,
  CardFooter,
} from "@chakra-ui/react";
import { Eye, EyeOff, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="mb-4 flex items-center justify-center">
            <ShoppingBag className="h-10 w-10 text-orange-500" />
            <span className="ml-2 text-3xl font-bold text-orange-500">
              QuickBuy
            </span>
          </div>
          <h1 className="text-center text-2xl font-bold">Welcome Back</h1>
          <p className="text-center">
            Enter your credentials to access your account
          </p>
        </CardHeader>
        <CardBody className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password">Password</label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                required
                pr="3rem"
              />
              <div className="flex justify-end">
                <IconButton
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  icon={showPassword ? <EyeOff /> : <Eye />}
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute -top-5 right-2 -translate-y-1/2"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
              />
              <label htmlFor="remember" className="text-sm">
                Remember me
              </label>
            </div>
            <Link to="#" className="text-sm text-orange-500 hover:underline">
              Forgot password?
            </Link>
          </div>
        </CardBody>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full bg-orange-500 text-white hover:bg-orange-600">
            Sign In
          </Button>
          <div className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link to="/register" className="text-orange-500 hover:underline">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
      <div className="absolute bottom-4 left-4 right-4 text-center text-sm text-gray-500">
        © 2024 QuickBuy. All rights reserved.
      </div>
    </div>
  );
};

export default Login;
