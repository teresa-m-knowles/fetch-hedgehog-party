const getHedgehogs = () => {
  $('#hedgehog-info').html('');

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

//URL: https://hedgehog-party.herokuapp.com/api/v1/invites
