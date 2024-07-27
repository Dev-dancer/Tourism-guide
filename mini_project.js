const buttons=document.querySelectorAll(".func")
const button=document.querySelector(".func")
const vid=document.querySelector("#vid")
const sourcevid=document.querySelector("#sourcevid")
vid.style.height="600px"
buttons.forEach(bt => {
    bt.addEventListener('click', (e) =>{
        val =e.target.value

        if (val=="tourist"){
            // vid.style.height="600px"
            // vid.style.removeProperty("width")
            vid.src="static/videos/tourist2.mp4"
            // button.style.visibility="hidden"
        }
        else if (val=="map"){
            // vid.style.width="1000px"
            // vid.style.removeProperty("height")
            // button.style.visibility="hidden"
            vid.src="static/videos/map.mp4"
        }
        else if (val=="quiz"){
            // vid.style.width="1000px"
            // vid.style.removeProperty("height")
            vid.src="static/videos/quiz.mp4"
            // button.style.visibility="hidden"
        }
    })
})


function changevid(){
    val=button.value
    if(val=="tourist")
    sourcevid.src="static\videos\tourist.mp4"
    if(val=="map")
    sourcevid.src="static\videos\map.mp4"
    if(val=="quiz")
    sourcevid.src="static\videos\quiz.mp4"
}