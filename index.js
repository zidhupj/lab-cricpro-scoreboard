const popupbg = document.querySelector('.popupbg');

const removepopup = (e) => {
    if (e.target.classList.contains('popupbg')) {
        popupbg.style.display = 'none';
    }
}

popupbg.addEventListener('click', removepopup);

const popup = (player) => {
    popupbg.style.display = 'flex';
    const popup = document.createElement('img');
    popup.src = `./assets/${player}`;
    popup.classList.add('popup');
    popupbg.replaceChildren(popup);
}

