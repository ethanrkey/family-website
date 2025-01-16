import { FaGitAlt, FaGithub, FaJava, FaReact, FaNodeJs, FaHtml5, FaSwift, FaDatabase, FaFigma, FaMicrosoft, FaGoogle } from "react-icons/fa";
import { FaPython, FaGolang } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io";
import { SiMongodb, SiChromewebstore, SiLatex, SiXcode } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiDocker } from "react-icons/di";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

export default function Skills() {
    return (
    <div className="flex flex-col min-h-screen w-full pb-8">
        <header className="text-3xl text-[#ffffff] font-bold pb-12 pt-8 pl-8">I have experience using these...</header>
        <h2 className="flex justify-center text-2xl text-[#ffffff] pb-2">Programming Languages and Frameworks</h2>
        <div className="flex justify-center pt-2">
            <div className="grid grid-cols-4 gap-16">
                <LightTooltip title="Python"> 
                <FaPython size={80} className="hover:fill-[#387eb0]"/> 
                </LightTooltip>
                <LightTooltip title="Java">
                <FaJava size={80} className="hover:fill-[#387eb0]"/>
                </LightTooltip>
                <LightTooltip title="JavaScript">
                <IoLogoJavascript size={80} className="hover:fill-[#d1d422]"/>
                </LightTooltip>
                <LightTooltip title="TypeScript">
                <BiLogoTypescript size={80} className="hover:fill-[#0c82c7]"/>
                </LightTooltip>
                <LightTooltip title="React">
                <FaReact size={80} className="hover:fill-[#30abf2]"/>
                </LightTooltip>
                <LightTooltip title="Node.js">
                <FaNodeJs size={80} className="hover:fill-[#416b29]"/>
                </LightTooltip>
                <LightTooltip title="Next.js">
                <TbBrandNextjs size={80} className="hover:fill-[#000000]"/>
                </LightTooltip>
                <LightTooltip title="HTML">
                <FaHtml5 size={80} className="hover:fill-[#d43e0d]"/>
                </LightTooltip>
                <LightTooltip title="CSS">
                <IoLogoCss3 size={80} className="hover:fill-[#112ad1]"/>
                </LightTooltip>
                <LightTooltip title="Swift">
                <FaSwift size={80} className="hover:fill-[#ed7d0c]"/>
                </LightTooltip>
                <LightTooltip title="Go">
                <FaGolang size={80} className="hover:fill-[#2985cc]"/>
                </LightTooltip>
                <LightTooltip title="SQL">
                <FaDatabase size={80} className="hover:fill-[#6f7a82]"/>
                </LightTooltip>
            </div>
        </div>
        <h2 className="flex justify-center text-2xl text-[#ffffff] pt-8 pb-2">Tools and Technologies</h2>
        <div className="flex justify-center pt-2">
            <div className="grid grid-cols-4 gap-16">
                <LightTooltip title="MongoDB">
                <SiMongodb size={80} className="hover:fill-[#2c7a2f]"/>
                </LightTooltip>
                <LightTooltip title="Git">
                <FaGitAlt size={80} className="hover:fill-[#b53910]"/>
                </LightTooltip>
                <LightTooltip title="GitHub">
                <FaGithub size={80} className="hover:fill-[#000000]"/>
                </LightTooltip>
                <LightTooltip title="VSCode">
                <VscVscode size={80} className="hover:fill-[#157dc2]"/>
                </LightTooltip>
                <LightTooltip title="XCode">
                <SiXcode size={80} className="hover:fill-[#32aafa]"/>
                </LightTooltip>
                <LightTooltip title="Docker">
                <DiDocker size={80} className="hover:fill-[#2847fa]"/>
                </LightTooltip>
                <LightTooltip title="Vercel">
                <IoLogoVercel size={80} className="hover:fill-[#000000]"/>
                </LightTooltip>
                <LightTooltip title="Figma">
                <FaFigma size={80} className="hover:fill-[#d66969]"/>
                </LightTooltip>
                <LightTooltip title="LaTeX">
                <SiLatex size={80} className="hover:fill-[#117367]"/>
                </LightTooltip>
                <LightTooltip title="Chrome Extensions">
                <SiChromewebstore size={80} className="hover:fill-[#21962f]"/>
                </LightTooltip>
                <LightTooltip title="Microsoft Office">
                <FaMicrosoft size={80} className="hover:fill-[#e83c15]"/>
                </LightTooltip>
                <LightTooltip title="Google Workspace">
                <FaGoogle size={80} className="hover:fill-[#387eb0]"/>
                </LightTooltip>
            </div>
        </div>
    </div>
    );
  }