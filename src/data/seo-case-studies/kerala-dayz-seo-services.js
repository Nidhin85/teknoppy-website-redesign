
(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches, root=document.documentElement;
  function $(s){return document.querySelector(s)}
  function $$(s,c){return [].slice.call((c||document).querySelectorAll(s))}

  /* TOC */
  var secs=$$('.blk'),list=$('#tocList');
  list.insertAdjacentHTML('beforeend',secs.map(function(s,i){return '<li><a href="#'+s.id+'"><small>'+('0'+(i+1)).slice(-2)+'</small>'+s.dataset.t+'</a></li>'}).join(''));
  var tl=$$('#tocList a'),tf=$('#tocFill');

  /* share */
  var toast=$('#toast');
  $('#copy').onclick=function(){try{navigator.clipboard.writeText(location.href)}catch(e){}toast.classList.add('on');setTimeout(function(){toast.classList.remove('on')},1800)};
  $$('.share a').forEach(function(a){a.href+=encodeURIComponent(location.href);a.target='_blank';a.rel='noopener'});

  /* scroll: progress, toc, timeline */
  var prog=$('#progress'),tlEl=$('#tl'),tlFill=$('#tlfill'),tis=$$('.ti'),tick=false;
  function onScroll(){
    var h=root.scrollHeight-innerHeight;prog.style.transform='scaleX('+(h>0?scrollY/h:0)+')';
    var cur=0;secs.forEach(function(s,i){if(s.getBoundingClientRect().top<innerHeight*.35)cur=i});
    tl.forEach(function(a,i){a.classList.toggle('on',i===cur);a.classList.toggle('done',i<cur)});
    var on=tl[cur];if(on&&tf.offsetParent){tf.style.height=(on.offsetTop+on.offsetHeight/2-6)+'px'}
    if(on&&getComputedStyle(list).display==='flex'){var L=list.scrollLeft,x=on.offsetLeft-list.offsetLeft;if(x<L||x+on.offsetWidth>L+list.clientWidth)list.scrollTo({left:x-20,behavior:reduce?'auto':'smooth'})}
    var r=tlEl.getBoundingClientRect(),mid=innerHeight*.6,fh=Math.max(0,Math.min(r.height-16,mid-r.top));
    tlFill.style.height=fh+'px';
    tis.forEach(function(t){t.classList.toggle('on',t.getBoundingClientRect().top+10<mid)});
    tick=false;
  }
  addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(onScroll)}},{passive:true});
  addEventListener('resize',onScroll);onScroll();

  /* reveal + counters */
  if(!reduce&&'IntersectionObserver' in window){
    root.classList.add('js');
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
    $$('.rv').forEach(function(el){io.observe(el)});
    setTimeout(function(){$$('.rv').forEach(function(el){el.classList.add('in')})},6000);
    var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var el=e.target,to=+el.dataset.to,t0=null;
      (function s(t){t0=t0||t;var p=Math.min((t-t0)/1500,1);el.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(s)})(performance.now());co.unobserve(el)})},{threshold:.5});
    $$('.cnt').forEach(function(c){co.observe(c)});
  }

  /* live SERP typing demo (cycles the target keywords).
     Second value = verified Google position. Leave 0 until you have real ranking data;
     0 shows the result card with a "Target page" label instead of a position. */
  var K=[['taxi service in Kerala',0],['taxi service in Kochi',0],['one way taxi Kerala',0],['Kochi airport taxi',0],['Cochin Airport to Munnar taxi',0]];
  var typed=$('#typed'),sres=$('#sres'),ki=0;
  function rows(p){var slot=p||1,h='';for(var i=1;i<=3;i++){h+=i===slot?'<div class="sr k"><span class="rk">'+(p?i:'•')+'</span><span><b>Kerala Dayz</b><small>keraladayz.com</small></span><span class="pos">'+(p?'Google #'+p:'Target page')+'</span></div>':'<div class="sr"><span class="rk">'+(p?i:'•')+'</span><span class="ln"><i></i><i></i></span></div>'}sres.innerHTML=h}
  function showRows(){$$('.sr',sres).forEach(function(r,i){setTimeout(function(){r.classList.add('show')},i*160)})}
  function runSerp(){var q=K[ki][0],p=K[ki][1],n=0;sres.innerHTML='';typed.textContent='';
    (function t(){typed.textContent=q.slice(0,++n);if(n<q.length){setTimeout(t,45)}else{setTimeout(function(){rows(p);showRows();setTimeout(function(){ki=(ki+1)%K.length;runSerp()},3200)},350)}})()}
  if(reduce){typed.textContent=K[0][0];rows(K[0][1]);$$('.sr',sres).forEach(function(r){r.classList.add('show')})}
  else if('IntersectionObserver' in window){var so=new IntersectionObserver(function(es){if(es[0].isIntersecting){runSerp();so.disconnect()}},{threshold:.3});so.observe($('#serp'))}
  else runSerp();
})();
