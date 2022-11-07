import { Suspense } from 'react';
import MainContainer from '../components/mainContainer';
import iconOutDev from '../public/static/experience/iconOutDev.svg';
import logoOutDev from '../public/static/experience/logoOutDev.svg';
import logoCtrlSun from '../public/static/experience/logoCtrlSun.svg';
import logoHydralab from '../public/static/experience/logoHydralab.svg';
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
      <Suspense fallback={null}>
            <MainContainer>
                <div className="w-full flex flex-col pt-10">
                    <div className="flex flex-wrap items-center justify-around text-black">
                        <div className="p-2 ">
                            <h1 className="text-3xl md:text-4xl">Hi, I am Narciso Avalos</h1>
                            <h2 className="text-2xl">
                                Software Developer,
                            </h2>
                            <h2 className="text-2xl">
                                Backend, Frontend, Blockchain,
                            </h2>
                            <h2 className="text-2xl">
                                Quick Learner, Entrepreneur,
                            </h2>
                            <h2 className="text-xl">
                                Friend, Husband, Father .....
                            </h2>
                            <h2>
                                Born on 1986 in Guadalajara, México
                            </h2>
                        </div>
                        <div className="mb-4">
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
                    <div className="bg-black flex flex-wrap items-center justify-around bg-gradient-to-br from-gray-800 via-blue-900 to-cyan-900 background-animate">
                        <div className="w-full md:w-6/12 p-4 ">
                            <h3 className="text-4xl my-2">Skills & Experience</h3>
                            <h4 className="text-2xl text-justify my-2">
                                A love learn, try, fail and grow; A passion mine is solving
                                problems and create MVPs using web technologies.
                            </h4>
                            <h4 className="text-2xl my-3 w-full border-b ">Skills</h4>
                            <div className="flex flex-wrap justify-around">

                                <div className="mx-1 border-grayCustom rounded-full p-1">
                                    <Link href="https://www.python.org/">
                                        <Image
                                            src="/static/skills/python.png"
                                            width={44}
                                            height={44}
                                            alt="Python"
                                        />
                                    </Link>
                                </div>
                                <div className="mx-1 border-grayCustom rounded-full p-1">
                                    <Link href="https://www.djangoproject.com/">
                                        <Image
                                            src="/static/skills/django.png"
                                            width={44}
                                            height={44}
                                            alt="Django"
                                        />
                                    </Link>
                                </div>
                                <div className="mx-1 border-grayCustom rounded-full p-1">
                                    <Link href="https://www.python.org/">
                                        <Image
                                            src="/static/skills/javascript.png"
                                            width={44}
                                            height={44}
                                            alt="JavaScript"
                                        />
                                    </Link>
                                </div>
                                <div className="mx-1 border-grayCustom rounded-full p-1">
                                    <Link href="https://www.python.org/">
                                        <Image
                                            src="/static/skills/html-5.png"
                                            width={44}
                                            height={44}
                                            alt="Html5"
                                        />
                                    </Link>
                                </div>
                                <div className="mx-1 border-grayCustom rounded-full p-1">
                                    <Link href="https://www.python.org/">
                                        <Image
                                            src="/static/skills/css3.png"
                                            width={44}
                                            height={44}
                                            alt="CSS3"
                                        />
                                    </Link>
                                </div>
                                <div className="mx-1 border-grayCustom rounded-full p-1">
                                    <Link href="https://www.python.org/">
                                        <Image
                                            src="/static/skills/react.png"
                                            width={44}
                                            height={44}
                                            alt="React JS"
                                        />
                                    </Link>
                                </div>
                                <div className="mx-1 border-grayCustom rounded-full p-1">
                                    <Link href="https://www.python.org/">
                                        <Image
                                            src="/static/skills/amazon-web-services.png"
                                            width={44}
                                            height={44}
                                            alt="Amazon AWS"
                                        />
                                    </Link>
                                </div>
                                <div className="mx-1 border-grayCustom rounded-full p-1">
                                    <Link href="https://www.python.org/">
                                        <Image
                                            src="/static/skills/linode.png"
                                            width={44}
                                            height={44}
                                            alt="Linode VPS"
                                        />
                                    </Link>
                                </div>
                                <div className="mx-1 border-grayCustom rounded-full p-1">
                                    <Link href="https://www.python.org/">
                                        <Image
                                            src="/static/skills/wordpress.png"
                                            width={44}
                                            height={44}
                                            alt="Wordpress"
                                        />
                                    </Link>
                                </div>
                                <div className="mx-1 border-grayCustom rounded-full p-1">
                                    <Link href="https://www.python.org/">
                                        <Image
                                            src="/static/skills/nft.png"
                                            width={44}
                                            height={44}
                                            alt="NFT"
                                        />
                                    </Link>
                                </div>
                                <div className="mx-1 border-grayCustom rounded-full p-1">
                                    <Link href="https://www.python.org/">
                                        <Image
                                            src="/static/skills/bitbucket.png"
                                            width={44}
                                            height={44}
                                            alt="Bitbucket"
                                        />
                                    </Link>
                                </div>
                                <div className="mx-1 border-grayCustom rounded-full p-1">
                                    <Link href="https://www.python.org/">
                                        <Image
                                            src="/static/skills/SlackWhite.png"
                                            width={84}
                                            height={84}
                                            alt="Slack"
                                        />
                                    </Link>
                                </div>
                                <div className="mx-1 border-grayCustom rounded-full p-1">
                                    <Link href="https://www.python.org/">
                                        <Image
                                            src="/static/skills/trello.png"
                                            width={84}
                                            height={84}
                                            alt="Trello"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 p-4">
                            <h4 className="text-2xl my-3 w-full border-b">Experience</h4>
                            <div className="border-b border-dotted my-1 py-1">
                                <div>
                                    2021 - Present
                                </div>
                                <div className="flex flex-col">
                                    <strong>
                                        Co-Founder & Chief Technical Officer
                                    </strong>
                                    <Link href="https://outdev.com.mx" target="_blank" className="flex my-2 items-center">
                                        <Image src={iconOutDev} height={48} width={48} alt="iconOutDev" className="mx-1"/>
                                        <Image src={logoOutDev} height={48} width={48} alt="logoOutDev" className="mx-1"/>
                                        <div className="mx-2">
                                            OutDev Global
                                        </div>
                                    </Link>
                                    <div>
                                        <p className="text-justify">
                                            Mexican company focused in blockchain development, NFT Collections,
                                            Immersive Web, VR Development, AR Development.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-dotted my-1 py-1">
                                <div>
                                    2016 - Present
                                </div>
                                <div className="flex flex-col">
                                    <strong>
                                        Full Stack Developer
                                    </strong>
                                    <div className="flex my-2 items-center">
                                        <Image src='/static/avatars/coffe67AvatarB.png' height={64} width={64} alt="iconOutDev" className="mx-1"/>
                                        <div>Freelance</div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-justify">
                                        Like a freelance i’ve offer services like email configuration, web development,
                                        deploy applications to cloud services (AWS, Linode, Digital Ocean).
                                    </p>
                                </div>
                            </div>
                            <div className="border-b border-dotted my-1 py-1">
                                <div>
                                    2017 - 2021
                                </div>
                                <div className="flex flex-col">
                                    <strong>
                                        Backend Developer & TechLead
                                    </strong>
                                    <Link href="https://ctrlsun.com" target="_blank" className="flex my-2 items-center">
                                        <Image src={logoCtrlSun} height={64} width={64} alt="logoCtrlSun" className="mx-1"/>
                                        <div className="mx-2">Ctrl+Sun</div>
                                    </Link>
                                    <div>
                                        <p className="text-justify">
                                            Startup focused on quoting Solar Panels. I&apos;d designed modules for CFE
                                            connection scrapping and reverse engineering, draw maps and polygons with
                                            google maps libraries, connection with remote applications for financing services,
                                            payment gateways.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-dotted my-1 py-1">
                                <div>
                                    2015 - 2017
                                </div>
                                <div className="flex flex-col">
                                    <strong>
                                        Chief Technical Officer
                                    </strong>
                                    <div className="flex my-2 items-center">
                                        <Link href="https://play.google.com/store/apps/details?id=com.shopi.shopiboy&hl=es_419&gl=US" target="_blank" className="flex my-2 items-center">
                                            <Image src='/static/experience/logoShopiboy.png' height={84} width={84} alt="logoShopiboy" className="mx-1"/>
                                            <div>ShopiBoy</div>
                                        </Link>
                                    </div>
                                    <div>
                                        <p className="text-justify">
                                            Startup focused on delivery on demand in Guadalajara. I&apos;d been involved in
                                            Backend design, API and Frontend interactions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="my-1 py-1">
                                <div>
                                    2014 - 2016
                                </div>
                                <div className="flex flex-col">
                                    <strong>
                                        Python / PHP Developer
                                    </strong>
                                    <div className="flex my-2 items-center">
                                        <Link href="https://hydralab.mx" target="_blank" className="flex my-2 items-center">
                                            <Image src={logoHydralab} height={44} width={44} alt="logoHydralab" className="mx-1"/>
                                            <div>Hydralab</div>
                                        </Link>
                                    </div>
                                    <div>
                                        <p className="text-justify">
                                            Digital Agency where I&apos;ve done different projects like backend developer and SEO Manager.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </MainContainer>
      </Suspense>
  )
}
