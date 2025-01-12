import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaSwift } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { SiChromewebstore } from "react-icons/si";
import { SiLatex } from "react-icons/si";
import { DiDocker } from "react-icons/di";
import { IoLogoVercel } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { SiXcode } from "react-icons/si";
import Tooltip from '@mui/material/Tooltip';

export default function Skills() {
    return (
    <div className="flex flex-col min-h-screen w-full pb-8">
        <header className="text-3xl font-bold pb-12 pt-8 pl-8">I have experience using these...</header>
        <h2 className="flex justify-center text-2xl pb-2">Programming Languages and Frameworks</h2>
        <div className="flex justify-center pt-2">
            <div className="grid grid-cols-4 gap-16">
                <Tooltip title="Python">
                <FaPython size={80} className="hover:fill-[#387eb0]"/> 
                </Tooltip>
                <Tooltip title="Java">
                <FaJava size={80} className="hover:fill-[#387eb0]"/>
                </Tooltip>
                <Tooltip title="JavaScript">
                <IoLogoJavascript size={80} className="hover:fill-[#d1d422]"/>
                </Tooltip>
                <Tooltip title="TypeScript">
                <BiLogoTypescript size={80} className="hover:fill-[#0c82c7]"/>
                </Tooltip>
                <Tooltip title="React">
                <FaReact size={80} className="hover:fill-[#30abf2]"/>
                </Tooltip>
                <Tooltip title="Node.js">
                <FaNodeJs size={80} className="hover:fill-[#416b29]"/>
                </Tooltip>
                <Tooltip title="Next.js">
                <TbBrandNextjs size={80} className="hover:fill-[#000000]"/>
                </Tooltip>
                <Tooltip title="HTML">
                <FaHtml5 size={80} className="hover:fill-[#d43e0d]"/>
                </Tooltip>
                <Tooltip title="CSS">
                <IoLogoCss3 size={80} className="hover:fill-[#112ad1]"/>
                </Tooltip>
                <Tooltip title="Swift">
                <FaSwift size={80} className="hover:fill-[#ed7d0c]"/>
                </Tooltip>
                <Tooltip title="Go">
                <FaGolang size={80} className="hover:fill-[#2985cc]"/>
                </Tooltip>
                <Tooltip title="SQL">
                <FaDatabase size={80} className="hover:fill-[#6f7a82]"/>
                </Tooltip>
            </div>
        </div>
        <h2 className="flex justify-center text-2xl pt-8 pb-2">Tools and Technologies</h2>
        <div className="flex justify-center pt-2">
            <div className="grid grid-cols-4 gap-16">
                <Tooltip title="MongoDB">
                <SiMongodb size={80} className="hover:fill-[#2c7a2f]"/>
                </Tooltip>
                <Tooltip title="Git">
                <FaGitAlt size={80} className="hover:fill-[#b53910]"/>
                </Tooltip>
                <Tooltip title="GitHub">
                <FaGithub size={80} className="hover:fill-[#000000]"/>
                </Tooltip>
                <Tooltip title="VSCode">
                <VscVscode size={80} className="hover:fill-[#157dc2]"/>
                </Tooltip>
                <Tooltip title="XCode">
                <SiXcode size={80} className="hover:fill-[#32aafa]"/>
                </Tooltip>
                <Tooltip title="Docker">
                <DiDocker size={80} className="hover:fill-[#2847fa]"/>
                </Tooltip>
                <Tooltip title="Vercel">
                <IoLogoVercel size={80} className="hover:fill-[#000000]"/>
                </Tooltip>
                <Tooltip title="Figma">
                <FaFigma size={80} className="hover:fill-[#d66969]"/>
                </Tooltip>
                <Tooltip title="LaTeX">
                <SiLatex size={80} className="hover:fill-[#117367]"/>
                </Tooltip>
                <Tooltip title="Chrome Extensions">
                <SiChromewebstore size={80} className="hover:fill-[#21962f]"/>
                </Tooltip>
                <Tooltip title="Microsoft Office">
                <FaMicrosoft size={80} className="hover:fill-[#e83c15]"/>
                </Tooltip>
                <Tooltip title="Google Workspace">
                <FaGoogle size={80} className="hover:fill-[#387eb0]"/>
                </Tooltip>
            </div>
        </div>
    </div>
    );
  }