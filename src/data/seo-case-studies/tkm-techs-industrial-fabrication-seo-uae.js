
(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches, root=document.documentElement;
  function $(s){return document.querySelector(s)}
  function $$(s,c){return [].slice.call((c||document).querySelectorAll(s))}
  var secs=$$('.blk'),list=$('#tocList');
  list.insertAdjacentHTML('beforeend',secs.map(function(s,i){return '<li><a href="#'+s.id+'"><small>'+('0'+(i+1)).slice(-2)+'</small>'+s.dataset.t+'</a></li>'}).join(''));
  var tl=$$('#tocList a'),tf=$('#tocFill');
  var toast=$('#toast');
  $('#copy').onclick=function(){try{navigator.clipboard.writeText(location.href)}catch(e){}toast.classList.add('on');setTimeout(function(){toast.classList.remove('on')},1800)};
  $$('.share a').forEach(function(a){a.href+=encodeURIComponent(location.href);a.target='_blank';a.rel='noopener'});
  var prog=$('#progress'),tlEl=$('#tl'),tlFill=$('#tlfill'),tis=$$('.ti'),tick=false;
  function onScroll(){
    var h=root.scrollHeight-innerHeight;prog.style.transform='scaleX('+(h>0?scrollY/h:0)+')';
    var cur=0;secs.forEach(function(s,i){if(s.getBoundingClientRect().top<innerHeight*.35)cur=i});
    tl.forEach(function(a,i){a.classList.toggle('on',i===cur);a.classList.toggle('done',i<cur)});
    var on=tl[cur];if(on&&tf.offsetParent){tf.style.height=(on.offsetTop+on.offsetHeight/2-6)+'px'}
    if(on&&getComputedStyle(list).display==='flex'){var L=list.scrollLeft,x=on.offsetLeft-list.offsetLeft;if(x<L||x+on.offsetWidth>L+list.clientWidth)list.scrollTo({left:x-20,behavior:reduce?'auto':'smooth'})}
    if(tlEl){var r=tlEl.getBoundingClientRect(),mid=innerHeight*.6,fh=Math.max(0,Math.min(r.height-16,mid-r.top));
    tlFill.style.height=fh+'px';
    tis.forEach(function(t){t.classList.toggle('on',t.getBoundingClientRect().top+10<mid)});}
    tick=false;
  }
  addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(onScroll)}},{passive:true});
  addEventListener('resize',onScroll);onScroll();

  /* word-split headings */
  $$('.blk h2.rv, .related h2.rv').forEach(function(h){var t=h.textContent.trim().split(/\s+/);h.setAttribute('aria-label',h.textContent.trim());h.innerHTML=t.map(function(w,i){return '<span class="w" aria-hidden="true" style="--i:'+i+'">'+w+' </span>'}).join('')});
  if(!reduce){
    $$('.prob,.del,.rc,.checks li,.pair,.goal,.fxc').forEach(function(el){el.classList.add('spot');el.addEventListener('pointermove',function(e){var r=el.getBoundingClientRect();el.style.setProperty('--mx',(e.clientX-r.left)+'px');el.style.setProperty('--my',(e.clientY-r.top)+'px')})});
    if(matchMedia('(hover:hover)').matches){$$('.cs2 .btn-primary').forEach(function(b){b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.15)+'px,'+((e.clientY-r.top-r.height/2)*.25)+'px)'});b.addEventListener('pointerleave',function(){b.style.transform=''})});
    $$('.showcase').forEach(function(s){s.addEventListener('pointermove',function(e){var r=s.getBoundingClientRect();s.style.setProperty('--ry',((e.clientX-r.left)/r.width-.5)*6+'deg');s.style.setProperty('--rx',(.5-(e.clientY-r.top)/r.height)*5+'deg')});s.addEventListener('pointerleave',function(){s.style.setProperty('--rx','0deg');s.style.setProperty('--ry','0deg')})});}
    var lap=$('.cs2 .laptop'),ph=$('.cs2 .phone');
    addEventListener('scroll',function(){var y=Math.min(scrollY,700);if(lap)lap.style.setProperty('--ly',(-y*.06)+'px');if(ph)ph.style.setProperty('--py',(y*.12)+'px')},{passive:true});
  }
  $$('.pills').forEach(function(p){[].forEach.call(p.children,function(sp,i){sp.style.setProperty('--i',i)})});
  if(!reduce&&'IntersectionObserver' in window){
    root.classList.add('js');
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
    $$('.rv').forEach(function(el){io.observe(el)});
    setTimeout(function(){$$('.rv').forEach(function(el){el.classList.add('in')})},6000);
    var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var el=e.target,to=+el.dataset.to,t0=null;
      (function s(t){t0=t0||t;var p=Math.min((t-t0)/1500,1);el.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(s)})(performance.now());co.unobserve(el)})},{threshold:.5});
    $$('.cnt').forEach(function(c){co.observe(c)});
  }
  /* live SERP typing demo. Second value = verified Google position; 0 shows "Target page". */
  var K=[["industrial fabrication company UAE", 0], ["stainless steel tank manufacturer UAE", 0], ["hygienic piping UAE", 0], ["CIP system UAE", 0], ["fabrication company Sharjah", 0]];
  var typed=$('#typed'),sres=$('#sres'),ki=0;
  function rows(p){var slot=p||1,h='';for(var i=1;i<=3;i++){h+=i===slot?'<div class="sr k"><span class="rk">'+(p?i:'•')+'</span><span><b>TKM Techs UAE</b><small>tkmtechs.ae</small></span><span class="pos">'+(p?'Google #'+p:'Target page')+'</span></div>':'<div class="sr"><span class="rk">'+(p?i:'•')+'</span><span class="ln"><i></i><i></i></span></div>'}sres.innerHTML=h}
  function showRows(){$$('.sr',sres).forEach(function(r,i){setTimeout(function(){r.classList.add('show')},i*160)})}
  function runSerp(){var q=K[ki][0],p=K[ki][1],n=0;sres.innerHTML='';typed.textContent='';
    (function t(){typed.textContent=q.slice(0,++n);if(n<q.length){setTimeout(t,45)}else{setTimeout(function(){rows(p);showRows();setTimeout(function(){ki=(ki+1)%K.length;runSerp()},3200)},350)}})()}
  if(typed){if(reduce){typed.textContent=K[0][0];rows(K[0][1]);$$('.sr',sres).forEach(function(r){r.classList.add('show')})}
  else if('IntersectionObserver' in window){var so=new IntersectionObserver(function(es){if(es[0].isIntersecting){runSerp();so.disconnect()}},{threshold:.3});so.observe($('#serp'))}
  else runSerp();}
})();
