const AllimgProjects = document.getElementById('imgProjects');
const game = document.getElementById('game');
const aboutButton = document.getElementById('aboutButton');
const sidenav = document.getElementById('sidenav');
const closeButton = document.getElementById('close');
const body = document.getElementById('projet')

for (i = 0; i < 2; i++)
    if (isMobileDevice())
        AllimgProjects.children[i].children[0].children[0].children[0].style.display = 'none';

if (!isMobileDevice())
{
    // game launch
    aboutButton.addEventListener('click', () =>
    {
        sidenav.style.display = 'none'
        game.style.visibility = 'visible';
        body.style.overflow = 'hidden'
    });
    
    // game closed
    closeButton.addEventListener('click', (e) =>
    {
        game.style.visibility = 'hidden';
        e.target.style.display = 'none';
        location.reload();
    });
}
else if (isMobileDevice())
    sidenav.style.display = 'none'