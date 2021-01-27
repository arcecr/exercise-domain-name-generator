const initDomainNameGenerator = () => {
	let pronoun = ['the','our'];
	let adj = ['great', 'big' ];
	let noun = ['jogger','racoon'];
	let ext = ['com', 'us', 'io', 'net']

	let domains = []

	for (let pr of pronoun)
		for (let ad of adj) 
			for (let no of noun)
				for (let ex of ext)
					domains.push(`${pr}${ad}${no}.${ex}`)


	domains.forEach((domain) => {
		const domainItem = document.createElement('li');
		domainItem.innerText = domain;

		const domainList = document.getElementById('listDomains');
		domainList.appendChild(domainItem);
	});
}

window.onload = initDomainNameGenerator();