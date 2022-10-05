<script>
  export let data;
</script>

<h1>{data.dummy.title}</h1>
<ul>
  <li>{data.dummy.description}</li>
  <li>{data.dummy.price}</li>
  <img src={data.dummy.thumbnail} alt={`${data.dummy.title} image`} />
</ul>
