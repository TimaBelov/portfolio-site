const competenTitles = Array.from(document.querySelectorAll('.competence__title'));
console.log(competenTitles);

let array_length;
if(competenTitles.length % 2 == 0) array_length = competenTitles.length
else array_length = competenTitles.length - 1;

for(let i = 0;i<competenTitles.length ;i+=2)
{
    if(competenTitles[i].offsetHeight < competenTitles[i+1].offsetHeight)
    {
        competenTitles[i].style.height = competenTitles[i+1].offsetHeight;
        console.log(competenTitles[i+1].clientHeight);
    }
    else
    {
        competenTitles[i+1].height = competenTitles[i].offsetHeight;
        console.log(competenTitles[i+1].clientHeight);
    }
}