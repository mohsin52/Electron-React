import fetch from 'isomorphic-fetch'
require('es6-promise').polyfill()

export default function api(method, path, data) {
  console.log(`${path}`)
  return fetch(`${path}`, {
    method: method.toUpperCase(),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(data)
  }).then(response => response.json())
  .catch(err=>console.log(err))
}