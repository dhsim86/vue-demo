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
import Navigation from "@/components/Navigation.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
	components: {
		Navigation,
		Sidebar
	}
};
</script>

<style scoped>
@import "assets/bootstrap.min.css";
@import "assets/dashboard.css";
</style>
