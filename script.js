tailwind.config = {
      theme: {
        extend: {
          colors: {
            clifford: '#da373d',
            "primary":'#707070',
            "secondary":'#CFCFCF',
            "btn-color":'#B68C5A'
          }
        }
      }
    }
 
let toggleNav = document.querySelector('.toggleNav')
const togglemenu=(e)=>{
  e.name = e.name ==="menu"?"close":"menu";
  toggleNav.classList.toggle('top-[11%]');

}



