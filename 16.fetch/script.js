fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
    .then((response) => response.json())
    .then((data) => setSquad(data));

let setSquad = ({ squadName, homeTown, members }) => {
    document.querySelector('body').innerHTML = `
        <div class='wraper'>
            <h1>${squadName}</h1>
            <h2>${homeTown}</h2>
            <div class='members'>${addMembers(members)}</div>
        </div>`
}

let addMembers = (members) => {
    return members.map((hero) => `
        <div class='member'>
            <h3>Name: ${hero.name}</h3>
            <p>Age: ${hero.age}</p>
            <p>Secret Identity ${hero.secretIdentity}</p>
            <p>Powers:</p>
            <ul>
                ${hero.powers.map((power) => `<li>${power}</li>`).join(' ')}
            </ul>
        </div>
    `).join(' ');
}