const box = document.querySelector("#box")

box.addEventListener("mousemove",(details)=>{
    // console.log("hello");
    let boxlocation = box.getBoundingClientRect();
    // console.log(boxlocation);
    let insideboxvalue = details.clientX - boxlocation.left;
    // console.log(insideboxvalue);

    if(insideboxvalue < boxlocation.width/2)
    {
        let redcolor = gsap.utils.mapRange(
            0,
            boxlocation.width/2,
            255,
            0,
            insideboxvalue
        );
        gsap.to(box,{
            backgroundColor : `rgb(${redcolor},0,0)`,
            ease:Power4,
        });
    }
    else
    {
        let bluecolor = gsap.utils.mapRange(
            boxlocation.width/2,
            boxlocation.width,
            0,
            255,
            insideboxvalue
        );
        gsap.to(box,{
            backgroundColor : `rgb(0,0,${bluecolor})`,
            ease:Power4,
        });   
    }
});

box.addEventListener("mouseleave",()=>{
    gsap.to(box,{
        backgroundColor : "white",
    });
})