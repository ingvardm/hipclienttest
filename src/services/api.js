const maxPages = 4;
const resultsPerPage = 20;
const limit = resultsPerPage * maxPages + Math.floor(resultsPerPage / 2);

export async function getEntries(page = 0){
	return new Promise(resolve => {
		const start = page * resultsPerPage + 1;
		const last = (page + 1) * resultsPerPage;
		const end = Math.min(limit, last);
		const entries = [];
		const canLoadMore = last < limit;
	
		for(let i = start; i <= end; i++){
			entries.push(`Item ${i}`);
		}

		setTimeout(() => {
			resolve({entries, canLoadMore});
		}, 1000);
	});
}
