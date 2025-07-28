import { useParams } from "react-router-dom";

export default function DatePage(){

    //expects a param that can be interpreted as a Date
    //todo: tighten up validation
    const { dateString } = useParams();
   
    if(!isValidDate(dateString)){
        return <h1> Invalid Date </h1>
    }
   
    const date = new Date(dateString!); 

    return (
        <h1> {date.toDateString()}
        <body>
            previous period ends: \n
            next period starts: \n
        </body>
        </h1>
    );
}

function isValidDate(dateString: string | undefined) {
    return !isNaN(Date.parse(dateString!));

}