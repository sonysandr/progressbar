const progress = document.querySelector('.progress');
const loading = document.querySelector('.loading');


let i=0;

const fakeUploadPercent = [0,10,20,30,40,50,60,70,80,90,100]

const interval = setInterval(() => {
      
    progress.style.width = `${fakeUploadPercent[i]}%`;
    loading.innerHTML = fakeUploadPercent[i] + '%' ;
    i ++ ;

    if(i == fakeUploadPercent.length){
        clearInterval(interval)
        loading.innerHTML = 'Completed';
        progress.style.backgroundColor = 'red';
    }
},1000);