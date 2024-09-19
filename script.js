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