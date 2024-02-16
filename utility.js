function hideElementByID(elementId){
    const element= document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}
 function setBackgroundColorByID(elementId){
    const element= document.getElementById(elementId);
    element.classList.add('bg-orange-400');
 }