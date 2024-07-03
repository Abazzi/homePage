(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const F=[{name:"github",group:"0",mode:"work",url:"https://github.com"},{name:"the odin project",group:"0",mode:"work",url:"https://theodinproject.com"},{name:"exercism",group:"0",mode:"work",url:"https://exercism.org"},{name:"code wars",group:"0",mode:"work",url:"https://codewars.com"},{name:"30secondsOfCode",group:"0",mode:"work",url:"https://www.30secondsofcode.org"},{name:"leet code",group:"0",mode:"work",url:"https://www.leetcode.com"},{name:"regex101",group:"1",mode:"work",url:"https://regex101.com"},{name:"figma",group:"1",mode:"work",url:"https://figma.com"},{name:"jsonlint",group:"1",mode:"work",url:"https://jsonlint.com/"},{name:"coolors",group:"1",mode:"work",url:"https://coolors.co/"},{name:"fffuel",group:"1",mode:"work",url:"https://fffuel.co/"},{name:"mankier",group:"2",mode:"work",url:"https://www.mankier.com/"},{name:"devdocs",group:"2",mode:"work",url:"https://devdocs.io/"},{name:"mdn",group:"2",mode:"work",url:"https://developer.mozilla.org/en-US/"},{name:"wumbo",group:"2",mode:"work",url:"https://wumbo.net"},{name:"rosetta code",group:"2",mode:"work",url:"https://rosettacode.org/wiki/Rosetta_Code"},{name:"mobbin",group:"3",mode:"work",url:"https://mobbin.com"},{name:"v0",group:"3",mode:"work",url:"https://v0.dev"},{name:"httpster",group:"3",mode:"work",url:"https://httpster.net"},{name:"dribble",group:"3",mode:"work",url:"https://dribble.com"}],U=[{name:"reddit",group:"0",mode:"bonfire",url:"https://reddit.com"},{name:"youtube",group:"0",mode:"bonfire",url:"https://youtube.com"},{name:"proton mail",group:"0",mode:"bonfire",url:"https://mail.proton.me"},{name:"gmail",group:"0",mode:"bonfire",url:"https://mail.google.com"},{name:"vaultwarden",group:"0",mode:"bonfire",url:"https://vaultwarden.adambazzi.ca"},{name:"letterboxd",group:"1",mode:"bonfire",url:"https://letterboxd.com"},{name:"patreon",group:"1",mode:"bonfire",url:"https://patreon.com"},{name:"bubbles form",group:"1",mode:"bonfire",url:"https://bubbleszine.proboards.com"},{name:"discord",group:"1",mode:"bonfire",url:"https://discord.com/app"},{name:"netflix",group:"2",mode:"bonfire",url:"https://netflix.com"},{name:"kavita",group:"2",mode:"bonfire",url:"https://kavita.adambazzi.ca"},{name:"navidrome",group:"2",mode:"bonfire",url:"https://navidrome.adambazzi.ca"},{name:"jellyfin",group:"2",mode:"bonfire",url:"https://jellyfin.adambazzi.ca"},{name:"photo prism",group:"2",mode:"bonfire",url:"https://photoprism.adambazzi.ca"},{name:"lidarr",group:"3",mode:"bonfire",url:"https://lidarr.adambazzi.ca"},{name:"radarr",group:"3",mode:"bonfire",url:"https://radarr.adambazzi.ca"},{name:"sonarr",group:"3",mode:"bonfire",url:"https://sonarr.adambazzi.ca"},{name:"qbittorrent",group:"3",mode:"bonfire",url:"https://qbit.adambazzi.ca"}],k={work:F,bonfire:U},w="/homePage/assets/apple-touch-icon-Cq6Kw_Cx.png",R="/homePage/assets/favicon-32x32-BLmHgUDQ.png",Y="/homePage/assets/favicon-16x16-cXqG2J89.png",f="/homePage/assets/apple-touch-icon-Hf_-f2jH.png",V="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACKFBMVEUAAADgT1/fTl/gT17gT2DgTl7fT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/fT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gTl7gTV7gT2DjYWvlbXLkZG3gUGDgTF3hU2Lnem71zZD55Kn315jtm33gTl/la3Hqi4Xsl4z0xKf435r1xjH1win1wyr65ZD327ftnpDlbHLiW2jof3j0wnL55I355Ir65oz89b7766P65ZH66Z354YX65Yv65Y72zHjtmojjYm3kYlr0wHf77bL31WD1wir42Wz89sP8+Mf898X42W/1wiv1wyz31F377KXzvWvjYFjgTWDma1H5yCX710j75ob77qn78rf65ZL30ln412j77Kb53nv2zk30vx/ysw7kZ03gTmDma1L5xR/6yxj6zCD76I376p330Vb2y0X30Vf544v41mb1wy7zuA7ztQTztgXysQzkZk36yxv6yhn6zB/710n43Xj2yT/0uxXztQXztgf6yxn5yBvzuArztgb5xxjztwn5xh/ysgvkY1b1tSn6zBv6zBrztwbzuAbztAnvoBzjX1PjYFftjD/2uSbxqxLskSnmcUTiWFj5yBj0uAjysA3umyDoezzgUF7tjT/1tCTwpRrqhjLkZ0zhU1zjXFjiWVj///+sjdyVAAAAKnRSTlMAAAAAAAAABCltrdrz/SoDN5ff++CYGonqNcL+Qdk22MECigI46d5s8qyS5EmlAAAAAWJLR0S33QA7ZwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+gBExImBwsXgxcAAAHhSURBVDjLY2CAAkZ2Dk4ubh5eXh5uLk4+dkYGVMDILyAoJKwFBcIiogL8yEqYGMXEJbRQgIS4GCMzXDujpJS0FhqQlpJkZITJy8hqYQGyMhAVjIxyWOW1tOTlwCoYxRS0cAAFMaACRkVxLZxASZmRgVFFFVlIW0cbiaeqwsjAL4gsr6unb2CIpESQn4FPCMbRMTIyNjE1M7fQ09GBianxMXBCw89Sx8raxtbO3sHRydnFVRtqirA6AxdUrZu7h6eXt4+vn39AYFBwSChUmIsBEgaWYeERkVFR0TGxcTHxCYlJySmplpDQYtAA02npGZlZ2Tm5efl5BTHJhUXFJaVlYAkNBl6IgvKKyqrM6prauvqGxqbmlta2dogCXoSCjo7Oru6snt6+/v4JEyYgFGggFHR0TJw0uWXKhAlICjSgjoQq6Jg6bcIEFAWyUG+mpU9HUTBlBtSRmtCAKps5a/YcuIK58+YvWFgGDShYUC9avASoBKRg7oSly5avgAc1LLLKykBKVq6au3rN2oXr0izhkYWIbqCS9Rs2btq8pawMObqRE0xZ2dZtCFkgEFdkREtylpYYSQ6U6OVxJlpmYpI97ozDAs99rNizHhvuzCuElnmh2V+dS1aDl1eDm0udA5H9Afg60UifCLiPAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI0LTAxLTE5VDE4OjM4OjA3KzAwOjAwVZyaVwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNC0wMS0xOVQxODozODowNyswMDowMCTBIusAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII=",Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABGlBMVEUAAADgT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gT1/gTl/gTl7gTV7gTF3iWWXkZW3gUWDgUGDlam3phX7ytnf1yWvwq4XmcXPgUWHiV17unHb1y2/43Hv77qf66pv54Hz2z23uoHLhV13gTmDkZFX4yDb73Fz65Ib42Gn53nv42m/1xjLztR/jYVLkZFT4wSD6zBr60TH4zkH0vh7ztwrztgTxrQ7jYFH4wyD6yxr2vw7ztQXztgfzuAbyrw7jYVHiV1vvljn4wSH6zRr2wRDztwXztAnwpRfqhDPhVlrgUF7laVLwmjfzrh7skibmcUPiWVfgTWDgUV7iWlj///9oIXOhAAAAEnRSTlMAAAdJqOT7GJLvsQbtp+Ow7khuqWMuAAAAAWJLR0Rdnd8wAQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+gBExImBwsXgxcAAADPSURBVBjTY2BgYGRiZmFlY2NlYWZiZAByGdk5OIXAgJODnZGRgZGdSwgOuNgZGbg5wExhETDFwc3AzAOkRcXEJSRFgQweZgZeoKyUtIysnLyCIlCEl4FPSFhJWUVVTV1DU0tbWIiPgU1IR1dP38DQyNjE1ExHiA0kYG5haWVtY2tn7wAS4AMKOFo6Obu4url76AC18AoJe3p5+/j6+QcEBoEMBVkbHBIaFh4RCbEW7LCo6JjoKB2IwxjZ+cEuBTuUH+h0kOcEkD0H8r4gkvcBeFsaEE25jdMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjQtMDEtMTlUMTg6Mzg6MDcrMDA6MDBVnJpXAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI0LTAxLTE5VDE4OjM4OjA3KzAwOjAwJMEi6wAAAFd6VFh0UmF3IHByb2ZpbGUgdHlwZSBpcHRjAAB4nOPyDAhxVigoyk/LzEnlUgADIwsuYwsTIxNLkxQDEyBEgDTDZAMjs1Qgy9jUyMTMxBzEB8uASKBKLgDqFxF08kI1lQAAAABJRU5ErkJggg==",C="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDkwIDkwIiB3aWR0aD0iOTAiIGhlaWdodD0iOTAiPgoJPHRpdGxlPm9mZi1zd2l0Y2gtc3ZnPC90aXRsZT4KCTxzdHlsZT4KCQl0c3BhbiB7IHdoaXRlLXNwYWNlOnByZSB9IAoJCS5zMCB7IGZpbGw6ICMwMDAwMDAgfSAKCQkudDEgeyBmb250LXNpemU6IDVweDtmaWxsOiAjMDAwMDAwO2ZvbnQtZmFtaWx5OiAiJyBIZWx2ZXRpY2EgIE5ldWUnIiB9IAoJPC9zdHlsZT4KCTxwYXRoIGlkPSJMYXllciIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGFzcz0iczAiIGQ9Im0wIDgyLjV2LTc1YzAtNC4xIDMuNC03LjUgNy41LTcuNWg3NWM0LjEgMCA3LjUgMy40IDcuNSA3LjV2NzVjMCA0LjEtMy40IDcuNS03LjUgNy41aC03NWMtNC4xIDAtNy41LTMuNC03LjUtNy41em01IDBjMCAxLjQgMS4xIDIuNSAyLjUgMi41aDc1YzEuNCAwIDIuNS0xLjEgMi41LTIuNXYtNzVjMC0xLjQtMS4xLTIuNS0yLjUtMi41aC03NWMtMS40IDAtMi41IDEuMS0yLjUgMi41eiIvPgoJPHBhdGggaWQ9IkxheWVyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsYXNzPSJzMCIgZD0ibTMzLjggNzAuNWMtMC4xLTAuMi0wLjEtMC4zLTAuMS0wLjV2LTUwYzAtMC43IDAuNi0xLjMgMS4zLTEuM2gxOS45YzAuNyAwIDEuMyAwLjYgMS4zIDEuM3YyNC44bDcuNCAxNy4zYzAuMSAwLjEgMC4xIDAuMyAwLjEgMC40IDAgMC4xIDAgMC4xIDAgMC4xIDAgMC4xLTAuMSAwLjItMC4xIDAuM3YwLjFjMCAwLjItMC4xIDAuMy0wLjIgMC40bC03LjUgNy41Yy0wLjMgMC4zLTAuNiAwLjQtMC45IDAuNGgtMjBjLTAuMiAwLTAuMyAwLTAuNS0wLjEtMC4zLTAuMi0wLjUtMC40LTAuNy0wLjd6bTI1LjctNi43aC0xNi41bC01IDVoMTYuNXptLTE4LjUtMS42bC00LjctMTEuMXYxNS45em0xMy4yLTE1LjloLTE3LjNsNi40IDE1aDE3LjN6bS0xNy45LTI1djIyLjVoMTcuNXYtMjIuNXoiLz4KCTx0ZXh0IGlkPSJDcmVhdGVkIGJ5IEFydGh1ciBTaGxhaW4iIHN0eWxlPSJ0cmFuc2Zvcm06IG1hdHJpeCgxLDAsMCwxLC01LDExMCkiID4KCQk8dHNwYW4geD0iMCIgeT0iMCIgY2xhc3M9InQxIj5DcmVhdGVkIGJ5IEFydGh1ciBTaGxhaW4KPC90c3Bhbj4KCTwvdGV4dD4KCTx0ZXh0IGlkPSJmcm9tIHRoZSBOb3VuIFByb2plY3QiIHN0eWxlPSJ0cmFuc2Zvcm06IG1hdHJpeCgxLDAsMCwxLC01LDExNSkiID4KCQk8dHNwYW4geD0iMCIgeT0iMCIgY2xhc3M9InQxIj5mcm9tIHRoZSBOb3VuIFByb2plY3QKPC90c3Bhbj4KCTwvdGV4dD4KPC9zdmc+",I="data:image/svg+xml,%3csvg%20version='1.2'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2090%2090'%20width='90'%20height='90'%3e%3ctitle%3eon-switch-svg%3c/title%3e%3cstyle%3e%20tspan%20{%20white-space:pre%20}%20.s0%20{%20fill:%20%23000000%20}%20%3c/style%3e%3cpath%20id='Layer'%20fill-rule='evenodd'%20class='s0'%20d='m90%207.5v75c0%204.1-3.4%207.5-7.5%207.5h-75c-4.1%200-7.5-3.4-7.5-7.5v-75c0-4.1%203.4-7.5%207.5-7.5h75c4.1%200%207.5%203.4%207.5%207.5zm-5%200c0-1.4-1.1-2.5-2.5-2.5h-75c-1.4%200-2.5%201.1-2.5%202.5v75c0%201.4%201.1%202.5%202.5%202.5h75c1.4%200%202.5-1.1%202.5-2.5z'/%3e%3cpath%20id='Layer'%20fill-rule='evenodd'%20class='s0'%20d='m63.7%2027.5c0%200%200%200%200%200.1%200%200.1%200%200.3-0.1%200.4l-7.3%2017.3v24.7c0%200.7-0.6%201.3-1.3%201.3h-20c-0.7%200-1.3-0.6-1.3-1.3v-50c0-0.2%200-0.3%200.1-0.5%200.2-0.3%200.4-0.6%200.7-0.7%200.2-0.1%200.3-0.1%200.5-0.1h20c0.3%200%200.7%200.2%200.9%200.4l7.5%207.5c0.1%200.1%200.1%200.3%200.2%200.4v0.1c0.1%200.1%200.1%200.2%200.1%200.3%200%200.1%200%200.1%200%200.1zm0-0.1q0.1%200.1%200%200.1%200-0.1%200-0.1zm-3.1%201.4h-17.3l-6.4%2015h17.3zm-24.4-5.8v15.9l4.8-11.1zm18.3-1.7h-16.5l5%205h16.5zm-0.7%2047.5v-22.5h-17.5v22.5z'/%3e%3c/svg%3e",G="/homePage/assets/aaugh-CVWFNaSu.svg";function M(t){const e=document.createElement("li"),o=document.createElement("a");return t.mode=="work"?(e.setAttribute("data-list-item","work"),o.setAttribute("data-list-item","work")):(e.setAttribute("data-list-item","bonfire"),o.setAttribute("data-list-item","bonfire")),o.setAttribute("href",t.url),o.setAttribute("target","_blank"),o.innerText=t.name,e.appendChild(o),e}function u(t,e){const o=document.createElement("li");return o.setAttribute("data-list-title",e),o.classList.add("title"),o.textContent=t,o}function v(t){var c;const e=document.createElement("div"),o=document.createElement("ul"),i=document.createElement("ul"),n=document.createElement("ul"),r=document.createElement("ul");return o.appendChild(u("daily","bonfire")),o.setAttribute("data-list","bonfire"),i.appendChild(u("social","bonfire")),i.setAttribute("data-list","bonfire"),n.appendChild(u("media","bonfire")),n.setAttribute("data-list","bonfire"),r.appendChild(u("server","bonfire")),r.setAttribute("data-list","bonfire"),e.classList.add("links-container"),e.setAttribute("data-mode","bonfire"),W(),(c=t.bonfire)==null||c.forEach(s=>{const a=M(s);switch(s.group){case"0":o.appendChild(a);break;case"1":i.appendChild(a);break;case"2":n.appendChild(a);break;case"3":r.appendChild(a);break}e.appendChild(o),e.appendChild(i),e.appendChild(n),e.appendChild(r)}),e}function x(t){var c;const e=document.createElement("div"),o=document.createElement("ul"),i=document.createElement("ul"),n=document.createElement("ul"),r=document.createElement("ul");return o.appendChild(u("daily","work")),o.setAttribute("data-list","work"),i.appendChild(u("tools","work")),i.setAttribute("data-list","work"),n.appendChild(u("docs","work")),n.setAttribute("data-list","work"),r.appendChild(u("inspo","work")),r.setAttribute("data-list","work"),e.classList.add("links-container"),e.setAttribute("data-mode","work"),H(),(c=t.work)==null||c.forEach(s=>{const a=M(s);switch(s.group){case"0":o.appendChild(a);break;case"1":i.appendChild(a);break;case"2":n.appendChild(a);break;case"3":r.appendChild(a);break}e.appendChild(o),e.appendChild(i),e.appendChild(n),e.appendChild(r)}),e}function W(){const t=document.getElementById("appleTouch"),e=document.getElementById("icon32"),o=document.getElementById("icon16"),i=document.getElementById("manifest"),n=document.getElementById("maskIcon");t.href=w,e.href=R,o.href=Y,i.href=w,n.href=w}function H(){const t=document.getElementById("appleTouch"),e=document.getElementById("icon32"),o=document.getElementById("icon16"),i=document.getElementById("manifest"),n=document.getElementById("maskIcon");t.href=f,e.href=V,o.href=Z,i.href=f,n.href=f}function X(){const t=document.createElement("img");return t.alt="comics-dialog-launcher",t.id="comics-dialog-launcher",t.dataset.mode="bonfire",t.src=G,t}function J(t,e){const o=document.createElement("button");return o.textContent=t,o.classList.add("comic-series-button"),o.dataset.rssUrl=e,o.dataset.button="bonfire",o.addEventListener("click",async()=>{const i=document.getElementById("comic-left-nav-button"),n=document.getElementById("comic-right-nav-button");i&&i.remove(),n&&n.remove();let r=await D(e);r=r.reverse();let c=49;const s=document.getElementById("comic-title-div")||null,a=O(),d=q(),l=document.getElementById("comic-strips-div")||null;s.insertBefore(a,s.firstChild),y(l),l.appendChild(b(r[c].seriesName,r[c].stripURL)),s.appendChild(d),a.addEventListener("click",()=>{y(l),c<1&&(c=r.length),c--,l.appendChild(b(r[c].seriesName,r[c].stripURL)),console.log(c)}),d.addEventListener("click",()=>{y(l),c=(c+1)%r.length,l.appendChild(b(r[c].seriesName,r[c].stripURL)),console.log(c)})}),o}function q(){const t=document.createElement("button"),e=document.createTextNode("→");return t.textContent=e.textContent,t.classList.add("comic-nav-button"),t.dataset.mode="bonfire",t.setAttribute("id","comic-right-nav-button"),t}function O(){const t=document.createElement("button"),e=document.createTextNode("←");return t.textContent=e.textContent,t.classList.add("comic-nav-button"),t.dataset.mode="bonfire",t.setAttribute("id","comic-left-nav-button"),t}function b(t,e){const o=document.createElement("div"),i=document.createElement("h2"),n=document.createElement("img");return i.classList.add("comic-strip-title-date"),i.textContent=t,n.classList.add("comic-strip"),n.src=e,o.appendChild(i),o.appendChild(n),o.setAttribute("id","comic-strip"),o}function P(){const t=document.createElement("dialog");t.id="comics-dialog";const e=document.createElement("div"),o=document.createElement("h1");o.textContent="Daily Comics Strips",o.id="comic-strips-header",o.dataset.mode="bonfire",e.setAttribute("id","comic-title-div"),e.append(o);const i=document.createElement("div");i.id="comic-series-button-div",i.dataset.mode="bonfire";const n=document.createElement("div");n.id="comic-strips-div";const r=[{seriesName:"Nancy (Classic)",rssUrl:"https://www.comicsrss.com/rss/nancy-classics.rss"},{seriesName:"Nancy (Modern)",rssUrl:"https://www.comicsrss.com/rss/nancy.rss"},{seriesName:"Peanuts",rssUrl:"https://www.comicsrss.com/rss/peanuts.rss"},{seriesName:"Zippy",rssUrl:"https://www.comicsrss.com/rss/zippy-the-pinhead.rss"},{seriesName:"Calvin & Hobbs",rssUrl:"https://www.comicsrss.com/rss/calvinandhobbes.rss"}];return t.appendChild(e),t.appendChild(i),t.appendChild(n),r.forEach(c=>{i.appendChild(J(c.seriesName,c.rssUrl))}),t}function y(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function E(t){const e=document.getElementById("light-switch")||null;localStorage.getItem("mode")=="bonfire"&&(e.src=I),localStorage.getItem("mode")=="work"&&(e.src=C),e.addEventListener("click",()=>{K(t)})}async function Q(t){return`${(await(await fetch("https://api.open-meteo.com/v1/forecast?latitude=42.293&longitude=-82.9&current=temperature_2m&hourly=temperature_2m&timezone=auto&forecast_days=1")).json()).hourly.temperature_2m[t.getHours()]}`}function B(t){const e=document.querySelector("title")||null,o=document.querySelector("[data-list-title]")||null,i=document.querySelector("[data-info-bar]")||null,n=document.querySelector("[data-body]")||null,r=document.querySelector("[data-directory]")||null,c=document.getElementById("picture")||null,s=document.querySelector(".link-container")||null,a=document.querySelector(".links-container")||null,d=document.getElementById("light-switch")||null,l=document.getElementById("comics-dialog-launcher")||null,m=document.getElementById("comics-dialog")||null;m&&l&&(m.remove(),l.remove()),localStorage.setItem("mode","work"),s.removeChild(a),d.src=C,d.removeAttribute("data-mode"),d.setAttribute("data-mode","work"),c.removeAttribute("data-picture"),c.setAttribute("data-picture","work"),o.removeAttribute("data-list-title"),o.setAttribute("data-list-title","work"),i.removeAttribute("data-info-bar"),i.setAttribute("data-info-bar","work"),n.removeAttribute("data-body"),n.setAttribute("data-body","work"),r.removeAttribute("data-directory"),r.setAttribute("data-directory","work"),r.innerHTML='&gt; cd ~/work/<span class="blinking">_</span>',e.textContent="~/work",s.appendChild(x(t))}async function S(t){const e=document.querySelector("title")||null,o=document.querySelector("[data-list-title]")||null,i=document.querySelector("[data-info-bar]")||null,n=document.querySelector("[data-body]")||null,r=document.querySelector("[data-directory]")||null,c=X(),s=document.getElementById("directory-container")||null,a=document.getElementById("picture")||null,d=document.querySelector(".link-container")||null,l=document.querySelector(".links-container")||null;localStorage.setItem("mode","bonfire");const m=document.getElementById("timer")||null,g=document.getElementById("timer-dialog")||null,A=P(),j=document.querySelectorAll(".comic-series-button")||null;A.style.flex="flex",g&&g.remove(),m&&m.remove();const h=document.getElementById("light-switch");h.removeAttribute("data-mode"),h.setAttribute("data-mode","bonfire"),h.src=I,d.removeChild(l),a.removeAttribute("data-picture"),a.setAttribute("data-picture","bonfire"),o.removeAttribute("data-list-title"),o.setAttribute("data-list-title","bonfire"),i.removeAttribute("data-info-bar"),i.setAttribute("data-info-bar","bonfire"),n.removeAttribute("data-body"),n.setAttribute("data-body","bonfire"),r.removeAttribute("data-directory"),r.setAttribute("data-directory","bonfire"),s.removeChild(s.lastElementChild),s.appendChild(r),i.insertBefore(c,i.firstChild),i.appendChild(h),r.innerHTML='&gt; cd ~/bonfire/<span class="blinking">_</span>',d.appendChild(v(t)),e.textContent="~/bonfire",j.forEach(T=>{T.addEventListener("click",async()=>{const z=await D(T.dataset.rssUrl),N=document.getElementById("comic-strips-div")||null;z.forEach(L=>{N.appendChild(b(L.seriesName,L.stripURL))})})}),n.append(A),c.addEventListener("click",()=>{A.showModal()})}function K(t){localStorage.getItem("mode")=="work"?S(t):B(t)}function _(t){const e=document.querySelector(".link-container")||null;if(localStorage.getItem("mode")==null||localStorage.getItem("mode")=="bonfire"){const o=v(t);e.appendChild(o);const i=document.getElementById("light-switch");i.src=I,S(t),E(t)}else if(localStorage.getItem("mode")=="work"){const o=x(t);e.appendChild(o);const i=document.getElementById("light-switch");i.src=C,B(t),E(t)}}async function D(t){const e=new DOMParser,o=new Array,n=await(await fetch(t)).text();return new window.DOMParser().parseFromString(n,"text/xml").querySelectorAll("item").forEach(s=>{var m;const a=(m=s.querySelector("description"))==null?void 0:m.innerHTML.toString(),d=/<img[^>]*?src\s*=\s*[""']?([^'"" >]+?)[ '""][^>]*?>/g,l=a==null?void 0:a.match(d);if(l){const g=e.parseFromString(`${l}`,"text/html"),A={seriesName:g.getElementsByTagName("img")[0].alt,stripURL:g.getElementsByTagName("img")[0].src};o.push(A)}}),o}const $={bonfire:k.bonfire,work:k.work},p=new Date,tt=new Date(p.getFullYear(),p.getMonth(),p.getDate(),p.getDay()).toLocaleDateString("en-US",{year:"numeric",day:"numeric",month:"long"}),et=document.querySelector("[data-date]");et.innerText=tt;const ot=Q(p);ot.then(t=>{try{const e=document.querySelector("[data-weather]")||null;e.innerText=`${t}°C`}catch{const o=document.querySelector("[data-weather]")||null;o.innerText="Could not get weather"}});_($);
