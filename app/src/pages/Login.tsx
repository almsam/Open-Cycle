import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate();
  const FormSchema = z.object({
    email: z.string().email("You have to enter a valid email address.").min(2,{
      message: "You have to enter a valid email address."
    }),
    password: z.string().min(2, {
      message: "Password must be at least 2 characters.",
    }),
  })

  const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {    
        email:"",
        password:"",
      },
    })

  const onSubmit = async () => {
    // Handle if the user has been logged in here.
    // event.preventDefault();
    console.log('hit');

    try {
      let isLoggedin = true;

      if (isLoggedin ){
        console.log('should be home');
        navigate("/home")
        // return<Route path="home" element={<Home />}/>
      }
    } catch (err: any) {
      console.log(err.message)
    }
    
    
    
  }

    return ( 
      <div className="min-h-screen w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Card className="w-full max-w-md">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center">Sign in</CardTitle>
                <CardDescription className="text-center">
                Enter your email and password to access your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="email">Email</FormLabel>
                          <FormControl>
                            {/* Should I have type=email? Browser overwrites the warning. */}
                            <Input id="email" placeholder="Enter your email" required {...field} />
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
                                <Input id="password" type="password" placeholder="Enter your password" required {...field}/>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                            )}
                            />
                  </div>
              <div className="flex items-center justify-end">
                <a href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500 hover:underline">
                  Forgot your password?
                </a>
              </div>
              <Button type="submit" className="w-full">
                Sign in
              </Button>
          </CardContent>
          <CardFooter>
            <div className="text-center text-sm text-gray-600 w-full">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-600 hover:text-blue-500 hover:underline font-medium">
                Sign up
              </a>
            </div>
          </CardFooter>
        </Card>
        </form>
        </Form>
        
      </div>
    );
  }




// const LoginPage: React.FC = () =>  {
//   return (
//     <div className="min-h-screen w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <Card className="w-full max-w-md">
//         <CardHeader className="space-y-1">
//           <CardTitle className="text-2xl font-bold text-center">Sign in</CardTitle>
//           <CardDescription className="text-center">
//             Enter your email and password to access your account
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <form className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input id="email" type="email" placeholder="Enter your email" required />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <Input id="password" type="password" placeholder="Enter your password" required />
//             </div>
//             <div className="flex items-center justify-end">
//               <a href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500 hover:underline">
//                 Forgot your password?
//               </a>
//             </div>
//             <Button type="submit" className="w-full">
//               Sign in
//             </Button>
//           </form>
//         </CardContent>
//         <CardFooter>
//           <div className="text-center text-sm text-gray-600 w-full">
//             Don't have an account?{" "}
//             <a href="/signup" className="text-blue-600 hover:text-blue-500 hover:underline font-medium">
//               Sign up
//             </a>
//           </div>
//         </CardFooter>
//       </Card>
//     </div>
//   )
// }

// export default LoginPage;