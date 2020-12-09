let trTemplate = document.querySelector('#trTemplate').content;
let docFragment = document.createDocumentFragment();

data.forEach(userData => {
	let tableTr = trTemplate.cloneNode(true);

	tableTr.querySelector('.data-tr').dataset.id = userData.userId;
	tableTr.querySelector('.data-name').textContent = (findUser(users, userData.userId)).username;
	if(userData.visit) {
		tableTr.querySelector('.data-visit').textContent = 'OK';
		tableTr.querySelector('.data-visit').classList.add('badge-success');
	} else {
		tableTr.querySelector('.data-visit').textContent = '-';
		tableTr.querySelector('.data-visit').classList.add('badge-danger');
	}
	tableTr.querySelector('.data-score').textContent = userData.score;

	docFragment.appendChild(tableTr);
});

dataTableBody.textContent = '';
dataTableBody.appendChild(docFragment);
