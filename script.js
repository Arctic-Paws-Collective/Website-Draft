
const toggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.site-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());


document.querySelectorAll('.tracked-link').forEach(link=>{
  link.addEventListener('click',()=>{
    const sponsor=link.dataset.sponsor||'Unknown Sponsor';
    const action=link.dataset.action||'click';
    const key='arcticPawsSponsorClicks';
    const events=JSON.parse(localStorage.getItem(key)||'[]');
    events.push({sponsor,action,time:new Date().toISOString(),page:location.pathname});
    localStorage.setItem(key,JSON.stringify(events.slice(-200)));
    console.log('Sponsor interaction recorded:',sponsor,action);
  });
});
