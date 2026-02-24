<script>
  export let data;
  let paintingInfo = data.artwork;
</script>

<h1>{paintingInfo.title}</h1>

<p><strong>Medium:</strong> {paintingInfo.medium}</p>
<p><strong>Dimensions:</strong> {paintingInfo.dimensions}</p>
<p><strong>Artist Name:</strong> {paintingInfo.artistDisplayName}</p>
<p><strong>Artist Bio:</strong> {paintingInfo.artistDisplayBio}</p>
<p><strong>Department:</strong> {paintingInfo.department}</p>
<p><strong>Repository:</strong> {paintingInfo.repository}</p>

<!-- browsed the internet to insert the Creative Commons info. -->
{#if paintingInfo.isPublicDomain == true}
  <p>
    <strong>Public Domain:</strong>
    <a href="https://creativecommons.org/publicdomain/zero/1.0/">
      <img src="https://licensebuttons.net/p/zero/1.0/88x31.png" alt="Public Domain" style="vertical-align: middle;" />
    </a>
  </p>
{/if}

{#if paintingInfo.primaryImage != ''}
  <div style="margin-top: 20px;">
    <img src={paintingInfo.primaryImage} alt={paintingInfo.title} style="max-width: 600px; width: 100%;" />
  </div>
{/if}

<p style="margin-top: 15px;">
  <a href={paintingInfo.objectURL} target="_blank">View on The Met's website</a>
</p>
