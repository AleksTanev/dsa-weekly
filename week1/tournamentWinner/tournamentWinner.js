
function findTournamentWinner(competitions, results) {  
  const mapTeamResults = competitions.reduce((map, [homeTeam, awayTeam], i) => {
    const roundWinner = (results[i] === 1) ? homeTeam : awayTeam;

    map[roundWinner] = (map[roundWinner] || 0) + 1;

    return map;
  }, {});

  const winner = Object.entries(mapTeamResults)
    .reduce((currentBestTeam, [teamName, result]) => {
      if (currentBestTeam.result < result) {
        currentBestTeam = { teamName, result };
      }
      
      return currentBestTeam;
    }, { teamName: '', result: 0} );

  return winner.teamName;
}

//// TESTS
{
  const competitions = [["pirates", "poopies"], ["poopies", "pepes"], ["pepes", "pirates"]];
  const results = [1,0,0]; 
  console.log(findTournamentWinner(competitions,results))
}