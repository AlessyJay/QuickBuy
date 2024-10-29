import { useState, useEffect } from "react";
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
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const checkPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/\d/)) strength++;
    if (password.match(/[^a-zA-Z\d]/)) strength++;
    setPasswordStrength(strength);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/register", {
        email,
        password,
        firstName,
        lastName,
      });

      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

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
          <h1 className="text-center text-2xl font-bold">Create an Account</h1>
          <p className="text-center">
            Join QuickBuy for exclusive offers and a personalized shopping
            experience
          </p>
        </CardHeader>
        <CardBody className="space-y-4">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstname">First Name</label>
                <Input
                  id="firstname"
                  placeholder="John"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="lastname">Last Name</label>
                <Input
                  id="lastname"
                  placeholder="Doe"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => {
                    checkPasswordStrength(e.target.value);
                    setPassword(e.target.value);
                  }}
                />
                <div className="flex justify-end">
                  <IconButton
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    icon={showPassword ? <EyeOff /> : <Eye />}
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute -top-5 right-2 -translate-y-1/2"
                  />
                </div>
              </div>
              <div className="mt-1 flex space-x-1">
                {[1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className={`h-2 w-full rounded ${
                      passwordStrength >= level
                        ? "bg-orange-500"
                        : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Password strength:{" "}
                {["Weak", "Fair", "Good", "Strong"][passwordStrength - 1] ||
                  "Very Weak"}
              </p>
            </div>
            <div className="space-y-2">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="my-5 flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                required
              />
              <label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <Link to="#" className="text-orange-500 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="#" className="text-orange-500 hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>
            <Button
              type="submit"
              className="w-full bg-orange-500 text-white hover:bg-orange-600"
            >
              Create Account
            </Button>
          </form>
        </CardBody>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-500 hover:underline">
              Sign in
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

export default Register;
