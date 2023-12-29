var x=0
function anime1()
{
    x=x+1;
    e=document.getElementById("arrdwn1");
    e.style.transitionDuration="0.7s";
    if(x%2==0)
    {
        e.style.transform="rotate(0deg)";
    }
    else
    {
        e.style.transform="rotate(180deg)";
    }
}
var vs=0;
function anime2()
{
    vs=vs+1;
    e=document.getElementById("arrdwn2");
    e.style.transitionDuration="0.7s";
    if(vs%2==0)
    {
        e.style.transform="rotate(0deg)";
    }
    else
    {
        e.style.transform="rotate(180deg)";
    }
}
function hover1(img)
{
    img.src="./images/boat.gif";
}
function hover2(img)
{
    img.src="./images/boat.png";
}
function hover3(img)
{
    img.src="./images/sam1.gif";
}
function hover4(img)
{
    img.src="./images/sam.png"
}
function hover5(img)
{
    img.src="./images/fit.gif";
}
function hover6(img)
{
    img.src="./images/fit.png"
}
function hover7(img)
{
    img.src="./images/jbl.gif";
}
function hover8(img)
{
    img.src="./images/jbl2.png";
}
function hover29(img)
{
    img.src="./images/zeb.png";
}
function hover30(img)
{
    img.src="./images/zebh.jpg"
}
var count=0;
function heart(img)
{
    count=count+1;
    if(count%2==0)
    {
        img.src="./images/heart.png";
    }
    else
    {
        img.src="./images/heartful.png";
    }
}
var cb=0;
function cart(id)
{
    cb=cb+1;
    w=document.getElementById("cart");
    w.innerHTML=cb;
}
//boat file js
function hover9(img)
{
    img.src="./images/pr1h.png";
}
function hover10(img)
{
    img.src="./images/pr1.png"
}
function hover11(img)
{
    img.src="./images/pr2h.png";
}
function hover12(img)
{
    img.src="./images/pr2.png"
}
function hover13(img)
{
    img.src="./images/pr3h.png";
}
function hover14(img)
{
    img.src="./images/pr3.png"
}
function hover15(img)
{
    img.src="./images/pr4h.png";
}
function hover16(img)
{
    img.src="./images/pr4.png"
}
function hover17(img)
{
    img.src="./images/pr5h.png";
}
function hover18(img)
{
    img.src="./images/pr5.png"
}
//row 2
function hover19(img)
{
    img.src="./images/pr6h.png";
}
function hover20(img)
{
    img.src="./images/pr6.png"
}
function hover21(img)
{
    img.src="./images/pr7h.png";
}
function hover22(img)
{
    img.src="./images/pr7.png"
}
function hover23(img)
{
    img.src="./images/pr8h.png";
}
function hover24(img)
{
    img.src="./images/pr8.png"
}
function hover25(img)
{
    img.src="./images/pr9h.png";
}
function hover26(img)
{
    img.src="./images/pr9.png"
}
function hover27(img)
{
    img.src="./images/pr10h.png";
}
function hover28(img)
{
    img.src="./images/pr10.png"
}
