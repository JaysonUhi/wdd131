document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

document.addEventListener('DOMContentLoaded', function () {
    const teams = {
        NFC: {
            East: [
                { name: "Dallas Cowboys", record: "9-3", owner: "Jerry Jones", coach: "Mike McCarthy", stadium: "AT&T Stadium", capacity: "80,000" },
                { name: "Philadelphia Eagles", record: "10-2", owner: "Jeffrey Lurie", coach: "Nick Sirianni", stadium: "Lincoln Financial Field", capacity: "69,796" },
                { name: "New York Giants", record: "4-8", owner: "John Mara & Steve Tisch", coach: "Brian Daboll", stadium: "MetLife Stadium", capacity: "82,500" },
                { name: "Washington Commanders", record: "5-7", owner: "Josh Harris Group", coach: "Ron Rivera", stadium: "FedExField", capacity: "67,717" }
            ],
            North: [
                { name: "Chicago Bears", record: "4-8", owner: "Virginia Halas McCaskey", coach: "Matt Eberflus", stadium: "Soldier Field", capacity: "61,500" },
                { name: "Minnesota Vikings", record: "6-6", owner: "Zygi Wilf", coach: "Kevin O'Connell", stadium: "U.S. Bank Stadium", capacity: "66,860" },
                { name: "Detroit Lions", record: "9-3", owner: "Sheila Ford Hamp", coach: "Dan Campbell", stadium: "Ford Field", capacity: "65,000" },
                { name: "Green Bay Packers", record: "6-5", owner: "Green Bay Packers Inc.", coach: "Matt LaFleur", stadium: "Lambeau Field", capacity: "81,441" }
            ],
            South: [
                { name: "Atlanta Falcons", record: "5-7", owner: "Arthur Blank", coach: "Arthur Smith", stadium: "Mercedes-Benz Stadium", capacity: "71,000" },
                { name: "New Orleans Saints", record: "5-7", owner: "Gayle Benson", coach: "Dennis Allen", stadium: "Caesars Superdome", capacity: "73,208" },
                { name: "Carolina Panthers", record: "1-11", owner: "David Tepper", coach: "Frank Reich", stadium: "Bank of America Stadium", capacity: "74,867" },
                { name: "Tampa Bay Buccaneers", record: "5-7", owner: "Glazer Family", coach: "Todd Bowles", stadium: "Raymond James Stadium", capacity: "65,890" }
            ],
            West: [
                { name: "San Francisco 49ers", record: "9-3", owner: "Jed York", coach: "Kyle Shanahan", stadium: "Levi's Stadium", capacity: "68,500" },
                { name: "Seattle Seahawks", record: "6-6", owner: "Jody Allen", coach: "Pete Carroll", stadium: "Lumen Field", capacity: "68,740" },
                { name: "Arizona Cardinals", record: "2-10", owner: "Michael Bidwill", coach: "Jonathan Gannon", stadium: "State Farm Stadium", capacity: "63,400" },
                { name: "Los Angeles Rams", record: "5-7", owner: "Stan Kroenke", coach: "Sean McVay", stadium: "SoFi Stadium", capacity: "70,240" }
            ]
        },
        AFC: {
            East: [
                { name: "Buffalo Bills", record: "8-4", owner: "Terry Pegula", coach: "Sean McDermott", stadium: "Highmark Stadium", capacity: "71,608" },
                { name: "Miami Dolphins", record: "9-3", owner: "Stephen Ross", coach: "Mike McDaniel", stadium: "Hard Rock Stadium", capacity: "64,767" },
                { name: "New England Patriots", record: "3-9", owner: "Robert Kraft", coach: "Bill Belichick", stadium: "Gillette Stadium", capacity: "65,878" },
                { name: "New York Jets", record: "4-8", owner: "Woody Johnson", coach: "Robert Saleh", stadium: "MetLife Stadium", capacity: "82,500" }
            ],
            North: [
                { name: "Baltimore Ravens", record: "8-4", owner: "Steve Bisciotti", coach: "John Harbaugh", stadium: "M&T Bank Stadium", capacity: "71,008" },
                { name: "Cincinnati Bengals", record: "6-6", owner: "Mike Brown", coach: "Zac Taylor", stadium: "Paycor Stadium", capacity: "65,515" },
                { name: "Pittsburgh Steelers", record: "7-5", owner: "Art Rooney II", coach: "Mike Tomlin", stadium: "Heinz Field", capacity: "68,400" },
                { name: "Cleveland Browns", record: "7-5", owner: "Jimmy Haslam", coach: "Kevin Stefanski", stadium: "FirstEnergy Stadium", capacity: "67,431" }
            ],
            South: [
                { name: "Jacksonville Jaguars", record: "8-4", owner: "Shahid Khan", coach: "Doug Pederson", stadium: "TIAA Bank Field", capacity: "67,814" },
                { name: "Houston Texans", record: "6-6", owner: "Cal McNair", coach: "DeMeco Ryans", stadium: "NRG Stadium", capacity: "72,220" },
                { name: "Tennessee Titans", record: "4-8", owner: "Amy Adams Strunk", coach: "Mike Vrabel", stadium: "Nissan Stadium", capacity: "69,143" },
                { name: "Indianapolis Colts", record: "6-6", owner: "Jim Irsay", coach: "Shane Steichen", stadium: "Lucas Oil Stadium", capacity: "67,000" }
            ],
            West: [
                { name: "Kansas City Chiefs", record: "9-3", owner: "Clark Hunt", coach: "Andy Reid", stadium: "Arrowhead Stadium", capacity: "76,416" },
                { name: "Las Vegas Raiders", record: "5-7", owner: "Mark Davis", coach: "Josh McDaniels", stadium: "Allegiant Stadium", capacity: "65,000" },
                { name: "Denver Broncos", record: "5-7", owner: "Pat Bowlen Trust", coach: "Nathaniel Hackett", stadium: "Empower Field at Mile High", capacity: "76,125" },
                { name: "Los Angeles Chargers", record: "5-7", owner: "Dean Spanos", coach: "Brandon Staley", stadium: "SoFi Stadium", capacity: "70,240" }
            ]
        }
    };

    const nfcDivisions = ['East', 'North', 'South', 'West'];
    nfcDivisions.forEach(division => {
        const container = document.getElementById(`nfc${division}`);
        if (container) {
            teams.NFC[division].forEach(team => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <strong>${team.name}</strong><br>
                    Record: ${team.record}<br>
                    Owner: ${team.owner}<br>
                    Coach: ${team.coach}<br>
                    Stadium: ${team.stadium}<br>
                    Capacity: ${team.capacity}
                `;
                container.appendChild(li);
            });
        }
    });

    const afcDivisions = ['East', 'North', 'South', 'West'];
    afcDivisions.forEach(division => {
        const container = document.getElementById(`afc${division}`);
        if (container) {
            teams.AFC[division].forEach(team => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <strong>${team.name}</strong><br>
                    Record: ${team.record}<br>
                    Owner: ${team.owner}<br>
                    Coach: ${team.coach}<br>
                    Stadium: ${team.stadium}<br>
                    Capacity: ${team.capacity}
                `;
                container.appendChild(li);
            });
        }
    });
});
