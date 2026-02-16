 document.getElementById('click-btn')
        .addEventListener('click', function(){
           const updateTitle = document.getElementById('page-title');
           updateTitle.innerText = 'I am Clicked So I will update'
           updateTitle.style.color = 'Maroon'
           updateTitle.style.maxWidth = '300px'
           updateTitle.style.border = '1px solid purple'
           updateTitle.style.padding = '20px'
        })

         document.getElementById('name-btn')
       .addEventListener('click', function(){
        const getName = document.getElementById('name-input')
        const name = getName.value
        const nameUpdate = document.getElementById('name-title');
        nameUpdate.innerText = name 
       })