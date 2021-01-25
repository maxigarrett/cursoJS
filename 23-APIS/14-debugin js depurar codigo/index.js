const form=document.getElementById('form');
const resultado=document.getElementById('resultado');


form.addEventListener('submit',(e)=>
{
    e.preventDefault();
    console.log(e)
    if(e.target.num1.value!='' || e.target.num2.value!='')
    {
        let numero1=parseInt (e.target.num1.value);
        let numero2=parseInt(e.target.num2.value);

        const result=numero1 + numero2;

        resultado.textContent= `${numero1} + ${numero2} = ${result}`;

        e.target.reset();
    }
})

