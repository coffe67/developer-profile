import { useRouter } from 'next/router'
import MobileNavigation from "./mobileNavigation";
import Image from "next/image";
import Link from "next/link";

export default function Navigation(){
    const router = useRouter()
    return <nav className="bg-black w-full rounded-br-lg rounded-bl-lg drop-shadow-lg w-full md:py-3 md:px-5 flex justify-start">
        <MobileNavigation />
        <div className="hidden md:block">
            <div className="flex justify-center">
                <div>
                    <Image
                        src="/static/avatars/coffe67Avatar.png"
                        width={55}
                        height={55}
                        alt="Narciso Avalos"
                    />
                </div>
                <div className="text-center w-full p-3">
                    Narciso Avalos | <Link href="https://github.com/coffe67">coffe67</Link>
                </div>
            </div>
        </div>
        <div className=" flex w-8/12 items-center  place-items-center hidden md:block">
            <div className="flex items-center justify-end p-3">
                <div className="mx-2">
                    <button  onClick={() => router.push('/')}>
                        Me
                    </button>
                </div>
                <div className="mx-2">
                    <button onClick={() => router.push('/projects')}>
                        Projects
                    </button>
                </div>
                <div className="mx-2">
                    <button onClick={() => router.push('/dev-snippets')}>
                        Dev Snippets
                    </button>
                </div>
                <div className="mx-2">
                    <button onClick={() => router.push('/pocs')}>
                        PoC's
                    </button>
                </div>
            </div>
        </div>

    </nav>
}