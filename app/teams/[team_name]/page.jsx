import { fetchTeamsDetailsF1 } from '@/utils';
import Image from 'next/image';

export default async function Teams({ params }) {
  const { team_name } = params;
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
    <div className="mt-[120px] w-full bg-slate-100">
      <div className="pt-20 ml-10 lg:ml-52">
        <h3 className="text-3xl lg:text-5xl font-black">{teamName}</h3>
      </div>
      <div className="mx-5 my-10 lg:mx-64 flex flex-col lg:flex-row p-2">
        <div className="lg:w-1/2 flex flex-col">
          <Image
            src={`/team-${teamName}.png`}
            width={300}
            height={300}
            alt={teamName}
          />
          <div className="mt-10 text-lg">
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

        <div className="lg:w-1/2 flex lg:flex-row pl-10">
          <div className="lg:w-1/2 relative">
            <Image
              src={`/pilot-${drivers[0].firstname}.png`}
              width={1000}
              height={500}
              alt={drivers[0].firstname}
              className="object-cover"
            />
            <div className="flex flex-col items-start justify-center mt-5">
              <h3>
                {drivers[0].firstname} {drivers[0].lastname}
              </h3>
              <h3>{teamName}</h3>
            </div>
          </div>
          <div className="lg:w-1/2">2</div>
        </div>
      </div>
    </div>
  );
}
