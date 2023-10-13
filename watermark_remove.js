document.addEventListener('DOMContentLoaded', (event) => {
    console.log("I am ready");

    setInterval(()=>{
        if( document.getElementsByClassName("w-webflow-badge").length!=0)
        {
        document.getElementsByClassName("w-webflow-badge")[0].remove();
        console.log("Let's Designs!!!!");
        }else{}
    },0.1);
  }) 