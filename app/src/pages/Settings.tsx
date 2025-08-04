"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import "../App.css"
import type { AlignCenter } from "lucide-react"

const FormSchema = z.object({
    name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
    email: z.string().email("You have to enter a valid email address.").min(2, {
    message: "You have to enter a valid email address.",
  }),
    password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
    password_confirmation: z.string(), 
    }).refine((data) => data.password === data.password_confirmation, {
    message: "Password do not match.",
    path: ['password_confirmation'],
  });

export default function Settings() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email:"",
      password:"",
      password_confirmation:""
    },
  })


  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('hit')
    toast("Your information has been updated.")
  }

  function downloadData(){
    toast("Coming soon")
    //ready user data for export, inform user, start download
  }


    return (
        <div className="w-full">
            <h1 className="text-xl font-bold text-[#a30262] mt-6 mb-2">Account</h1>
            
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="place-items-center">
                        <div className="w-64 md:w-96 lg:w-128">
                            <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Your name</FormLabel>
                                    <FormControl>
                                        <Input className="mb-6" placeholder="Your name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                        </div>
                        <div className="w-64 md:w-96 lg:w-128">
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your email address</FormLabel>
                                <FormControl>
                                    <Input className="mb-6" placeholder="Your email address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        </div>
                        <div className="w-64 md:w-96 lg:w-128">
                        <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your password</FormLabel>
                                <FormControl>
                                    <Input type="password" className="mb-6" placeholder="Your password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        </div>
                        <div className="w-64 md:w-96 lg:w-128">
                        <FormField
                        control={form.control}
                        name="password_confirmation"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password Confirmation</FormLabel>
                                <FormControl>
                                    <Input type="password" className="mb-6" placeholder="Password Confirmation" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        </div>
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </Form>
        <hr className="divider"/>
        <div className="place-items-center">
            <h2 className="text-xl font-bold text-[#a30262] mt-6 mb-2">Privacy</h2>
            <h1 className="text-accent-foreground mb-2">Use Cloud Storage (Coming Soon)</h1>
            <Switch mt-6 mb-2/>
        </div>
        <hr className="divider"/>
        <div className="place-items-center">
            <h2 className="text-xl font-bold text-[#a30262] mt-6 mb-2">Request Your Data</h2>
            <Button onClick={downloadData}>Request Your Data (Coming Soon)</Button>
    
        </div>
    </div>
        

    )
}

