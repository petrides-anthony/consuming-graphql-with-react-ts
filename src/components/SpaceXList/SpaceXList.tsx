import React from 'react';

const SPACEX_LAUNCHES_QUERY = `
{
  launchesPast(limit: 10) {
    id
    mission_name
    launch_date_local
    launch_success
  }
}
`
const useLaunchData = () => {
  const [launchData, setLaunchData] = React.useState<any[]>([]);
  
  React.useEffect(() => {
    fetch('https://api.spacex.land/graphql/', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body:  JSON.stringify({ query: SPACEX_LAUNCHES_QUERY })
    }).then(response => response.json())
    .then(data => setLaunchData(data.data.launchesPast))
  }, []);

  return launchData;
}

const SpaceXList = () => {
  const launchData = useLaunchData();

  return (
    <div>
      <h2>Space X: Last 10 Missions</h2>
      <ul className="ul">
        {launchData.map(launch => (
          <li key={launch.id}>
            {launch.mission_name} {launch.launch_success ? '✅' : '❌'}
          </li>
        ))}
      </ul>
    </div>
  )
};

export default SpaceXList;