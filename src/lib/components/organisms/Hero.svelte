<script>
	import BlogIcon from '$lib/icons/blog.svelte';
	import ProjectIcon from '$lib/icons/projects.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Sparkles from '../atoms/Sparkles.svelte';
	import { base } from '$app/paths';
</script>

<section id="hero">
	<h1 class="hello">Bienvenido soy Carlos!</h1>
	<p class="intro">
		<span class="left">Me divierte construir herramientas para la web,</span>
		<span class="right">y tambien escribir sobre el proceso.</span>
	</p>
	<div class="ctas">
		<Button href="#features">
			<ProjectIcon slot="icon" />
			Proyectos
		</Button>
		<Button color="primary" href="{base}/blog">
			<BlogIcon slot="icon" />
			Blog
		</Button>
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 15px;
		position: relative;
		padding: 80px 0;

		@include for-phone-only {
			padding: 40px 0 50px;
		}

		.hello {
			text-align: center;
		}

		.intro {
			font-weight: 500;
			font-size: 1.4rem;
			width: min(100%, 440px);
			display: flex;
			flex-direction: column;

			.left {
				text-align: left;
			}
			.right {
				text-align: right;
			}

			@include for-phone-only {
				display: none;
			}
		}

		.ctas {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			gap: 10px;
			width: 100%;
		}
	}
</style>
