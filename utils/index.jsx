const headers = {
  'X-RapidAPI-Key': '2136fcec17msh4741451f13987b6p10a676jsn59268c188b8d',
  'X-RapidAPI-Host': 'fia-formula-1-championship-statistics.p.rapidapi.com',
};

const options = {
  'X-RapidAPI-Key': '2136fcec17msh4741451f13987b6p10a676jsn59268c188b8d',
  'X-RapidAPI-Host': 'f1-live-motorsport-data.p.rapidapi.com',
};

export const fetchTeamsDetailsF1 = async team => {
  const response = await fetch(
    `https://fia-formula-1-championship-statistics.p.rapidapi.com/api/teams/details/${team}`,
    { headers: headers }
  );

  const teams = await response.json();

  return teams;
};

export const fetchTeamsF1 = async () => {
  const response = await fetch(
    'https://f1-live-motorsport-data.p.rapidapi.com/constructors/2023',
    { headers: options }
  );

  const teams = await response.json();

  return teams;
};

export const fetchDriversF1 = async () => {
  const response = await fetch(
    'https://fia-formula-1-championship-statistics.p.rapidapi.com/api/drivers',
    { headers: headers }
  );

  const drivers = await response.json();

  return drivers;
};
