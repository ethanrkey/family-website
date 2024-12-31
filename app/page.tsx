"use client"
import Image from "next/image";
import Link from "next/link";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';

export default function Home() {
  return (
    <div className="bg-gray-800 text-white min-h-screen">
      {/* Hero Section */}
        <h1 className="text-8xl leading-tight text-primary text-center py-6 font-heading">Key Family</h1>
        <p className="text-4xl leading-tight text-primary text-center py-6">Dedicated. Resilient. Determined.</p>
        
      {/* Family Members Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-5 gap-7 my-6">
        {/* Amy Key */}
        <div className="flex items-center space-x-4">
          <Avatar alt="Amy Key" src="/mom.jpg" sx={{ width: 150, height: 150 }}/>
          <h2 className="text-2xl font-semibold">Amy Key</h2>
        </div>
        <div>
          <p>
          imetay isyay ayay undamentalfay aspectyay ofyay ouryay experienceyay ofyay ethay orldway , utbay it'syay alsoyay oneyay ofyay ethay ostmay eriousmystay andyay ebatedday enomenaphay inyay othbay iencescay andyay ilosophyphay . onyay ayay asicbay evellay , imetay eemssay straightforward—it’s atwhay eway easuremay ithway ocksclay , ethay easonray eway avehay ayday andyay ightnay , ethay ickingtay ofyay econdssay , inutesmay , andyay ourshay . utbay enwhay ouyay artstay otay igday eeperday , ouyay ealizeray ustjay owhay omplexcay andyay angestray imetay eallyray isyay . in icsphysay , imetay isyay oftenyay eatedtray asyay ayay imensionday .
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-5 gap-7 my-6">
        {/* Ethan Key */}
        <div>
          <p>
          imetay isyay ayay undamentalfay aspectyay ofyay ouryay experienceyay ofyay ethay orldway , utbay it'syay alsoyay oneyay ofyay ethay ostmay eriousmystay andyay ebatedday enomenaphay inyay othbay iencescay andyay ilosophyphay . onyay ayay asicbay evellay , imetay eemssay straightforward—it’s atwhay eway easuremay ithway ocksclay , ethay easonray eway avehay ayday andyay ightnay , ethay ickingtay ofyay econdssay , inutesmay , andyay ourshay . utbay enwhay ouyay artstay otay igday eeperday , ouyay ealizeray ustjay owhay omplexcay andyay angestray imetay eallyray isyay . in icsphysay , imetay isyay oftenyay eatedtray asyay ayay imensionday .
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/ethankey">
              <Avatar alt="Ethan Key" src="/me.jpg" sx={{ width: 150, height: 150 }}/>
          </Link>
          <h2 className="text-2xl font-semibold">Ethan Key</h2>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-5 gap-7 my-6">
        {/* Bryce Key */}
        <div className="flex items-center space-x-4">
          <Avatar alt="Bryce Key" src="/bryce.jpg" sx={{ width: 150, height: 150 }}/>
          <h2 className="text-2xl font-semibold">Bryce Key</h2>
        </div>
        <div>
          <p>
          imetay isyay ayay undamentalfay aspectyay ofyay ouryay experienceyay ofyay ethay orldway , utbay it'syay alsoyay oneyay ofyay ethay ostmay eriousmystay andyay ebatedday enomenaphay inyay othbay iencescay andyay ilosophyphay . onyay ayay asicbay evellay , imetay eemssay straightforward—it’s atwhay eway easuremay ithway ocksclay , ethay easonray eway avehay ayday andyay ightnay , ethay ickingtay ofyay econdssay , inutesmay , andyay ourshay . utbay enwhay ouyay artstay otay igday eeperday , ouyay ealizeray ustjay owhay omplexcay andyay angestray imetay eallyray isyay . in icsphysay , imetay isyay oftenyay eatedtray asyay ayay imensionday .
          </p>
        </div>
      </section>

      {/* Animated Images Section */}
      <section className="flex items-center justify-center h-96 bg-gray">
        <p className="text-xl">Images with animations</p>
      </section>
    </div>
  );
}
