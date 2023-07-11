import React from 'react';
import Drivers from './Drivers';

import { fetchDriversF1, fetchTeamsF1 } from '@/utils';
import Teams from './Teams';

export default async function NavBottom() {
  const f1Drivers = await fetchDriversF1();
  const f1Teams = await fetchTeamsF1();
  const { drivers } = f1Drivers;
  const { results } = f1Teams;

  return (
    <div className="w-full flex items-center justify-evenly h-10 bg-[#070C16] text-white">
      <div className="text-header">
        <Drivers drivers={drivers} />
      </div>
      <div className="text-header">
        <Teams results={results} />
      </div>
    </div>
  );
}
