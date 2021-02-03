addEventListener('DOMContentLoaded',() =>{
    const btn_nav = document.querySelector('.btn_nav');
    const btn_ah   = document.getElementById('btn-h');
    const btn_as   = document.getElementById('btn-as');
    const btn_ac   = document.getElementById('btn-ac');
    const btn_ap   = document.getElementById('btn-ap');

    if(btn_nav) {
        
        btn_nav.addEventListener('click', () =>{
            
          const menu_items = document.querySelector('ul')
            menu_items.classList.toggle('show')


            
        })
        btn_ah.addEventListener('click', () =>{
          console.log("hola mundo");
          const menu_items = document.querySelector('ul')
            menu_items.classList.toggle('show')
          
        
        })
        btn_ap.addEventListener('click', () =>{
          console.log("hola mundo");
          const menu_items = document.querySelector('ul')
            menu_items.classList.toggle('show')
           
        
        })
        btn_ac.addEventListener('click', () =>{
          console.log("hola mundo");
          const menu_items = document.querySelector('ul')
            menu_items.classList.toggle('show')
          
        
        })
        btn_as.addEventListener('click', () =>{
          console.log("hola mundo");
          const menu_items = document.querySelector('ul')
            menu_items.classList.toggle('show')
          
        
        })
    
    }

    
        
      
          
     
})


window.addEventListener('scroll', function()
 { 
     let skill = document.getElementById('skills');
     let position = skill.getBoundingClientRect().top; 
   
     let tm_window = window.innerHeight/2.3;  
    
     if ( position < tm_window){
         setInterval( recharge() ,150);
         contador();
     }
 
}
)

function recharge(){
  var barra = document.getElementById('angular')
  var br_l = document.getElementById('laravel')
  var br_javs = document.getElementById('javascript')
  var br_java = document.getElementById('java')
  var br_pyth = document.getElementById('python')
  var br_cshart = document.getElementById('cshart')
  var br_php = document.getElementById('php')
  var br_asp = document.getElementById('asp')
  var br_pothosop = document.getElementById('pothosop')
  var br_illustrator = document.getElementById('illustrator')
  var br_adobexd = document.getElementById('adobexd')
  var br_ingles = document.getElementById('ingles')
  
 
    
   
    if( br_java.value <= 65 ){
      br_java.value += 5;
    }
    if( br_l.value <= 50  ){
      br_l.value += 5;
    }
    if( br_javs.value <= 40 ){
      br_javs.value += 5;
    }
    if( br_java <= 90 ){
      br_java.value += 5;
      console.log(br_java.value);
    }

    if( br_pyth.value <= 40 ){
      br_pyth.value += 4;
    }
    if( br_cshart.value <= 40 ){
      br_cshart.value += 4;
    }
    if( br_php.value <= 45 ){
      br_php.value += 5;
    }
    if( br_asp.value <= 40  ){
     
      br_asp.value += 4;
    }

    if( br_pothosop.value <= 60 ){
      br_pothosop.value += 5;
      barra.value += 5;
    }
    if( br_illustrator.value <= 50  ){
      br_illustrator.value += 5;
    }
    if( br_adobexd.value <= 50 ){
      br_adobexd.value += 5;
    }
    if( br_ingles.value <= 45  ){
      br_ingles.value += 5;
    }
 
}

function contador() {
  const counters = document.querySelectorAll('.counter');
  const speed = 15;
  counters.forEach(counter => {
  const updateCount = () => {
  const target = +counter.getAttribute('data-target');
  const count = +counter.innerText;
  const inc = target / speed;
  if (count < target) {
  counter.innerText = count + inc;
  //recharge();
  setTimeout(updateCount, 1);
  } else {
  counter.innerText = target;}};
  updateCount();});}