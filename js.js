var SocialMediasAnim = false;
function showSocialMedias()
{
        document.getElementById("SocialMediasList").style.top = "60%";
        document.getElementById("MediaLabel").style.color = "red";
        document.getElementById("SocialMediasList").style.animation = "MediasAnimation 1s";
        document.getElementById("SocialMediasList").style.opacity = "100%";
        document.getElementById("MediasBorder").style.animation = "BorderAnimation 1s";
        document.getElementById("SocialMediasList").addEventListener("animationend", function()
        {
                SocialMediasAnim = true;
                
        })
}
function hideSocialMedias()
{
        if(SocialMediasAnim == true)
        {
                document.getElementById("SocialMediasList").style.top = "-100%";
                document.getElementById("MediaLabel").style.color = "#e01119";
                document.getElementById("MediasBorder").style.animation = "BorderAnimation2 0.5s";
                document.getElementById("MediasBorder").style.width = "0%";
                document.getElementById("SocialMediasList").style.animation = "MediasAnimation2 0.8s ";
                document.getElementById("SocialMediasList").style.opacity = "0%";
                document.getElementById("SocialMediasList").addEventListener("animationend", function()
                {
                        SocialMediasAnim = false;
                        
                })
        }
        }


setInterval(MenuAnimation,1)
var FirstAnimationStart = true;
var FirstAnimationEnds = false;
var SecondAnimationEnds = false;
var CanAnimate = true;
function MenuAnimation()
{
        if(CanAnimate == true)
        {
               
          if(FirstAnimationEnds == true)
                {
                document.getElementById("MainMenuText").style.animation = "FadeIn 2s";
                document.getElementById("MainMenuText").style.animationDelay = "0.2s";
                setInterval(MenuAnimation1,500)
                }
         if(SecondAnimationEnds == true)
                {
                document.getElementById("MenuText").style.animation = "FadeIn 2s";
                document.getElementById("MenuText").style.animationDelay = "0.2s";
                setInterval(MenuAnimation3,500)
               
                AnimationEnds = true;
                }
        }
              

}
function MenuAnimation1()
{
        document.getElementById("MainMenuText").style.opacity = "100%";
        SecondAnimationEnds = true;
        
}

function MenuAnimation3()
{
        document.getElementById("MenuText").style.opacity = "100%";
        CanAnimate = false;
}
function MenuFixedAnimationHidden()
{
        var w = window.innerWidth;
        if(w >= 745)
        {
                document.getElementById("MenuContainer").style.animation = "MenuAnimHidden 0.8s"
                document.getElementById("MenuContainer").style.top = "-120px" 
                document.getElementById("MenuContainer").style.backgroundColor = "white"
        }
}

function MenuFixedAnimationShow()
{
        document.getElementById("MenuContainer").style.animation = "MenuAnimShow 0.8s"
        document.getElementById("MenuContainer").style.top = "0%"   
        document.getElementById("MenuContainer").style.backgroundColor = "white"
        document.getElementById("MenuContainer").style.height = "110px";
}
function BottomMenuFixedAnimationHidden()
{
        document.getElementById("FooterFixed").style.animation = "BottomMenuAnimHidden 0.8s"
        document.getElementById("FooterFixed").style.bottom = "-40px" 
}
function BottomMenuFixedAnimationShow()
{
        document.getElementById("FooterFixed").style.animation = "BottomMenuAnimShow 0.8s"
        document.getElementById("FooterFixed").style.bottom = "0%" 
}
function backgroundNone()
{
        document.getElementById("MenuContainer").style.backgroundColor = ""     
}

