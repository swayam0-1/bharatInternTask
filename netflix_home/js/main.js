const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// select tab contentItem
function selectItem(e) {
    removeBorder();
    removeShow();
    // add border to current tab
    this.classList.add('tab-border');
    // grab contentItem from the DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //add showClass
    tabContentItem.classList.add('show'); 
    }

function removeBorder() {
tabItems.forEach( item => item.classList.remove('tab-border'));
}
// listen for tab click
tabItems.forEach( item => item.addEventListener('click', selectItem));

function removeShow() {
    tabContentItems.forEach( item => item.classList.remove('show'));
    }