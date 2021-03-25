'use strict';

function tabs(tabsSelector, tabsContenSelector, tabsParensSelector, aciveClass) {
      
	let tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContenSelector),
    tabsParent = document.querySelector(tabsParensSelector);

    function hideTabContent() {
        
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove(aciveClass);
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(aciveClass);
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', function(event) {
        const target = event.target;
        if(target && target.classList.contains(aciveClass.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;