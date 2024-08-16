(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();function n(e){return`
      <div class="carousel-card">
        <img src="/assets/img/casa2.jpg" alt="Imagem do Imóvel" class="carousel-card-img">
        <div class="card-info">
          <h3>${e.name}</h3>
          <p>Preço: ${c(e.price)}</p>
          <p>Quartos: ${e.bedrooms}</p>
          <p>Endereço: ${e.address}</p>
        </div>
      </div>
    `}function c(e){return e.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}const l=[{image:"./img/casa2.jpg",name:"Imóvel 1",price:6e5,bedrooms:4,address:"Rua A, 456"},{image:"./img/casa2.jpg",name:"Imóvel 2",price:35e4,bedrooms:2,address:"Rua B, 789"},{image:"./img/casa2.jpg",name:"Imóvel 3",price:6e5,bedrooms:4,address:"Rua C, 456"},{image:"./img/casa2.jpg",name:"Imóvel 4",price:35e4,bedrooms:2,address:"Rua D, 789"},{image:"./img/casa2.jpg",name:"Imóvel 6",price:6e5,bedrooms:4,address:"Rua E, 456"},{image:"./img/casa2.jpg",name:"Imóvel 7",price:35e4,bedrooms:2,address:"Rua F, 789"}];function d(e){return e.map(n).join("")}function m(e){document.querySelectorAll(".carousel-card").forEach(o=>{const a=o.querySelector(".card-info").innerText,r=parseInt(a.match(/Quartos: (\d+)/)[1],10);e==="all"||isNaN(e)||r===e?o.style.display="block":o.style.display="none"})}document.getElementById("carousel-container").innerHTML=d(l);document.getElementById("filter-button").addEventListener("click",()=>{const e=document.getElementById("bedrooms-filter").value;m(e==="all"?"all":parseInt(e,10))});
