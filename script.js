//  Header 

const Menu = document.getElementById('Menu');
const Menu_btn = document.getElementById('Menu_btn');
if(window.innerWidth <= 1073) {
    Menu.classList.add('Disable')
}
window.addEventListener('resize',()=> {
    if(window.innerWidth >= 1073 ) {
        Menu.classList.remove('Disable')
        Menu.classList.remove('Active')
        Menu_btn.innerHTML = `<svg width="29" height="19" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="29" height="3" rx="1.5" fill="#4E4E4E"/>
        <rect y="16" width="29" height="3" rx="1.5" fill="#4E4E4E"/>
        <rect y="8" width="29" height="3" rx="1.5" fill="#4E4E4E"/>
        </svg>
        `
    }  
    if(window.innerWidth <= 1073 ) {
        if(Menu.classList.contains('Active')) {
console.log('qaq');

        }
        else {
        Menu.classList.add('Disable')
    }}
   
})

Menu_btn.addEventListener('click',()=> {
    if(Menu.classList.contains('Disable')) {
        Menu.classList.add('Active')
        Menu.classList.remove('Disable')
        Menu_btn.innerHTML = '<i style="font-size:39px;color:#4E4E4E" class="fa-solid fa-xmark"></i>'
    }
    else {
        Menu.classList.remove('Active')
        Menu.classList.add('Disable')
        Menu_btn.innerHTML = `<svg width="29" height="19" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="29" height="3" rx="1.5" fill="#4E4E4E"/>
<rect y="16" width="29" height="3" rx="1.5" fill="#4E4E4E"/>
<rect y="8" width="29" height="3" rx="1.5" fill="#4E4E4E"/>
</svg>
`
    }
})


// Footer

const Row2_btn = document.getElementById('Row2_btn');
const Row2_menu = document.getElementById('Row2_menu');
const Row3_btn = document.getElementById('Row3_btn');
const Row3_menu = document.getElementById('Row3_menu');
const Row4_btn = document.getElementById('Row4_btn');
const Row4_menu = document.getElementById('Row4_menu');
Row2_btn.addEventListener('click',()=> {
    Row3_menu.classList.remove('Active');
    Row3_menu.classList.add('Disable');
    Row4_menu.classList.remove('Active');
    Row4_menu.classList.add('Disable');
 if(Row2_menu.classList.contains('Active')) {
    Row2_menu.classList.remove('Active');
    Row2_menu.classList.add('Disable')
 }
 else {
    Row2_menu.classList.add('Active');
    Row2_menu.classList.remove('Disable')
 }
})

Row3_btn.addEventListener('click',()=> {
    Row2_menu.classList.remove('Active');
    Row2_menu.classList.add('Disable');
    Row4_menu.classList.remove('Active');
    Row4_menu.classList.add('Disable');
    if(Row3_menu.classList.contains('Active')) {
       Row3_menu.classList.remove('Active');
       Row3_menu.classList.add('Disable')
    }
    else {
       Row3_menu.classList.add('Active');
       Row3_menu.classList.remove('Disable')
    }
   })
   Row4_btn.addEventListener('click',()=> {
    Row3_menu.classList.remove('Active');
    Row3_menu.classList.add('Disable');
    Row2_menu.classList.remove('Active');
    Row2_menu.classList.add('Disable');
    if(Row4_menu.classList.contains('Active')) {
       Row4_menu.classList.remove('Active');
       Row4_menu.classList.add('Disable')
    }
    else {
       Row4_menu.classList.add('Active');
       Row4_menu.classList.remove('Disable')
    }
   })

   window.addEventListener('resize',()=> {
    if(window.innerWidth > 1196) {
        Row2_menu.classList.remove('Active')
        Row3_menu.classList.remove('Active')
        Row4_menu.classList.remove('Active')
    }
   })


   // Slider 
const Left = document.getElementById('Left');
const Right = document.getElementById('Right');
const Slide = document.getElementById('Slide');


var slideWidth = 150; 
var slideMargin = 78; 
const visibleSlidesCount = 3; 
if(window.innerWidth <1415) {
    slideWidth = 100
}

