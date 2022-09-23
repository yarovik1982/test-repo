const input = document.getElementById('input')
const button = document.getElementById('button');
const para  = document.getElementById('message');

function getPaySum(){
   return +input.value
}

function setPaySum(paySum){
   const availableNotes = [5000,2000,1000,500,200,100];
   const res = []
   for(let i = 0; i < availableNotes.length; i++){
      let note = availableNotes[i];

      while(paySum - note >= 0){
         paySum -= note;
         res.push(note)
      }
   }
   return res.reduce(function (nom, quant) {
      return nom[quant] ? nom[quant]++ : nom[quant] = 1, nom;
    }, {});
}

input.addEventListener('input', ()=>{
   button.textContent = `выдать ${input.value}`;
})

button.addEventListener('click', ()=>{
   const paySum = getPaySum()
   if(paySum > 30000){
      input.value = ''
      button.textContent = "выдать"
      para.textContent = "Сумма к выдаче должна быть не более 30000"
      setTimeout(()=>{
         para.textContent = ''
      },3000)
   }
   else{
      for(let key in setPaySum(getPaySum())){
         para.textContent += ` ${key} - ${setPaySum(getPaySum())[key]}; `
      }
      input.value = '';
      setTimeout(()=>{
         para.textContent = '';
         button.textContent = 'выдать';
      },5000)
   }
})