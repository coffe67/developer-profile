import {useState, useEffect} from "react";
import { useRouter } from 'next/router'
import useDelayedRender from "use-delayed-render";
import Image from 'next/image'
import Link from 'next/link';

export default function MobileNavigation(){
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
        isMenuOpen,
        {
            enterDelay: 20,
            exitDelay: 300
        }
    );

    function toggleMenu() {
        if (isMenuOpen) {
            setIsMenuOpen(false);
            document.body.style.overflow = '';
        } else {
            setIsMenuOpen(true);
            document.body.style.overflow = 'hidden';
        }
    }

    useEffect(() => {
        return function cleanup() {
            document.body.style.overflow = '';
        };
    }, []);

    return<>
        <div className="flex flex-col visible bg-black w-full rounded-br-lg rounded-bl-lg drop-shadow-lg md:hidden">
            <div className="flex justify-between">
                <div className="flex w-full  justify-center">
                    <div>
                        <Image
                            src="/static/avatars/coffe67Avatar.png"
                            width={55}
                            height={55}
                            alt="Narciso Avalos"
                        />
                    </div>
                    <div className="text-center w-full p-3">
                        Narciso Avalos | coffe67
                    </div>
                </div>

                <div className="p-3 justify-center items-center">
                    <button onClick={toggleMenu}>
                        {
                            isMenuOpen ? <CrossIcon /> :<MenuIcon />
                        }
                    </button>
                </div>
            </div>
            <div>
                {isMenuMounted && (
                    <ul className="px-7 py-3">
                      <li
                        className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
                        style={{ transitionDelay: '150ms' }}
                      >
                        <Link href="/" className="flex w-auto pb-4 pt-4">
                          Me
                        </Link>
                      </li>
                      <li
                        className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
                        style={{ transitionDelay: '175ms' }}
                      >
                        <Link href="/projects" className="flex w-auto pb-4 pt-4">
                          Projects
                        </Link>
                      </li>
                      <li
                        className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
                        style={{ transitionDelay: '200ms' }}
                      >
                        <Link href="/dev-snippets" className="flex w-auto pb-4 pt-4">
                          Dev Snippets
                        </Link>
                      </li>
                      <li
                        className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
                        style={{ transitionDelay: '200ms' }}
                      >
                        <Link href="/pocs" className="flex w-auto pb-4 pt-4">
                          PoC&apos;s
                        </Link>
                      </li>
                    </ul>
                  )}
            </div>
        </div>
    </>
}


function MenuIcon(props) {
  return (
    <svg
      className="h-5 w-5 text-gray-900 dark:text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props) {
  return (
    <svg
      className="h-5 w-5 text-gray-900 dark:text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}