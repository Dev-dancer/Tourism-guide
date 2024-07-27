// v=countrylink[0].value
// countrylink.onclick=function() {info()};


// let currentCountry = "";
const contrylink=document.querySelectorAll('.click')
const infolist=document.querySelectorAll(".countryinfo")
const infodiv=document.getElementById("rightinfo")

const head=document.querySelector(".infoheader p")
let val='';


 if (val==""){
        infodiv.style.display="block"
    }



contrylink.forEach(bt =>{
    bt.addEventListener('click', (e) =>{
        val=e.target.value

// document.addEventListener('click', function(event) {
//     if (event.target.classList.contains('click')) 
//         var val = event.target.value;

    infodiv.innerHTML=''
    
         infodiv.style.display="flex"
     if(val=="Myanmar"){
    infodiv.appendChild(infolist[0])
    // infodiv.style.backgroundColor="yellow"
}

else if(val=="Vietnam"){
    infodiv.appendChild(infolist[1])
    // head.style.webkitTextStroke="1px red" 
    }
    else if(val=="Laos"){
    infodiv.appendChild(infolist[2])
    }
    else if(val=="Phillipines"){
    infodiv.appendChild(infolist[3])
    }
    else if(val=="Thailand"){
    infodiv.appendChild(infolist[4])
    }
    else if(val=="Cambodia"){
    infodiv.appendChild(infolist[5])
    }
    else if(val=="Malaysia"){
    infodiv.appendChild(infolist[6])
    }
    else if(val=="Singapore"){
    infodiv.appendChild(infolist[7])
    }
    else if(val=="Brunei"){
    infodiv.appendChild(infolist[8])
    }
    else if(val=="Indonesia"){
    infodiv.appendChild(infolist[9])
    }
    else if(val=="East Timor"){
    infodiv.appendChild(infolist[10])
    }
    
    })
});

// function info(){
//     const countrylink = document.getElementById("click")
//     const infodiv=document.getElementById("rightinfo")
//     const infolist=document.querySelectorAll(".countryinfo")
//     val=countrylink.value
//     alert(val)
//     infodiv.innerHTML=''

//     if(val=="Burma"){
//     infodiv.appendChild(infolist[0])
//     }
//     else if(val=="Vietnam"){
//     infodiv.appendChild(infolist[1])
//     }
//     else if(val=="Laos"){
//     infodiv.appendChild(infolist[2])
//     }
//     else if(val=="Phillipines"){
//     infodiv.appendChild(infolist[3])
//     }
//     else if(val=="Thailand"){
//     infodiv.appendChild(infolist[4])
//     }
//     else if(val=="Cambodia"){
//     infodiv.appendChild(infolist[5])
//     }
//     else if(val=="Malaysia"){
//     infodiv.appendChild(infolist[6])
//     }
//     else if(val=="Singapore"){
//     infodiv.appendChild(infolist[7])
//     }
//     else if(val=="Brunei"){
//     infodiv.appendChild(infolist[8])
//     }
//     else if(val=="Indonesia"){
//     infodiv.appendChild(infolist[9])
//     }
//     else if(val=="East Timor"){
//     infodiv.appendChild(infolist[10])
//     }
//     currentCountry = val;
// }



var c=0
const imgzoomm=document.querySelectorAll(".smallermap")
imgzoomm.forEach(bt =>{
    bt.addEventListener('click', (e) =>{
        val=e.target.value
        
        const imgzoom=document.querySelector(".smallermap")
        // if(val!=""){
    // const bod = document.querySelector('.map');
    const hd=document.querySelector('.infoheader')
    const notspecial=document.querySelector('.notspecial')
    const bigmap=document.querySelector('.map')

    const tt=document.querySelector('.touristcardscontainer')
    
        if (c==0){
            imgzoom.classList.add('special')
            imgzoom.style.outline="1000px rgba(0, 0, 0, 0.92) solid"
            
            bigmap.style.removeProperty('position')

            imgzoom.classList.remove('notspecial')
            // bod.style.filter="blur(5px)"
            // hd.style.margin="0px 0px 300px 0px"
            c++
        }
        else if(c!=0){
            imgzoom.style.removeProperty('position')
            imgzoom.classList.add('notspecial')
            imgzoom.classList.remove('special')
            imgzoom.style.removeProperty('outline')
            // tt.style.removeProperty('display')
            // bod.style.filter="none"
            // hd.style.margin="0px 0px 0px 0px"

            c=0
        // }
        }
        })
});


// var c=0
//     const imgzoom=document.querySelector(".smallermap")
//     const bod = document.querySelector('.map');
//     const hd=document.querySelector('.infoheader')
//     const notspecial=document.querySelector('.notspecial')
//     const bigmap=document.querySelector('.map')

//     const tt=document.querySelector('.touristcardscontainer')
//     imgzoom.addEventListener('click', () => {
//         if (c==0){
//             imgzoom.classList.add('special')
//             imgzoom.style.outline="1000px rgba(0, 0, 0, 0.92) solid"
            
//             bigmap.style.removeProperty('position')

//             imgzoom.classList.remove('notspecial')
//             // bod.style.filter="blur(5px)"
//             // hd.style.margin="0px 0px 300px 0px"
//             c++
//         }
//         else if(c!=0){
//             imgzoom.style.removeProperty('position')
//             imgzoom.classList.add('notspecial')
//             imgzoom.classList.remove('special')
//             imgzoom.style.removeProperty('outline')
//             // tt.style.removeProperty('display')
//             // bod.style.filter="none"
//             // hd.style.margin="0px 0px 0px 0px"

//             c=0
//         }
//     })
