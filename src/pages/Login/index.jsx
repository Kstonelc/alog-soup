import React, { useState } from "react";
import {
  Card,
  CardBody,
  Input,
  Button,
  Link,
  Checkbox,
} from "@nextui-org/react";
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon, KeyIcon } from "lucide-react";
const Login = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <Card className="w-full max-w-md bg-white bg-opacity-10 backdrop-blur-md">
        <CardBody className="p-8">
          <div className="flex flex-col items-center space-y-4 mb-8">
            <div className="p-3 bg-white rounded-full shadow-lg">
              <KeyIcon size={32} className="text-teal-500" />
            </div>
            <h1 className="text-2xl font-bold text-white">Algo SoupBun</h1>
            <p className="text-blue-500 text-center">让算法有迹可循</p>
          </div>
          <form className="space-y-6">
            <Input
              classNames={{
                label: "text-teal-100",
                input: "text-white placeholder:text-teal-200",
              }}
              label="邮箱"
              labelPlacement="outside"
              placeholder="Enter your email"
              startContent={<MailIcon className="text-teal-300" size={18} />}
              type="email"
            />
            <Input
              classNames={{
                label: "text-teal-100",
                input: "text-white placeholder:text-teal-200",
              }}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeIcon className="text-teal-300" size={18} />
                  ) : (
                    <EyeOffIcon className="text-teal-300" size={18} />
                  )}
                </button>
              }
              label="密码"
              labelPlacement="outside"
              placeholder="Enter your password"
              startContent={<LockIcon className="text-teal-300" size={18} />}
              type={isVisible ? "text" : "password"}
            />
            <div className="flex items-center justify-between">
              <Checkbox defaultSelected size="sm">
                <span className="text-sm text-teal-100">Remember me</span>
              </Checkbox>
              <Link
                className="text-teal-200 hover:text-white"
                href="#"
                size="sm"
              >
                Forgot password?
              </Link>
            </div>
            <Button
              color="primary"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white"
            >
              Sign In to Algorand
            </Button>
          </form>
          <div className="mt-6 text-center text-sm text-teal-100">
            New to Algorand?{" "}
            <Link href="#" size="sm" className="text-teal-200 hover:text-white">
              Create an account
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
