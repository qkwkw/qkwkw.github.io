(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;a=240,p=function(a){return setTimeout(a,1e3/60)},u=function(){var a;a=document.createElement("style"),a.textContent="html,body {\n	margin : 0;\n	padding : 0;\n	background-color : black;\n	color : white;\n	overflow : hidden;\n	width : 100%;\n	height: 100%;\n}\nsection {\n	display : none;\n	position : fixed;\n	top : 0%;\n	left : 0%;\n	width : 100%;\n	height : 100%;\n	background-repeat : no-repeat;\n	background-position : center center;\n	background-size : cover;\n	text-align : center;\n}\n.lpBlock {\n	position : fixed;\n	dipslay : block;\n	width : 100%;\n	left : 0%;\n	top : 0%;\n	text-align : center;\n	margin : 0;\n	padding : 0;\n}\n.nowloading {\n	display : block;\n	position : fixed;\n	top : 0%;\n	left : 0%;\n	width : 100%;\n	height : 100%;\n	background-color: black;\n}\n.nowloading>.progress {\n	position : absolute;\n	bottom : 2%;\n	right : 2%;\n	width :100%;\n	text-align : right;\n}\n.nowloading>.progress>.logo {\n	display : inline-block;\n	width : 16px;\n	height : 16px;\n}",document.querySelector("head").appendChild(a)},w=function(){var a;a=document.createElement("div"),a.setAttribute("class","nowloading"),a.innerHTML="<div class='progress'>Now Loading (<span class='percent'>0</span>%)</div>",document.querySelector("body").appendChild(a)},o=function(){var a,b,c,e,g,h,i,j,k,l,m,n,o,p,q,r,s;for(i=document.querySelectorAll("img"),k=document.querySelector(".nowloading"),l=k.querySelector(".percent"),h=[],a=document.getElementsByTagName("*"),n=0,q=i.length;q>n;n++)g=i[n],h.push(g.getAttribute("src"));for(o=0,r=a.length;r>o;o++)e=a[o],d(e),b=e.getAttribute("lp-bg"),b&&h.push(b);for(c=0,p=0,s=h.length;s>p;p++)m=h[p],j=document.createElement("img"),j.onload=function(){return c++,l.textContent=parseInt(100*c/h.length),h.length<=c?(f(k),v()):void 0},j.onerror=function(){return alert("Can't load resource -> "+m)},j.src=m},f=function(a){var b,c,d,e;b=0,c=120,e=function(){return b++,b>c?(clearInterval(d),a.style.opacity=0,a.style.display="none"):a.style.opacity=(c-b)/c},d=setInterval(e,1e3/60)},d=function(a){var b,c,d,e,f,g;c=a.getAttribute("class"),c||(c=""),b=a.getAttribute("lp-bg"),b&&(a.style.backgroundImage="url("+b+")"),f=a.getAttribute("lp-x"),f&&(a.setAttribute("class",c+" lpBlock"),a.style.left=f+"%"),g=a.getAttribute("lp-y"),g&&(a.setAttribute("class",c+" lpBlock"),a.style.top=g+"%"),a.getAttribute("lp-speed")&&a.setAttribute("lp-text",a.textContent),e=a.getAttribute("lp-touch"),e&&("next"===e?a.addEventListener("click",j):"back"===e?a.addEventListener("click",i):(d=e.split(":"),"goto"===d[0]&&a.addEventListener("click",k)))},g=0,r=0,x=[],n=function(){var d,e,f,h,i,j;for(g++,r++,i=0,j=x.length;j>i;i++)f=x[i],d=(r-a)*parseInt(f.getAttribute("lp-speed"))*.005,f.textContent=f.getAttribute("lp-text").substring(0,d);a/2>r?(h=a/2,c.style.transform="scale("+(2+Math.cos(Math.PI/(1+r/h)))+")",c.style.opacity=(h-r)/(1*h)):a>=r&&(c&&(c.style.display="none"),h=a/2,e=r-h,b.style.display="block",b.style.transform="scale("+Math.sin(Math.PI/(1+e/h))+")",b.style.opacity=1-(h-e)/(1*h)),p(n)},s=[],q=0,m=0,b=null,c=null,h=function(a){var b,c,d,e,f,g;for(d=[],c=a.getElementsByTagName("*"),f=0,g=c.length;g>f;f++)b=c[f],e=b.getAttribute("lp-speed"),e&&d.push(b);return d},y=function(){var a;c&&(a=c.querySelector("video"),a&&a.pause()),b&&(a=b.querySelector("video"),a&&a.play())},v=function(){r=a/2,q=0,s=document.querySelectorAll("section"),m=s.length,b=s[q],x=h(b),b.style.display="block",n(),y()},j=function(){r=0,c=s[q],q++,q>=m&&(q=0),b=s[q],x=h(b),y()},i=function(){r=0,c=s[q],q--,0>q&&(q=m-1),b=s[q],x=h(b),y()},k=function(){var a;r=0,a=this.getAttribute("lp-touch").split(":"),c=b,b=document.querySelector("#"+a[1]),x=h(b),y()},t=function(a,b,c){var d,e,f;for(e=0,f=a.length;f>e;e++)d=a[e],d.style[b]=c},l=function(){u()},e=function(){w(),o()},l(),document.addEventListener("DOMContentLoaded",e)}).call(this);