const resultsPerPage = 20;
const limit = 210;

export async function getEntries(page = 0){
	return new Promise(resolve => {
		const start = page * resultsPerPage + 1;
		const end = Math.max(limit, (page + 1) * resultsPerPage);
		const entries = [];
	
		for(let i = start; i <= end; i++){
			entries.push(`Item ${i}`);
		}

		setTimeout(() => {
			resolve(entries);
		}, 1000);
	});
}
