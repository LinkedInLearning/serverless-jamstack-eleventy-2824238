const fetch = require('node-fetch');

module.exports = async function() {

return fetch('http://trainingxyz.com/api/users/all')
  .then(res => res.json())
  .then(json => {
    return {
      clients: json
    }
  })
}