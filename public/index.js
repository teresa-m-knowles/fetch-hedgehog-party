const getHedgehogs = () => {
  $('#hedgehog-info').html('');

  fetch(`https://hedgehog-party.herokuapp.com/api/v1/invites`)
    .then(response => response.json())
    .then(hedgehogs => appendHedgehogs(hedgehogs))
    .catch(error => console.error({ error }));
};

const appendHedgehogs = (hedgehogs) => {
  hedgehogs.forEach(hedgehog => {
    $('#invited-hedgehogs-info').append(`
      <article class="invited-hedgehog">
        <p class="name">${hedgehog.name}</p>
        <p class="hoglet-number">${hedgehog.hoglets}</p>
        <p class="allergies">${hedgehog.allergies}</p>
        <button
          id="${hedgehog.id}"
          class="uninvite-btn"
          aria-label="Uninvite">
          uninvite
        </button>
      </article>
    `);
  });
};

const addNewHedgehog = () => {
  console.log("we are in the addNewHedgehog function");
};

const unInviteHedgehog = () => {
  console.log("we are in the unInviteHedgehog function");
};

getHedgehogs();

$('#invite-btn').on('click', addNewHedgehog);

$('#invited-hedgehogs-info').on('click', '.uninvite-btn', unInviteHedgehog);

//URL: https://hedgehog-party.herokuapp.com/api/v1/invites
