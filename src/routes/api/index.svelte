<script>
	export let item
</script>

<h1>API</h1>
<p>{item}</p>

<form action="/api" method="post">
	<input type="text" name="item" />
	<button type="submit" class="btn">Submit</button>
</form>
