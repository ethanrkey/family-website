"use client";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { skillGroups } from "@/content/skills";

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
        <header className="text-3xl text-ink font-bold pb-12 pt-8 pl-8">I have experience using these...</header>
        {skillGroups.map((group) => (
          <section key={group.heading}>
            <h2 className="flex justify-center text-2xl text-ink pt-8 pb-2">{group.heading}</h2>
            <div className="flex justify-center pt-2">
                <ul className="grid grid-cols-4 gap-16 list-none">
                {group.skills.map(({ name, icon: Icon, hoverClass }) => (
                  <li key={name}>
                    <LightTooltip title={name}>
                      <Icon size={80} aria-label={name} role="img" className={`fill-ink-muted ${hoverClass}`}/>
                    </LightTooltip>
                  </li>
                ))}
                </ul>
            </div>
          </section>
        ))}
    </div>
    );
}