if(window.innerWidth <772) {
    slideMargin = 50;
    slideWidth = 80;
}
if(window.innerWidth < 598) {
    slideWidth = 60
}
if(window.innerWidth <= 527) {
    slideWidth = 40
}
let Transform = 0;
window.addEventListener('resize',()=> {
    Slide.style.transform = 'translateX(0)'
    Transform= 0 ;
    if(window.innerWidth <1415) {
        slideWidth = 100
    }
  
    if(window.innerWidth <772) {
        slideMargin = 50;
        slideWidth = 80;
    }
    if(window.innerWidth < 598) {
        slideWidth = 60
    }
    if(window.innerWidth <= 527) {
        slideWidth = 40
    }
})

Right.addEventListener('click', () => {
  const maxTransform = (Slide.childElementCount - visibleSlidesCount) * (slideWidth + slideMargin);
  
  if (Transform < maxTransform) {
    Transform += (slideWidth + slideMargin);
    

    if (Transform > maxTransform) {
      Transform = maxTransform;
    }
    
    Slide.style.transform = `translateX(-${Transform}px)`;
  }
});

Left.addEventListener('click', () => {
  if (Transform > 0) {
    Transform -= (slideWidth + slideMargin);
    
 
    if (Transform < 0) {
      Transform = 0;
    }
    
    Slide.style.transform = `translateX(-${Transform}px)`;
  }
});


// slide2

const Left2 = document.getElementById('Left2');
const Right2 = document.getElementById('Right2');
const Slide2 = document.getElementById('Slide2');


var slideWidth = 150; 
var slideMargin = 78; 

if(window.innerWidth <1415) {
    slideWidth = 100
}

if(window.innerWidth <772) {
    slideMargin = 50;
    slideWidth = 80;
}
if(window.innerWidth < 598) {
    slideWidth = 60
}
if(window.innerWidth <= 527) {
    slideWidth = 40
}
let Transform2 = 0;
window.addEventListener('resize',()=> {
    Slide2.style.transform = 'translateX(0)'
    Transform2= 0 ;
    if(window.innerWidth <1415) {
        slideWidth = 100
    }
  
    if(window.innerWidth <772) {
        slideMargin = 50;
        slideWidth = 80;
    }
    if(window.innerWidth < 598) {
        slideWidth = 60
    }
    if(window.innerWidth <=527) {
        slideWidth = 40
    }
})

Right2.addEventListener('click', () => {
  const maxTransform = (Slide2.childElementCount - visibleSlidesCount) * (slideWidth + slideMargin);
  
  if (Transform2 < maxTransform) {
    Transform2 += (slideWidth + slideMargin);
    

    if (Transform2 > maxTransform) {
      Transform2 = maxTransform;
    }
    
    Slide2.style.transform = `translateX(-${Transform2}px)`;
  }
});

Left2.addEventListener('click', () => {
  if (Transform2 > 0) {
    Transform2 -= (slideWidth + slideMargin);
    
 
    if (Transform2 < 0) {
      Transform2 = 0;
    }
    
    Slide2.style.transform = `translateX(-${Transform2}px)`;
  }
});


// like 

document.querySelectorAll('.Like_btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const icon = button.querySelector('i');

        // Проверяем, заполнено ли сердечко
        if (icon.classList.contains('fa-regular')) {
            // Меняем иконку на заполненное сердечко
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
        } else {
            // Меняем иконку на обычное сердечко
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
        }
    });
});


// btn 
const Original = document.querySelector('.Original') ;
const Brand = document.querySelector('.Brand')
Original.classList.add('Active')
Brand.classList.add('Disable')


Original.addEventListener('click',()=> {
    if(Brand.classList.contains('Active')) {
        Brand.classList.remove('Active')
        Brand.classList.add('Disable');
        Original.classList.add('Active');
        Original.classList.remove('Disable')
    }
})
Brand.addEventListener('click',()=> {
    if(Original.classList.contains('Active')) {
        Brand.classList.add('Active')
        Brand.classList.remove('Disable');
        Original.classList.remove('Active');
        Original.classList.add('Disable')
    }
})

// btn2
const Original2 = document.querySelector('.Original2') ;
const Brand2 = document.querySelector('.Brand2')
Original2.classList.add('Active')
Brand2.classList.add('Disable')


Original2.addEventListener('click',()=> {
    if(Brand2.classList.contains('Active')) {
        Brand2.classList.remove('Active')
        Brand2.classList.add('Disable');
        Original2.classList.add('Active');
        Original2.classList.remove('Disable')
    }
})
Brand2.addEventListener('click',()=> {
    if(Original2.classList.contains('Active')) {
        Brand2.classList.add('Active')
        Brand2.classList.remove('Disable');
        Original2.classList.remove('Active');
        Original2.classList.add('Disable')
    }
})

