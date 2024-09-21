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






// products1

const Data = [
    {
img:'./assets/oil.png',
price:2300,
description:'Моторное масло Lukoil Genesis Armortech 5W-40, 4 л в Самаре',
type:'brand'
    },
    {
        img:'./assets/oil.png',
        price:2500,
        description:'Моторное масло Lukoil Genesis Armortech 5W-40, 4 л в Самаре',
    },
    {
        img:'./assets/oil.png',
        price:2100,
        description:'Моторное масло Lukoil Genesis Armortech 5W-40, 4 л в Самаре',
        type:'brand'
    },
    {
        img:'./assets/oil.png',
        price:1300,
        description:'Моторное масло Lukoil Genesis Armortech 5W-40, 4 л в Самаре',
    }
]
const Box = document.querySelector('.Oils_box');
const Box2  =document.querySelector('.Oils_box2');
function RenderProduct(data) {
    Box.innerHTML = ''
    data.forEach((product)=> {
        var Product = document.createElement('div');
        Product.innerHTML = `<div class="Img_box"><img src="${product.img}" alt=""></div>
                <div class="Price_box"><span>${product.price}<svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.33648 2.39508V8.74097H7.83888C10.1617 8.74097 11.3231 7.50564 11.3231 5.55586C11.3231 3.61825 10.1617 2.39508 7.85085 2.39508H5.33648ZM8.55673 10.9282H5.41431V13.2466H10.1873V14.5966H5.41431V17.2022H2.78347V14.5966H0.438354V13.2466H2.78347V10.9282H0.438354V9.56541H2.78347V0.279785H8.63999C11.9136 0.279785 14.0443 2.55056 14.0443 5.62197C14.0443 8.68122 11.8657 10.9282 8.55673 10.9282Z" fill="#222222"/>
</svg>
</span></div>
<div class="Description_box">
    <p>${product.description}</p>
</div>
<div class="Info_box">
    <div class="Stars_box"><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0515 7.78472L11.1731 10.4694L12.05 14.4842C12.0984 14.7022 12.086 14.9307 12.0142 15.141C11.9425 15.3513 11.8147 15.5339 11.647 15.6658C11.4793 15.7976 11.2792 15.8728 11.0721 15.8818C10.8649 15.8908 10.6599 15.8332 10.4829 15.7163L7.25274 13.5675L4.02064 15.7163C3.84373 15.8325 3.63896 15.8895 3.43213 15.8802C3.22529 15.8709 3.02563 15.7956 2.85828 15.6639C2.69094 15.5322 2.56339 15.3499 2.49171 15.14C2.42002 14.93 2.4074 14.7019 2.45544 14.4842L3.33558 10.4694L0.457199 7.78472C0.300678 7.6385 0.187479 7.44567 0.131739 7.23033C0.0759991 7.01499 0.0801889 6.78666 0.143785 6.57388C0.207381 6.36109 0.327565 6.17327 0.489328 6.03387C0.65109 5.89448 0.847262 5.80968 1.05334 5.79007L4.82722 5.46098L6.28304 1.65283C6.36184 1.44529 6.49596 1.26776 6.66834 1.14282C6.84073 1.01788 7.04359 0.951172 7.25114 0.951172C7.45869 0.951172 7.66155 1.01788 7.83393 1.14282C8.00632 1.26776 8.14043 1.44529 8.21923 1.65283L9.67441 5.46098L13.4483 5.79007C13.6548 5.80895 13.8515 5.89327 14.0139 6.03248C14.1762 6.17168 14.297 6.35958 14.361 6.57262C14.4249 6.78567 14.4294 7.01439 14.3736 7.23012C14.3179 7.44586 14.2045 7.63902 14.0476 7.78541L14.0515 7.78472Z" fill="#919191"/>
</svg>
0</div>
<div class="Status_box"><span>Есть в наличие</span></div>

</div>
<div class="Btn_box">
<div class="Cart_btn"><button>В корзину</button></div>
    <div class="Other_func_box">
      <div class="Like_btn">
        <i class="fa-regular fa-heart"></i> <!-- Обычное сердечко -->
    </div>
        <div><svg id="List" width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.875122" y="0.777588" width="20" height="2" rx="1" fill="#151515"/>
<rect x="0.875122" y="15.7776" width="20" height="2" rx="1" fill="#151515"/>
<rect x="17.8751" y="13.7776" width="8" height="2" rx="1" transform="rotate(-90 17.8751 13.7776)" fill="#151515"/>
<rect x="22.8751" y="10.7776" width="8" height="2" rx="1" transform="rotate(-180 22.8751 10.7776)" fill="#151515"/>
<rect x="0.875122" y="8.77759" width="11" height="2" rx="1" fill="#151515"/>
</svg>
</div>
    </div>
</div>`
Box.append(Product)
    })
}
function RenderProduct2(data) {
    Box2.innerHTML = ''
    data.forEach((product)=> {
        var Product = document.createElement('div');
        Product.innerHTML = `<div class="Img_box"><img src="${product.img}" alt=""></div>
                <div class="Price_box"><span>${product.price}<svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.33648 2.39508V8.74097H7.83888C10.1617 8.74097 11.3231 7.50564 11.3231 5.55586C11.3231 3.61825 10.1617 2.39508 7.85085 2.39508H5.33648ZM8.55673 10.9282H5.41431V13.2466H10.1873V14.5966H5.41431V17.2022H2.78347V14.5966H0.438354V13.2466H2.78347V10.9282H0.438354V9.56541H2.78347V0.279785H8.63999C11.9136 0.279785 14.0443 2.55056 14.0443 5.62197C14.0443 8.68122 11.8657 10.9282 8.55673 10.9282Z" fill="#222222"/>
</svg>
</span></div>
<div class="Description_box">
    <p>${product.description}</p>
</div>
<div class="Info_box">
    <div class="Stars_box"><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0515 7.78472L11.1731 10.4694L12.05 14.4842C12.0984 14.7022 12.086 14.9307 12.0142 15.141C11.9425 15.3513 11.8147 15.5339 11.647 15.6658C11.4793 15.7976 11.2792 15.8728 11.0721 15.8818C10.8649 15.8908 10.6599 15.8332 10.4829 15.7163L7.25274 13.5675L4.02064 15.7163C3.84373 15.8325 3.63896 15.8895 3.43213 15.8802C3.22529 15.8709 3.02563 15.7956 2.85828 15.6639C2.69094 15.5322 2.56339 15.3499 2.49171 15.14C2.42002 14.93 2.4074 14.7019 2.45544 14.4842L3.33558 10.4694L0.457199 7.78472C0.300678 7.6385 0.187479 7.44567 0.131739 7.23033C0.0759991 7.01499 0.0801889 6.78666 0.143785 6.57388C0.207381 6.36109 0.327565 6.17327 0.489328 6.03387C0.65109 5.89448 0.847262 5.80968 1.05334 5.79007L4.82722 5.46098L6.28304 1.65283C6.36184 1.44529 6.49596 1.26776 6.66834 1.14282C6.84073 1.01788 7.04359 0.951172 7.25114 0.951172C7.45869 0.951172 7.66155 1.01788 7.83393 1.14282C8.00632 1.26776 8.14043 1.44529 8.21923 1.65283L9.67441 5.46098L13.4483 5.79007C13.6548 5.80895 13.8515 5.89327 14.0139 6.03248C14.1762 6.17168 14.297 6.35958 14.361 6.57262C14.4249 6.78567 14.4294 7.01439 14.3736 7.23012C14.3179 7.44586 14.2045 7.63902 14.0476 7.78541L14.0515 7.78472Z" fill="#919191"/>
</svg>
0</div>
<div class="Status_box"><span>Есть в наличие</span></div>

</div>
<div class="Btn_box">
<div class="Cart_btn"><button>В корзину</button></div>
    <div class="Other_func_box">
      <div class="Like_btn">
        <i class="fa-regular fa-heart"></i> <!-- Обычное сердечко -->
    </div>
        <div><svg id="List" width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.875122" y="0.777588" width="20" height="2" rx="1" fill="#151515"/>
<rect x="0.875122" y="15.7776" width="20" height="2" rx="1" fill="#151515"/>
<rect x="17.8751" y="13.7776" width="8" height="2" rx="1" transform="rotate(-90 17.8751 13.7776)" fill="#151515"/>
<rect x="22.8751" y="10.7776" width="8" height="2" rx="1" transform="rotate(-180 22.8751 10.7776)" fill="#151515"/>
<rect x="0.875122" y="8.77759" width="11" height="2" rx="1" fill="#151515"/>
</svg>
</div>
    </div>
</div>`
Box2.append(Product)
    })
}

