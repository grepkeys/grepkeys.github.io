window.onload=function(){var navbar=document.querySelector('nav');var navpageinfo=document.querySelector('.navpageinfo');var navlinks=document.querySelector('.navlinks');var topSection=document.querySelector('.topsection');var topSectionStyles;var topSectionHeight;function gettopSectionHeight(){topSectionStyles=window.getComputedStyle(topSection);topSectionHeight=topSection.offsetHeight+
parseFloat(topSectionStyles['marginTop'])-
navbar.offsetHeight;}
gettopSectionHeight();window.onresize=function(){gettopSectionHeight();}
function switchNavbar(){if(window.scrollY>topSectionHeight){navlinks.style.visibility='hidden';navlinks.style.opacity=0;navpageinfo.style.visibility='visible';navpageinfo.style.opacity=1;}else{navlinks.style.visibility='visible';navlinks.style.opacity=1;navpageinfo.style.visibility='hidden';navpageinfo.style.opacity=0;}}
var prevScrollPos=window.pageYOffset;var navbar=document.querySelector('nav');var origShadow=navbar.style.boxShadow;function showNavbar(){navbar.style.top=0;navbar.style.boxShadow=origShadow;}
function hideNavbar(){navbar.style.top='-'+navbar.offsetHeight+'px';navbar.style.boxShadow='none';}
function autohideNavbar(){var currentScrollPos=window.pageYOffset;var scrollPosDiff=currentScrollPos-prevScrollPos;if(currentScrollPos<300){showNavbar();return;}
if(scrollPosDiff>1){hideNavbar();}else if(scrollPosDiff<-5){showNavbar();}
prevScrollPos=currentScrollPos;}
window.onscroll=function(){switchNavbar();autohideNavbar();}}