<script>
  var keyword = '';
  let searchResults = [];
  let waiting = false;
  let didSearch = false;

  // written with the help of AI
  async function doSearch() {
    if (keyword == '') {
      return;
    }

    waiting = true;
    didSearch = true;
    searchResults = [];

    let searchUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/search?q=' + keyword;
    let res = await fetch(searchUrl);
    let json = await res.json();

    if (json.objectIDs == null) {
      waiting = false;
      return;
    }

    let topTen = json.objectIDs.slice(0, 10);

    for (let i = 0; i < topTen.length; i++) {
      let artId = topTen[i];
      let detailRes = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + artId);
      let detailData = await detailRes.json();
      searchResults = [...searchResults, detailData];
    }

    waiting = false;
  }

  function handleKeypress(event) {
    if (event.key == 'Enter') {
      doSearch();
    }
  }
</script>

<img
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg/1280px-Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg"
  alt="The Metropolitan Museum of Art"
  style="width: 100%; max-height: 300px; object-fit: cover; display: block; margin-bottom: 20px;"
/>

<h2>Welcome to the Met Inventory Info Website</h2>

<p>This website displays information on two artworks at the Metropolitan Museum of Art:</p>

<ol>
  <li><a href="/wheat-field">Wheat Field with Cypresses</a> by Vincent van Gogh</li>
  <li><a href="/washington">Washington Crossing the Delaware</a> by Emanuel Leutze</li>
</ol>

<p style="margin-top: 15px;">
  You can learn about the artist, medium, dimensions, and location of the artworks, and check out
  more information about them on the official Met website. Enjoy the exploration!
</p>

<!-- written with the help of AI -->
<div style="margin-top: 25px;">
  <input
    type="text"
    placeholder="Search for artworks by keyword (limit 10)..."
    bind:value={keyword}
    on:keypress={handleKeypress}
    style="padding: 8px; width: 400px; font-size: 15px;"
  />
  <button on:click={doSearch} style="padding: 8px 16px; margin-left: 10px; font-size: 15px; cursor: pointer;">
    Search
  </button>
</div>

{#if waiting}
  <p>Loading results...</p>
{/if}

<!-- written with the help of AI -->
{#if didSearch && !waiting}
  {#if searchResults.length == 0}
    <p>No results found.</p>
  {:else}
    <ul style="margin-top: 15px;">
      {#each searchResults as item}
        <li style="margin-bottom: 6px;">
          <a href="/{item.objectID}">{item.title}</a>
        </li>
      {/each}
    </ul>
  {/if}
{/if}