RenderProduct(Data)
RenderProduct2(Data)


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
        RenderProduct(Data)
    }
})
Brand.addEventListener('click',()=> {
    if(Original.classList.contains('Active')) {
        Brand.classList.add('Active')
        Brand.classList.remove('Disable');
        Original.classList.remove('Active');
        Original.classList.add('Disable')
        var Data1 = Data.filter(e=> e.type == 'brand');
        console.log(Data1);
        
        RenderProduct(Data1)
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
        RenderProduct2(Data)
   
    }
})
Brand2.addEventListener('click',()=> {
    
    
    if(Original2.classList.contains('Active')) {
        Brand2.classList.add('Active')
        Brand2.classList.remove('Disable');
        Original2.classList.remove('Active');
        Original2.classList.add('Disable')
        var Data1 = Data.filter(e=> e.type == 'brand');
        console.log(Data1);
        
        RenderProduct2(Data1)
    }
})

// like 

document.querySelectorAll('.Like_btn').forEach(button => {
    button.classList.add('Disable')
    button.addEventListener('click', (e) => {
      
        
        const icon = button.querySelector('i');

        // Проверяем, заполнено ли сердечко
        if (button.classList.contains('Disable')) {
            // Меняем иконку на заполненное сердечко
            icon.style.color = '#d02c2c'
            button.classList.remove('Disable')
            button.classList.add('Active')
          
        } else {
           icon.style.color = 'black'
           button.classList.add('Disable')
           button.classList.remove('Active')
        }
    });
});


// list 
const List_btn = document.querySelectorAll('#List');
for(var List = 0;List < List_btn.length;List++) {
    List_btn[List].classList.add('Disable')
    
        List_btn[List].addEventListener('click',()=> {
            if(List_btn[List].classList.contains('Disable')) {
                List_btn[List].classList.add('Active')
                List_btn[List].classList.remove('Disable')
            }
            else {
                List_btn[List].classList.remove('Active')
                List_btn[List].classList.add('Disable')
            }
        })
    
    
}
