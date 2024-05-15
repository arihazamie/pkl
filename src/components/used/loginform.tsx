"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import bg from "../../../public/background.webp";

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 5 characters.",
  }),
  password: z.string().min(2, { message: "Password is required" }),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const example = () => {
    console.log();
  };

  return (
    <div
      className=" left-0 right-0 bottom-0 top-0 md:pt-40 2xl:pt-56 fixed bg-cover -z-50"
      style={{ backgroundImage: `url(${bg.src})` }}>
      <Card className="bg-black/30 text-Headline grid justify-center items-center text-center mx-[30%] shadow-xl rounded-3xl">
        <CardHeader>
          <CardTitle className="md:text-4xl 2xl:text-5xl text-Button font-bold">
            Login Page
          </CardTitle>
          <CardDescription>Login with Owner Account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(example)}
              className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Email</FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-[8px]"
                        placeholder="test@example.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Password</FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-[8px]"
                        placeholder="*********"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="bg-Button rounded-xl text-ButtonText font-bold shadow-xl hover:bg-Button/20 hover:text-Button">
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
