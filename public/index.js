const addNewHedgehog = () => {

};

const unInviteHedgehog = () => {

};

$(document).ready(() => {
  getHedgehogs();
});

$('#invite-btn').on('click', addNewHedgehog);

$('#invited-hedgehogs-info').on('click', '.uninvite-btn', unInviteHedgehog);
