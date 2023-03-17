const dates = [
  ["B1 Framework Due", new Date("2023-04-01T00:00:00Z")],
  ["B1 Deliveries Due", new Date("2023-04-22T00:00:00Z")],
  ["B2 Framework Due", new Date("2023-05-13T00:00:00Z")],
  ["B2 Deliveries Due", new Date("2023-06-03T00:00:00Z")],
  ["B3 Framework Due", new Date("2023-06-24T00:00:00Z")],
  ["B3 Deliveries Due", new Date("2023-07-15T00:00:00Z")],
];

const labels = ["B1 Framework Due: ", "B1 Deliveries Due: ", "B2 Framework Due: ", "B2 Deliveries Due: ", "B3 Framework Due: ", "B3 Deliveries Due: "];

let datesOutput = '';

for (let i = 0; i < dates.length; i++) {
  const date = dates[i][1];
  const label = labels[i];
  const now = new Date();

  if (now < date) {
    const diffInMs = date.getTime() - now.getTime();
    const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));
    datesOutput += `<p>${label}${date.toLocaleDateString()} (${diffInDays} days)</p>`;
  }
}

document.getElementById("dates").innerHTML = datesOutput;
