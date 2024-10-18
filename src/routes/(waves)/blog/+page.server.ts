import { filteredPosts } from '$lib/data/blog-posts';

export async function load(serverLoadEvent) {
	const { fetch, params, url, route } = serverLoadEvent;
	console.log(params, url, route);
	return {
		posts: filteredPosts
	};
}
