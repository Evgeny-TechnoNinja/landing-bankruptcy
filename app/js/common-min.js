(new WOW).init(),document.addEventListener("DOMContentLoaded",()=>{let e=new Swiper("#swiperContainerSliderHero",{cssMode:!0,navigation:{nextEl:".slider-hero-button-next",prevEl:".slider-hero-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},mousewheel:!0,keyboard:{enabled:!0,onlyInViewport:!0},autoplay:{delay:8e3,disableOnInteraction:!1},on:{init:function(){document.querySelector(".slider-hero__control-panel").addEventListener("mouseenter",()=>{e.autoplay.stop()}),swiperContainerSliderHero.addEventListener("mouseenter",()=>{e.autoplay.stop()}),this.el.addEventListener("mouseleave",()=>{this.autoplay.start()})}}}),t=new Swiper("#swiperContainerSliderStep",{cssMode:!0,loop:!1,slideClass:"swiper-slide.slider-step__slide",navigation:{nextEl:".slider-step-button-next",prevEl:".slider-step-button-prev"},pagination:{el:".slider-step__pagination",clickable:!0},mousewheel:!0,keyboard:{enabled:!0,onlyInViewport:!0},on:{slideChange:function(){!function(){const e=t.activeIndex;for(let e=0;e<p.length;e++)p[e].classList.contains("js-bg-color-active")&&p[e].classList.remove("js-bg-color-active");p[e].classList.add("js-bg-color-active")}(),T("slider-step__control-panel",t,0,7)}}}),o=new Swiper("#swiperContainerSliderWork",{cssMode:!1,slidesPerView:1,spaceBetween:0,loop:!1,slideClass:"swiper-slide.slider-work__slide",navigation:{nextEl:".slider-work-button-next",prevEl:".slider-work-button-prev"},pagination:{el:".slider-work__pagination",clickable:!0},mousewheel:!1,keyboard:{enabled:!1},breakpoints:{960:{slidesPerView:3}},on:{slideChange:function(){T("slider-work__control-panel",o,0,3)}}}),n=document.querySelector(".section-hero__content-bottom"),s=()=>{document.scrollingElement.scrollTop>10&&n.classList.contains("js-arrow-down")&&(x(n,"js-arrow-down_off","js-arrow-down"),window.removeEventListener("scroll",s))};window.addEventListener("scroll",s);let i=()=>{document.documentElement.clientWidth>=640&&n.classList.contains("js-arrow-down")&&(x(n,"js-arrow-down_off","js-arrow-down"),window.removeEventListener("resize",i))};window.addEventListener("resize",i);let a=document.querySelector(".modal__box-button"),l=document.querySelector(".form-feedback__field"),r=()=>{setTimeout(function(){modalWindow.classList.remove("js-modal-open")},400),modalWindow.classList.add("js-modal-closed")};clearListeners=(()=>{window.removeEventListener("keydown",d),l.removeEventListener("focus",c)});let d=e=>{"Escape"===e.code&&(r(),clearListeners())},c=()=>{let e=!1;a.classList.add("js-button-hide"),showButtonClosed=(()=>{a.classList.remove("js-button-hide"),(e=!0)&&l.removeEventListener("blur",showButtonClosed)}),l.addEventListener("blur",showButtonClosed)};modalWindow.classList.contains("modal")&&modalWindow.classList.add("js-modal-closed"),btnOpenModal.onclick=(()=>{modalWindow.classList.contains("js-modal-closed")&&modalWindow.classList.contains("modal")&&(x(modalWindow,"js-modal-open","js-modal-closed"),l.addEventListener("focus",c),window.addEventListener("keydown",d))}),btnCloseModal.onclick=(()=>{(modalWindow.classList.contains("js-modal-open")||modalWindow.classList.contains("modal"))&&(r(),clearListeners())});let m=e=>{window.removeEventListener("scroll",u);for(let t=1;t<e.length;t++)setTimeout(()=>{e[t].classList.add("js-bg-color-animation"),setTimeout(()=>{e[t].classList.remove("js-bg-color-animation")},700)},600*t)},u=()=>{let e=document.getElementsByClassName("card-infographics");document.documentElement.clientWidth>=300&&document.documentElement.clientWidth<960?document.scrollingElement.scrollTop>4600&&m(e):document.documentElement.clientWidth>=960&&document.documentElement.clientWidth<2230?document.scrollingElement.scrollTop>3e3&&m(e):document.documentElement.clientWidth>=2230&&document.scrollingElement.scrollTop>2700&&m(e)};window.addEventListener("scroll",u);let p=document.getElementsByClassName("card-infographics");p[0].classList.add("js-bg-color-active"),T("slider-step__control-panel",t,0,8);let w=document.getElementsByClassName("slider-work__link"),f=e=>{e.target.classList.add("js-show-overlay"),setTimeout(function(){e.target.classList.remove("js-show-overlay")},300),e.target.classList.contains("js-hide-overlay")&&e.target.classList.remove("js-hide-overlay")},v=e=>{e.target.classList.contains("js-show-overlay")||e.target.classList.add("js-show-overlay"),e.target.classList.contains("js-hide-overlay")&&e.target.classList.remove("js-hide-overlay")},b=e=>{e.target.classList.contains("js-show-overlay")&&(e.target.classList.remove("js-show-overlay"),e.target.classList.add("js-hide-overlay"))};for(let e=0;e<w.length;e++)w[e].addEventListener("click",f),w[e].addEventListener("mouseover",v),w[e].addEventListener("mouseout",b);T("slider-work__control-panel",o,0,3);let h=L.map("mapCity").setView([64.540434,40.569918],16);L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGVjaG5vbmluamEiLCJhIjoiY2s4MXN2ZGVmMHN2YTNlcnV3bWs2dnVuZCJ9.7p_rNlDWIVfE8dMSjw1gKw",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,minZoom:14,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:"your.mapbox.access.token"}).addTo(h);let g=L.icon({iconUrl:"../img/map-marker.png",iconSize:[27,36],iconAnchor:[13,36]});L.marker([64.540572,40.569671],{icon:g,title:"Агентство по банкротству"}).addTo(h),h._handlers.forEach(function(e){e.disable()}),h.touchZoom.enable(),h.zoomControl.setPosition("topright");let y=L.control({position:"topright"});y.onAdd=function(e){return L.DomUtil.create("button","button-map button-map_picture button-map_outer-position")},y.addTo(h);let E=document.querySelector(".button-map.button-map_picture");E.setAttribute("title","Target"),E.addEventListener("click",function(){h.setView([64.540572,40.569671])});let j=()=>{document.documentElement.clientWidth>=960?h.dragging.enable():document.documentElement.clientWidth<960&&h.dragging.disable()};j(),window.addEventListener("resize",j);let _=document.querySelectorAll(".form-feedback"),k=document.querySelectorAll(".form-feedback__txt-inform"),S=document.querySelectorAll(".form-feedback__checkbox"),C=document.querySelectorAll(".form-feedback__field");k[4].setAttribute("data-info-hid","hid");let W=e=>{e.preventDefault();let t=e.target.dataset.formNumber;if(!S[t].checked||"FORM"!=_[t].nodeName)return!1;{let e=/\d/g,o=C[t].value.trim().match(e);if(null===o)return"hid"==k[t].dataset.infoHid?(N(k,t,C,"Были указаны некорректные данные","#ff0c0a"),!1):(M(k[t],"#ff0c0a","Некорректные данные"),!1);{let e=o.join("");if("string"!=typeof e)return"hid"==k[t].dataset.infoHid?(N(k,t,C,"Произошла ошибка. Попробуйте ещё","#ff0c0a"),!1):(M(k[t],"#ff0c0a","Ошибка. Попробуйте ещё"),!1);{let o=function(e){let t=new Date,o={date:`${t.getDate()}.${parseInt(t.getMonth()+1,10)}.${t.getFullYear()}`,time:`${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`,phoneNumber:e};return JSON.stringify(o)}(e),n=new XMLHttpRequest;n.open("POST","/backend/write-db.php"),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.onreadystatechange=function(){return 4===n.readyState&&200===n.status?("hid"==k[t].dataset.infoHid?(N(k,t,C,"Идет регистрация вашего номера","#f9a510"),q(5e3,k[t],"Мы перезвоним в течение 5 минут")):(M(k[t],"#f9a510","Регистрация номера"),C[t].value="",q(5e3,k[t],"Мы перезвоним в течение 5 минут")),!0):"hid"==k[t].dataset.infoHid?(N(k,t,C,"Неудача. Пробуйте пожалуйста ещё","#ff0c0a"),!1):(M(k[t],"#ff0c0a","Попробуйте ещё раз"),!1)},n.send(o)}}}};for(let e=0;e<_.length;e++)_[e].addEventListener("submit",W),_[e].setAttribute("data-form-number",e);function x(e,t,o){e.classList.add(t),e.classList.remove(o)}function T(e,t,o,n){let s=document.getElementsByClassName(e)[0].children,i=s[0],a=s[1];const l=t.activeIndex;l==o?a.classList.add("js-arrow-disabled"):l>o&&l<n?a.classList.remove("js-arrow-disabled"):l==n&&i.classList.add("js-arrow-disabled"),l<n&&i.classList.remove("js-arrow-disabled")}function M(e,t,o){e.style.color=t,e.innerText=o}function N(e,t,o,n,s){e[t].style.visibility="visible",M(k[t],s,n),o[t].value=""}function q(e,t,o){setTimeout(function(){M(t,"",o)},e)}function V(e,t){$(e).on("click",function(){let e=$(this).attr("href");return $("html, body").animate({scrollTop:$(e).offset().top},{duration:t,easing:"linear"}),!1})}V("a.js-smooth-scroll",700),V("a.js-smooth-scroll-slow",4e3)});