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
 function removeBackgroundColorByID(elementId){
    const element= document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
 }