import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import "../App.css"

//from the zod docs
const zodDateFromString = () =>
  z.preprocess((arg) => {
    if (typeof arg === "string" || arg instanceof Date) {
      return new Date(arg);
    }
  }, z.date());

const formSchema = z.object({
    menstruationStarts: zodDateFromString(),
    menstruationEnds: zodDateFromString(),
    ovulationDate: zodDateFromString(),
    userNote: z.string()
});

export default function Note(){

    const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
        menstruationStarts: new Date(), 
        menstruationEnds: new Date(),
        ovulationDate: new Date(),
        userNote: ""
        }
    });
    
    function onSubmit(data: z.infer<typeof formSchema>){
        console.log("logged")
        toast("Successfully logged!")
        //TODO: implement calling backend here
    }
    

    return (
    <div className="w-full">
        <h1 className="text-xl font-bold text-[#a30262] mt-6 mb-2">New Note</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" >
                    <div className="place-items-center">
                        <div className="w-64 md:w-96 lg:w-128">
                            <FormField
                            name="menstruationStarts"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Menstruation start date</FormLabel>
                                    <FormControl>
                                        <Input type="date" className="mb-6" placeholder="Enter Date... (YYYY-MM-DD)" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                             />
                        <div className="w-64 md:w-96 lg:w-128">
                            <FormField
                            name="menstruationEnds"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Menstruation end date</FormLabel>
                                    <FormControl>
                                        <Input type="date" className="mb-6" placeholder="Enter Date... (YYYY-MM-DD)" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                             />
                        </div>
                        </div>
                        <div className="w-64 md:w-96 lg:w-128">
                        <FormField
                        name="ovulationDate"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Ovulation date</FormLabel>
                                <FormControl>
                                    <Input type="date" className="mb-6" placeholder="Enter Date... (YYYY-MM-DD)" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        </div>
                        <div className="w-64 md:w-96 lg:w-128">
                        <FormField
                        name="userNote"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Note</FormLabel>
                                <FormControl>
                                    <Input type="text" className="mb-6" placeholder="Any notes?" {...field} />
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
    </div>);
}