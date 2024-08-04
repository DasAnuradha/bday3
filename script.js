const click=document.querySelector('.click');
const giftBox=document.querySelector('.gift-box')
const giftContainer=document.querySelector('.gift-conatiner')
const text=document.querySelector('.text');


click.addEventListener('click',()=>
{
    if(click.className==="click")
        {
            click.classList.add('active')
            giftBox.classList.add('active')
            giftContainer.classList.add('active')
            text.classList.add('active')
            
        }

        else{
            click.classList.remove('active')
            giftBox.classList.remove('active')
            giftContainer.classList.remove('active')
            // text.classList.remove('active')
        }
})