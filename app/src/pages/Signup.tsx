import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Signup() {
  const navigate = useNavigate();

  const FormSchema = z
    .object({
      name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
      }),
      email: z
        .string()
        .email("You have to enter a valid email address.")
        .min(2, {
          message: "You have to enter a valid email address.",
        }),
      password: z.string().min(2, {
        message: "Password must be at least 2 characters.",
      }),
      password_confirmation: z.string(),
    })
    .refine((data) => data.password === data.password_confirmation, {
      message: "Password do not match.",
      path: ["password_confirmation"],
    });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async () => {
    // Handle if the user has been logged in here.
    // event.preventDefault();
    console.log("hit");
    /*TO DO: Send the user a confirm email to confirm the account. */
    toast("Your acount has been created successfully.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">
                Sign up
              </CardTitle>
              <CardDescription className="text-center">
                Enter your preffered name, your email and your password to
                create an account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="name">Your name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your name"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        {/* Should I have type=email? Browser overwrites the warning. */}
                        <Input
                          id="email"
                          placeholder="Enter your email"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <FormControl>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="password_confirmation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="password">
                        Password Confirmation
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="password_confirmation"
                          type="password"
                          placeholder="Confirm your password"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center justify-end"></div>
              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </CardContent>
            <CardFooter>
              <div className="text-center text-sm text-gray-600 w-full">
                Do you have an account?{" "}
                <a
                  href="/login"
                  className="text-blue-600 hover:text-blue-500 hover:underline font-medium"
                >
                  Sign in
                </a>
              </div>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
}
