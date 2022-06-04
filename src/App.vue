<template>
	<div>
		<navigation></navigation>
		<div class="container-fluid">
			<div class="row">
				<sidebar></sidebar>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>
<script>

export default {
	components: {
	}
};
</script>

<style scoped>
</style>
