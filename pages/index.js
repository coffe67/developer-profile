import { Suspense } from 'react';
import MainContainer from '../components/mainContainer';
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
      <Suspense fallback={null}>
            <MainContainer>
                <div className="w-full flex flex-col py-10">
                    <div className="flex flex-wrap items-center justify-around">
                        <div>
                            <h1>Hi, I am Narciso Avalos</h1>
                            <h2>
                                Software Developer,
                            </h2>
                            <h2>
                                Backend, Frontend, Blockchain,
                            </h2>
                            <h2>
                                Quick Learner,
                            </h2>
                            <h2>
                                Entrepreneur,
                            </h2>
                            <h2>
                                Friend, Husband, Father .....
                            </h2>
                            <h2>
                                Born on 1986 in Guadalajara, México
                            </h2>
                        </div>
                        <div>
                            <Image
                                src="/static/avatars/coffe67AvatarC.png"
                                width={320}
                                height={320}
                                alt="Narciso Avalos"
                            />

                            <div className="flex justify-center py-2">
                                <div className="mx-2 bg-grayCustom rounded-full p-2">
                                    <Link href="https://github.com/coffe67">
                                        <Image
                                            src="/static/networks/github.png"
                                            width={22}
                                            height={22}
                                            alt="Github Narciso Avalos"
                                        />
                                    </Link>
                                </div>
                                <div className="mx-2 bg-grayCustom rounded-full p-2">
                                    <Link href="https://www.linkedin.com/in/narciso-avalos-sevilla-09079762/">
                                        <Image
                                            src="/static/networks/linkedin.png"
                                            width={22}
                                            height={22}
                                            alt="LinkedIn Narciso Avalos"
                                        />
                                    </Link>
                                </div>
                                <div className="mx-2 bg-grayCustom rounded-full p-2">
                                    <Link href="https://twitter.com/coffe67Chicho">
                                        <Image
                                            src="/static/networks/twitter.png"
                                            width={22}
                                            height={22}
                                            alt="Twitter Narciso Avalos"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black flex flex-wrap items-center justify-around">
                        <div className="w-full md:w-6/12">
                            <h3>Skills & Experience</h3>
                            <h4>
                                A love learn, try, fail and grow; A passion mine is solving
                                problems and create MVPs using web technologies.
                            </h4>
                            <div>
                                <h5>Skills</h5>
                                <div className="mx-1 border-grayCustom rounded-full p-1">
                                    <Link href="https://www.python.org/">
                                        <Image
                                            src="/static/skills/python.png"
                                            width={22}
                                            height={22}
                                            alt="Python"
                                        />
                                    </Link>
                                </div>
                                <div className="mx-1 border-grayCustom rounded-full p-1">
                                    <Link href="https://www.djangoproject.com/">
                                        <Image
                                            src="/static/skills/django.png"
                                            width={32}
                                            height={32}
                                            alt="Django"
                                        />
                                    </Link>
                                </div>
                                <div className="mx-1 border-grayCustom rounded-full p-1">
                                    <Link href="https://www.python.org/">
                                        <Image
                                            src="/static/skills/javascript.png"
                                            width={22}
                                            height={22}
                                            alt="Python"
                                        />
                                    </Link>
                                </div>
                                <div className="mx-1 border-grayCustom rounded-full p-1">
                                    <Link href="https://www.python.org/">
                                        <Image
                                            src="/static/skills/html-5.png"
                                            width={22}
                                            height={22}
                                            alt="Python"
                                        />
                                    </Link>
                                </div>
                                <div className="mx-1 border-grayCustom rounded-full p-1">
                                    <Link href="https://www.python.org/">
                                        <Image
                                            src="/static/skills/css3.png"
                                            width={22}
                                            height={22}
                                            alt="Python"
                                        />
                                    </Link>
                                </div>
                                <div className="mx-1 border-grayCustom rounded-full p-1">
                                    <Link href="https://www.python.org/">
                                        <Image
                                            src="/static/skills/react.png"
                                            width={22}
                                            height={22}
                                            alt="Python"
                                        />
                                    </Link>
                                </div>
                                <div className="mx-1 border-grayCustom rounded-full p-1">
                                    <Link href="https://www.python.org/">
                                        <Image
                                            src="/static/skills/amazon-web-services.png"
                                            width={22}
                                            height={22}
                                            alt="Python"
                                        />
                                    </Link>
                                </div>
                                <div className="mx-1 border-grayCustom rounded-full p-1">
                                    <Link href="https://www.python.org/">
                                        <Image
                                            src="/static/skills/linode.png"
                                            width={22}
                                            height={22}
                                            alt="Python"
                                        />
                                    </Link>
                                </div>
                                <div className="mx-1 border-grayCustom rounded-full p-1">
                                    <Link href="https://www.python.org/">
                                        <Image
                                            src="/static/skills/wordpress.png"
                                            width={22}
                                            height={22}
                                            alt="Python"
                                        />
                                    </Link>
                                </div>
                                <div className="mx-1 border-grayCustom rounded-full p-1">
                                    <Link href="https://www.python.org/">
                                        <Image
                                            src="/static/skills/nft.png"
                                            width={22}
                                            height={22}
                                            alt="NFT"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12">
                            <h5>Experience</h5>
                            <div>
                                <div>
                                    2021 - Present
                                </div>
                                <div>
                                    Co-Founder & Chief Technical Officer
                                    <small>OutDev Global</small>
                                </div>
                            </div>
                            <div>
                                <div>
                                    2016 - Present
                                </div>
                                <div>
                                    Full Stack Developer
                                    <small>Freelance</small>
                                </div>
                            </div>
                            <div>
                                <div>
                                    2017 - 2021
                                </div>
                                <div>
                                    Backend Developer & TechLead
                                    <small>Ctrl+Sun</small>
                                </div>
                            </div>
                            <div>
                                <div>
                                    2015 - 2017
                                </div>
                                <div>
                                    Chief Technical Officer
                                    <small>ShopiBoy</small>
                                </div>
                            </div>
                            <div>
                                <div>
                                    2014 - 2016
                                </div>
                                <div>
                                    Python / PHP Developer
                                    <small>Hydralab</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </MainContainer>
      </Suspense>
  )
}
