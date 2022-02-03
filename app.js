const countersEl = document.querySelectorAll('.counter');

countersEl.forEach((countersEl) => {
	countersEl.textContent = '0';
	incrementCounter();

	function incrementCounter() {
		let currentNum = +countersEl.textContent;
		const dataCeil = countersEl.getAttribute('data-ceil');
        const increment = dataCeil / 15;
        currentNum = Math.ceil(currentNum + increment)
        
        if (currentNum < dataCeil) {
            countersEl.textContent = currentNum
            setTimeout(incrementCounter, 50);
        } else {
            countersEl.textContent = dataCeil
        }
	}
});
