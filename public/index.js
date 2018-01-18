const getHedgehogs = () => {

};

const addNewHedgehog = (event) => {

};

const uninviteHedgehog = (event) => {

};

$(document).ready(() => {
  getHedgehogs();
});

$('#invite-btn').on('click', addNewHedgehog);

$('#invited-hedgehogs-info').on('click', '.uninvite-btn', uninviteHedgehog);
