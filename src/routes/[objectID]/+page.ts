// browsed some posts in Stack Overflow
export async function load({ fetch, params }) {
  let id = params.objectID;

  let response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + id);
  let data = await response.json();

  return {
    artwork: data
  };
}
