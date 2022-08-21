export default async ({ store }) => {  
	await store.dispatch("content/getPosts"); 
};