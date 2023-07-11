import { fetchDriversDetailsF1 } from '@/utils';
import Image from 'next/image';

export default async function Drive({ params }) {
  const { driver } = params;
  const details = await fetchDriversDetailsF1(driver);
  const { driverDetails } = details;

  const {
    firstname,
    lastname,
    country,
    dateOfBirth,
    podiums,
    team,
    points,
    grandsPrixEntered,
    worldChampionships,
    highestRaceFinish,
    highestGridPosition,
  } = driverDetails;

  return (
    <div className="w-full h-screen px-5 lg:px-40 overflow-hidden bg-drive pt-[120px]">
      <div className="flex flex-col items-start justify-center mt-10 lg:mt-20">
        <div className="flex flex-col lg:flex-row ">
          <Image
            src={`/pilot-${firstname}.png`}
            width={300}
            height={300}
            alt={firstname}
            className="object-contain bg-center rounded-xl"
          />
          <div className="mt-10 lg:ml-10 lg:mt-20 text-white">
            <h3 className="text-5xl lg:text-6xl">{firstname}</h3>
            <h3 className="text-5xl lg:text-7xl font-black">{lastname}</h3>
            <div className="mt-5 lg:mt-10 gap-x-10 flex flex-row">
              <div className="">
                <p className="font-bold">Country</p>
                <p>{country}</p>
              </div>
              <div className="">
                <p className="font-bold ">Born</p>
                <p>{dateOfBirth}</p>
              </div>
              <div className="">
                <p className="font-bold ">Podiums</p>
                <p>{podiums}</p>
              </div>
            </div>
          </div>
          <div className="w-96 lg:ml-10 rounded-xl text-white bg-gray-950 p-5 flex flex-col gap-y-5 mt-10 lg:mt-0">
            <div className="flex justify-between">
              <p>Team</p> <p>{team}</p>
            </div>
            <div className="flex justify-between">
              <p>Points</p> <p>{points}</p>
            </div>
            <div className="flex justify-between">
              <p>Grands Prix Entered</p> <p>{grandsPrixEntered}</p>
            </div>
            <div className="flex justify-between">
              <p>World Championships</p> <p>{worldChampionships}</p>
            </div>
            <div className="flex justify-between">
              <p>Highest Race Finish</p> <p>{highestRaceFinish}</p>
            </div>
            <div className="flex justify-between">
              <p>Highest Grid Position</p> <p>{highestGridPosition}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