function leftClickSlide()
{      
        clearInterval(time);
        time = setInterval(AutoSlide,8000)
        ClickCount ++;
      //  document.getElementById("RightButton").disabled = true;
       // document.getElementById("LeftButton").disabled = true;

}
function rightClickSlide()  
{
        clearInterval(time);
        time = setInterval(AutoSlide,8000)


}
setInterval(MenuFix,0)
function MenuFix()
{
        var w = window.innerWidth;
        var LeftMenu = document.getElementById("MenuListLeft");
        var RightMenu = document.getElementById("MenuListRight");
        if(w <= 725)
        {
                LeftMenu.style.opacity = "0%";
                RightMenu.style.opacity = "0%";
        }
}
var lastScrollTop = 0;
window.addEventListener("scroll", function()
{
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop)
   {
    //downscroll code
    var firstSectionDistance =  document.getElementById("firstMenuSection").getBoundingClientRect().top;
    var secondSectionDistance = document.getElementById("SecondSection").getBoundingClientRect().top;

   
    var w = window.innerWidth;
    if(w >= 726)
    {
            
        MenuFixedAnimationHidden();
    }
    BottomMenuFixedAnimationShow();

    var LeftMenu = document.getElementById("MenuListLeft");
    var RightMenu = document.getElementById("MenuListRight");
    if(w <= 725)
    {

            LeftMenu.style.opacity = "0%";
            RightMenu.style.opacity = "0%";
            
            if(MenuOn == false)
            {
                document.getElementById("MenuContainer").style.height = "60px";
            }
           
           
    }
   } 
   else 
   {
           //upscroll code
         
                var LeftMenu = document.getElementById("MenuListLeft");
                var RightMenu = document.getElementById("MenuListRight");
                var w = window.innerWidth;
                if(w >= 726)
                {
                        document.getElementsByClassName("MenuLinkList")[0].style.display ="inline-block";
                        document.getElementsByClassName("MenuLinkList")[1].style.display ="inline-block";
                        document.getElementsByClassName("MenuLinkList")[2].style.display ="inline-block";
                        document.getElementsByClassName("MenuLinkList")[3].style.display ="inline-block";
                        LeftMenu.style.opacity = "100%";
                        RightMenu.style.opacity = "100%";
                        MenuFixedAnimationShow();
                        document.getElementById("CellPhoneMenuList").style.opacity = "0%"
                        document.getElementById("CellPhoneMenuList").style.zIndex = "0"
                        document.getElementById("MenuContainer2").style.zIndex = "0"
                }
                BottomMenuFixedAnimationHidden();
        

   }
  
   lastScrollTop = st <= 0 ? 0 : st;
}, false);
var MenuOn = false;
function MenuCellPhoneShow()
{
        if(MenuOn ==false)
        {
                document.getElementById("MenuContainer2").style.zIndex = "0"
                var CellPhoneMenu = document.getElementById("CellPhoneMenuList");
                document.getElementsByClassName("LineMenuButton")[0].style.backgroundColor = "red"
                document.getElementsByClassName("LineMenuButton")[1].style.backgroundColor = "red"
                document.getElementsByClassName("LineMenuButton")[2].style.backgroundColor = "red"
                CellPhoneMenu.style.animation = "MenuCellPhoneAnimationShow 1s"
                CellPhoneMenu.style.opacity = "100%";
                CellPhoneMenu.style.zIndex = "4";
                document.getElementById("MenuContainer").style.animation = " MenuIncrease 0.7s"
                document.getElementById("MenuContainer").style.height = "100%"
                CellPhoneMenu.addEventListener("animationend", function()
                {
                       MenuOn = true;
                })
        }
        if(MenuOn ==true)
        {
                var CellPhoneMenu = document.getElementById("CellPhoneMenuList");
                document.getElementsByClassName("LineMenuButton")[0].style.backgroundColor = "#e01119"
                document.getElementsByClassName("LineMenuButton")[1].style.backgroundColor = "#e01119"
                document.getElementsByClassName("LineMenuButton")[2].style.backgroundColor = "#e01119"
                CellPhoneMenu.style.animation = "MenuCellPhoneAnimationHidden 0.7s"
                CellPhoneMenu.style.opacity = "0%";
                document.getElementById("MenuContainer").style.animation = " MenuDecrease 0.7s"
                document.getElementById("MenuContainer").style.height = "60px"
                CellPhoneMenu.addEventListener("animationend", function()
                {
                       MenuOn = false;
                        document.getElementById("MenuContainer2").style.zIndex = "5"
                })
        }

}

