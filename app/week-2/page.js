import Link from "next/link";
export default function Page() {
    return(
        <div>
            <h1>Welcome to Page-2</h1>
            <p><Link href="/">Go to home page </Link></p>
        </div>
    );
}