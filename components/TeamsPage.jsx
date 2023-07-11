import { fetchTeamsDetailsF1 } from '@/utils';
import Image from 'next/image';

export default async function TeamsPage({ team_name }) {
  const f1TeamsDetails = await fetchTeamsDetailsF1(team_name);
  const { teamDetails } = f1TeamsDetails;

  const {
    base,
    teamChief,
    technicalChief,
    chassis,
    powerUnit,
    firstTeamEntry,
    worldChampionships,
    polePositions,
    teamName,
    drivers,
  } = teamDetails;

  return (
    <div className="mt-[120px] w-full px-2 lg:px-20">
      <div className="pt-20">
        <h3 className="text-2xl lg:text-3xl font-black">{teamName}</h3>
      </div>
      <div className="bg-slate-100 mt-10 flex flex-col lg:grid grid-cols-2">
        <div className="lg:p-20 p-3">
          <div className="text-lg flex flex-col gap-y-3">
            <div className="between">
              <span className="font-black">Base</span>
              <span>{base}</span>
            </div>
            <div className="between">
              <span className="font-black">Team Chief</span>
              <span>{teamChief}</span>
            </div>
            <div className="between">
              <span className="font-black">Technical Chief</span>
              <span>{technicalChief}</span>
            </div>
            <div className="between">
              <span className="font-black">Chassis</span>
              <span>{chassis}</span>
            </div>
            <div className="between">
              <span className="font-black">Power Unit</span>
              <span>{powerUnit}</span>
            </div>
            <div className="between">
              <span className="font-black">First Team Entry</span>
              <span>{firstTeamEntry}</span>
            </div>
            <div className="between">
              <span className="font-black">World Championships</span>
              <span>{worldChampionships}</span>
            </div>
            <div className="between">
              <span className="font-black">Pole Position</span>
              <span>{polePositions}</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-2 w-full mt-10 lg:mt-0">
          <div className="bg-[#070C16] text-white hover:bg-white hover:text-black cursor-pointer transition-colors">
            <div className="w-full h-3/4 relative">
              <Image
                src={`/pilot-${drivers[0].firstname}.png`}
                fill
                className="object-cover bg-center hidden lg:flex hover:object-top"
                loading="lazy"
              />
              <Image
                src={`/pilot-${drivers[0].firstname}.png`}
                width={500}
                height={500}
                className="object-cover bg-center hover:object-top"
                loading="lazy"
              />
            </div>
            <h4 className="text-xl mt-5 ml-2">
              {drivers[0].firstname}{' '}
              <span className="font-bold">{drivers[0].lastname}</span>
            </h4>
            <h4 className="ml-2 text-sm">{teamName}</h4>
          </div>
          <div
            className="bg-[#070C16] text-white hover:bg-transparent
           hover:text-black cursor-pointer transition-colors"
          >
            <div className="w-full h-3/4 relative">
              <Image
                src={`/pilot-${drivers[1].firstname}.png`}
                fill
                className="object-cover bg-center hidden lg:flex hover:object-top"
                loading="lazy"
              />
              <Image
                src={`/pilot-${drivers[1].firstname}.png`}
                width={500}
                height={500}
                className="object-cover bg-center hover:object-top"
                loading="lazy"
              />
            </div>
            <h4 className="text-xl mt-5 ml-2">
              {drivers[1].firstname}{' '}
              <span className="font-bold">{drivers[1].lastname}</span>
            </h4>
            <h4 className="ml-2 text-sm">{teamName}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
