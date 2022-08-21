export default async ({ store }) => {  
	await store.dispatch("content/getAuthors"); 
};