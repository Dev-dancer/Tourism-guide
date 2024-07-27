const touristcardscontainer=document.querySelectorAll(".touristcardscontainer")
const contrylink=document.querySelectorAll('.click')
const slider=document.getElementById("slide")


slider.style.display='flex'

contrylink.forEach(bt =>{
    bt.addEventListener('click', (e) =>{
        val=e.target.value
        slider.innerHTML=''


        slider.style.display="flex"
    
        if(val=="Myanmar"){
            slider.appendChild(touristcardscontainer[0])
            // alert(touristcardscontainer[0])
    // contrylink[0].style.backgroundColor='lightblue'
}
else if(val=="Vietnam"){
    slider.appendChild(touristcardscontainer[1])
    }
    else if(val=="Laos"){
    slider.appendChild(touristcardscontainer[2])
    }
    else if(val=="Phillipines"){
    slider.appendChild(touristcardscontainer[3])
    }
    else if(val=="Thailand"){
    slider.appendChild(touristcardscontainer[4])
    }
    else if(val=="Cambodia"){
    slider.appendChild(touristcardscontainer[5])
    }
    else if(val=="Malaysia"){
    slider.appendChild(touristcardscontainer[6])
    }
    else if(val=="Singapore"){
    slider.appendChild(touristcardscontainer[7])
    }
    else if(val=="Brunei"){
    slider.appendChild(touristcardscontainer[8])
    }
    else if(val=="Indonesia"){
    slider.appendChild(touristcardscontainer[9])
    }
    else if(val=="East Timor"){
    slider.appendChild(touristcardscontainer[10])
    }
    
    })
});

