const getHedgehogs = () => {
  $('#hedgehog-info').html('');

  return fetch('https://hedgehog-party.herokuapp.com/api/v1/invites')
    .then((response) => response.json())
    .then((hedgehogs) => {
      return hedgehogs.forEach((hedgehog) => {
        console.log(hedgehog);
      });
    })
    .catch((error) => console.error({ error }));
};

const addNewHedgehog = () => {

};

const unInviteHedgehog = () => {

};

$(document).ready(() => {
  getHedgehogs();
});

$('#invite-btn').on('click', addNewHedgehog);

$('#invited-hedgehogs-info').on('click', '.uninvite-btn', unInviteHedgehog);
