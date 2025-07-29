import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function datepage(){

    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    //expects a param that can be interpreted as a Date
    //todo: tighten up validation
    const { dateString } = useParams();
   
    if(!isValidDate(dateString)){
        return <h1> Invalid Date </h1>
    }
   
    //date string is shown in local timezone, so url mismatch is expected
    const date = new Date(dateString!); 

    //arguments can be added here when it comes time to hook to backend
    //each button can pass an id of which piece of data will be updated for that day
    const handleOpen = () => {
        setOpen(true);
    };

    const handleSubmit = () => {
        setInputValue("");
        setOpen(false);
    };


    return (
    <div className="w-full">
            <div className="place-items-center" >
            <h1 className="text-xl font-bold text-[#a30263] mt-6 mb-2">{date.toDateString()}</h1>
            <h1 className="text-xl font-bold">previous period end:</h1>
            <h1 className="text-xl font-bold">next period start: </h1>
            <Button type="submit" onClick={() => handleOpen()}>Menstruation Started</Button>
            <Button type="submit" onClick={() => handleOpen()}>Menstruation Ended</Button>
            <Button type="submit" onClick={() => handleOpen()}>Ovulation Happened</Button>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Any notes?</DialogTitle>
                    </DialogHeader>

                    <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type something..."
                    />

                    <DialogFooter>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    </div>
    );
}

function isValidDate(dateString: string | undefined) {
    return !isNaN(Date.parse(dateString!));

}