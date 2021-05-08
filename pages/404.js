import Link from "next/link";
import {useEffect} from 'react';
import {useRouter} from 'next/router';


const Notfound = () => {
    const router = useRouter();

    useEffect( () => {
        setTimeout( () => {
            router.push('/');
        }, 3000)
    }, []);


    return ( 
        <div className="not-found">
            <h1>Oops....</h1>
            <h2>Page cannot be found</h2>
            <Link href="/"><h3>Go back</h3></Link>
        </div>
     );
}
 
export default Notfound;