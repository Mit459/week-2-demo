import Link from "next/link";
import Title from "./title";

export default function Page() {
    return(
        <div>
            <Title />
            <h1>Welcome to Page-2</h1>
            <p><Link href="/">Go to home page </Link></p>
        </div>
    );
}