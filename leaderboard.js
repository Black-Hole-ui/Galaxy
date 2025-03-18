document.addEventListener("DOMContentLoaded", () => {
  const leaderboardTable = document
    .getElementById("leaderboard")
    .getElementsByTagName("tbody")[0];

  const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

  leaderboard.forEach((entry, index) => {
    const row = leaderboardTable.insertRow();
    const cellRank = row.insertCell(0);
    const cellName = row.insertCell(1);
    const cellScore = row.insertCell(2);

    cellRank.innerText = index + 1;
    cellName.innerText = entry.name;
    cellScore.innerText = entry.score;
  });
});
