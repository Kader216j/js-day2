document.getElementById('sumbit').addEventListener('click',function(){
    const taskinput = document.getElementById('textinput');
    const tasktext = taskinput.value.trim();
    
    if (tasktext !== ''){
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.classList.add('container4')

        li.innerText = tasktext; 
        btn.innerHTML = '&times';

        li.addEventListener('click',function(){
            li.classList.toggle('container');
        });

        btn.addEventListener('click',function(){
            li.remove(); 
        });
        
        li.appendChild(btn);

        document.getElementById('tasklist').appendChild(li);

        taskinput.value = ''; 
    }

});