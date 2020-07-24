const btnGridView = document.getElementById('btnGridView');
const btnListView = document.getElementById('btnListView');
const postsWrap = document.getElementById('postsWrap');
const gridViewClass = 'grid-view';

btnGridView.addEventListener('click', onGridClick);

btnListView.addEventListener('click', onListClick);

function onGridClick() {
    btnGridView.classList.add('active');
    postsWrap.classList.add(gridViewClass);
    btnListView.classList.remove('active');
    
};

function onListClick() {
    btnListView.classList.add('active');
    postsWrap.classList.remove(gridViewClass);
    btnGridView.classList.remove('active');
};



const start = datepicker('#dateStart', { id: 1 })
const end = datepicker('#dateEnd', { id: 1 })