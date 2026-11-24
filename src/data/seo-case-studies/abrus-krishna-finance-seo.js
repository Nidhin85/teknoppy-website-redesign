
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

  /* reveal + counters (rank cards count down from 10 to their Google position) */
  if(!reduce&&'IntersectionObserver' in window){
    root.classList.add('js');
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
    $$('.rv').forEach(function(el){io.observe(el)});
    setTimeout(function(){$$('.rv').forEach(function(el){el.classList.add('in')})},6000);
    var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var el=e.target,to=+el.dataset.to,from=+(el.dataset.from||0),t0=null;
      (function s(t){t0=t0||t;var p=Math.min((t-t0)/1500,1);el.textContent=Math.round(from+(to-from)*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(s)})(performance.now());co.unobserve(el)})},{threshold:.5});
    $$('.cnt').forEach(function(c){co.observe(c)});
  }

  /* position tracker: marker climbs from #10 to the real position */
  $$('.scale').forEach(function(sc){
    var p=+sc.dataset.p,h='<span class="rail"></span><span class="fill"></span>';
    for(var i=1;i<=10;i++)h+='<i class="tk" style="left:calc(12px + (100% - 24px) * '+((i-1)/9)+')'+(i===p?';opacity:0':'')+'">'+i+'</i>';
    h+='<span class="dot">'+p+'</span>';sc.innerHTML=h;
    sc.style.setProperty('--x','calc(12px + (100% - 24px) * '+((p-1)/9)+')');
    sc.style.setProperty('--w','calc((100% - 24px) * '+((10-p)/9)+')');
  });

  /* hero: Google search typing demo — real positions for abruskrishna.com */
  var K=[["kml registered loan company guruvayoor", 1], ["gold doorstep service in guruvayoor", 2], ["best micro finance company in guruvayoor", 3], ["instant gold loan guruvayoor", 4], ["best gold loan in guruvayoor", 8]];
  var hT=$('#hTyped'),grs=$$('.gr'),prs=$$('.pr'),ki=0;
  function win(p){var st=p<=6?1:p-5;grs.forEach(function(g,j){var n=st+j;g.querySelector('.rk').textContent=n;g.querySelector('.pos').textContent='Google #'+n});return st}
  function setK(i){var p=K[i][1],st=win(p);grs.forEach(function(g,j){g.classList.toggle('k',st+j===p)});prs.forEach(function(r,j){r.classList.toggle('on',j===i)})}
  function run(){var q=K[ki][0],n=0;grs.forEach(function(g){g.classList.remove('k')});hT.textContent='';
    (function t(){hT.textContent=q.slice(0,++n);if(n<q.length){setTimeout(t,45)}else{setTimeout(function(){setK(ki);setTimeout(function(){ki=(ki+1)%K.length;run()},2800)},300)}})()}
  if(reduce){hT.textContent=K[0][0];setK(0)}else{setTimeout(run,900)}
})();
