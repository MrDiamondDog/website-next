import Image from "next/image";
import { FaDiscord, FaGithub } from "react-icons/fa";

import Copyable from "@/components/Copyable";
import IconLink from "@/components/IconLink";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function Home() {
    return (
        <main>
            <video className="w-full h-full absolute-center object-fill blur-sm overflow-hidden" autoPlay loop muted src="Memorial_to_the_Hollow_Knight.mp4" />

            <div className="absolute-center sm:w-1/3 w-[85%] h-1/2 bg-indigo-800 bg-opacity-85 rounded-lg border-[5px] border-indigo-500 p-4">
                <div className="border-[2px] p-2 border-indigo-500 rounded-lg flex flex-row items-center gap-4">
                    <Image src="avatar.jpg" alt="Profile Picture" width={100} height={100} className="rounded-full lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] " />
                    <div className="flex flex-col">
                        <h1>MrDiamondDog</h1>
                        <p className="text-gray-400">he/him</p>
                        <div className="flex flex-row gap-2">
                            <IconLink href="https://github.com/MrDiamondDog"><FaGithub size={24} /></IconLink>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Copyable text="mrdiamonddog"><FaDiscord size={24} className="text-gray-400" /></Copyable>
                                </TooltipTrigger>
                                <TooltipContent>
                                    mrdiamonddog (click to copy)
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
