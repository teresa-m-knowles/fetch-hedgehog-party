const handleResponse = (response) => {
  return response.json()
    .then((json) => {
      if (!response.ok) {
        const error = {
          status: response.status,
          statusText: response.statusText,
          json
        };
        return Promise.reject(error)
      }
      return json
    })
}

const errorLog = (error) => {
  console.error({ error })
}

const getHedgehogs = () => {
  $('#hedgehog-info').html('')
  fetch(`https://hedgehog-party.herokuapp.com/api/v1/invites`)
    .then(handleResponse)
    .then(getEachHedgie)
    .catch(errorLog)
}

const getEachHedgie = (hedgies) => {
  return hedgies.forEach((hedgie) => {
      appendHedgie(hedgie)
  })
}

const appendHedgie = (hedgie) => {
  $('#hedgehog-info').append(`
    <article class="invited-hedgehog">
      <p class="name">${hedgie.name}</p>
      <p class="hoglet-number">${hedgie.hoglets}</p>
      <p class="allergies">${hedgie.allergies}</p>
      <button id="${hedgie.id}" class="uninvite-btn" aria-label="Uninvite">
        uninvite
      </button>
    </article>
  `)
}

const unInviteHedgehog = (event) => {
  event.target.parentNode.remove()
  deleteHedgehog(event.target.id);
};

const deleteHedgehog = (hedgehogId) => {
  fetch(`https://hedgehog-party.herokuapp.com/api/v1/invites/${hedgehogId}`, {
    method: 'DELETE'
  })
  .catch(errorLog)
}

const addNewHedgehog = (event) => {
  event.preventDefault();
  let name = $('#name').val();
  let hoglets = $('#hoglets').val();
  let allergies = $('#allergies').val();

  postNewHedgehog({ name, hoglets, allergies })
};

const postNewHedgehog = (newHedgehogInfo) => {
  fetch(`https://hedgehog-party.herokuapp.com/api/v1/invites`, newHedgehogPayload(newHedgehogInfo))
    .then(handleResponse)
    .then(getHedgehogs)
    .catch(errorLog)
}

const newHedgehogPayload = (body) => {
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }
}

getHedgehogs()

$('#invite-btn').on('click', addNewHedgehog)
$('#invited-hedgehogs-info').on('click', '.uninvite-btn', unInviteHedgehog)
