// browsed some posts in Stack Overflow
export async function load({ fetch }) {
  let response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/11417');
  let data = await response.json();

  return {
    artwork: data
  };
}