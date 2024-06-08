const ifram = document.getElementById("iframe_map");
const blockAbout = document.getElementById("blockAbout");
const skills = document.getElementById("skills");
const mark = document.getElementById('mark');
const place = document.getElementById("place");

if (!isMobileDevice()) 
{
  place.style.cursor = "pointer";
  place.style.textDecoration = "underline darkgrey"

  place.addEventListener('click', () =>
  {
    ifram.style.display = "block";
    mark.style.display = "block";
    blockAbout.style.display = "none";
    skills.style.visibility = "hidden";
  });

  mark.addEventListener('click', () =>
  {
    ifram.style.display = "none"
    mark.style.display = 'none'
    blockAbout.style.display = "block";
    skills.style.visibility = "visible";
  });
};
