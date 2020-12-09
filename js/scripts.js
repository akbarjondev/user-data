let trTemplate = document.querySelector('#trTemplate').content;
let docFragment = document.createDocumentFragment();

let currentDay = getYear() + '-' + getMonth(1) + '-' + getDay(1);
sortDate.value = currentDay;

let renderArray = (array, dataTable) => {
	array.forEach(userData => {
		let tableTr = trTemplate.cloneNode(true);

		tableTr.querySelector('.data-tr').dataset.id = userData.userId;
		tableTr.querySelector('.data-name').textContent = (findData(users, userData.userId)).username;
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

	dataTable.textContent = '';
	dataTable.appendChild(docFragment);
}

const renderData = (evt) => {
	let filteredData = data.filter(userData => userData.visitDate === sortDate.value);

	renderArray(filteredData, dataTableBody);
}

renderData();

sortDate.addEventListener('change', renderData);

// modal close
jsCloseModal.addEventListener('click', () => {
	userModal.classList.remove('modal-on');
});

// open modal
dataTableBody.addEventListener('click', (evt) => {
	if(evt.target.matches('.data-name')) {
		userModal.classList.add('modal-on');

		let userId = Number(evt.target.closest('.data-tr').dataset.id);
		let oneUserData = data.filter(userData => userData.userId === userId);
		
		renderArray(oneUserData, userDataTable);
	}
});