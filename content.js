/* Les contenus proviennent de content/site.json, modifiable depuis Decap CMS. */
(async()=>{
 const $=s=>document.querySelector(s); const text=(node,value)=>{if(node && typeof value==='string')node.textContent=value};
 const safeUrl=(url)=>{if(typeof url!=='string'||!url.trim())return '';try{const u=new URL(url,location.href);return ['https:','http:','mailto:'].includes(u.protocol)?u.href:''}catch{return ''}};
 const imageUrl=(url)=>{if(typeof url!=='string'||!url.trim())return '';try{const u=new URL(url,location.href);return ['https:','http:'].includes(u.protocol)?u.href:''}catch{return ''}};
 const el=(tag,cls,content)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(content!==undefined)n.textContent=String(content);return n};
 const setBackground=(selector,url)=>{const n=$(selector),src=imageUrl(url);if(n&&src)n.style.backgroundImage=`linear-gradient(90deg,rgba(8,35,19,.65),rgba(8,35,19,.15)),url("${src.replaceAll('"','%22')}")`;};
 const setPhoto=(selector,url)=>{const n=$(selector),src=imageUrl(url);if(n&&src){n.style.backgroundImage=`url("${src.replaceAll('"','%22')}")`;n.style.backgroundSize='cover';n.style.backgroundPosition='center';n.replaceChildren();}};
 const linked=(parent,label,url)=>{const a=el('a',null,label);a.href=safeUrl(url)||'#contact';parent.append(a)};
 try{
 const response=await fetch('content/site.json',{cache:'no-cache'});if(!response.ok)throw Error('Contenu indisponible');const d=await response.json();
 document.querySelectorAll('[data-content]').forEach(n=>text(n,d[n.dataset.content]));
 setBackground('#hero-image',d.hero_image);setPhoto('#about-image',d.about_image);setBackground('#impact-image',d.impact_image);
 (d.stats||[]).forEach((s,i)=>{text($(`[data-stat-value="${i}"]`),s.value);text($(`[data-stat-label="${i}"]`),s.label)});
 (d.programs||[]).forEach((p,i)=>{const n=$(`[data-program-index="${i}"]`);if(n){text(n.querySelector('span'),p.icon);text(n.querySelector('h3'),p.title);text(n.querySelector('p'),p.description)}});
 const projects=$('#projects-list');if(projects&&Array.isArray(d.projects)){projects.replaceChildren();d.projects.forEach(p=>{const card=el('article','project'),photo=el('div','project-photo',p.image?'':'Photographie du projet à ajouter'),body=el('div','project-body');const src=imageUrl(p.image);if(src){const img=el('img');img.src=src;img.alt=p.title||'Projet';img.loading='lazy';photo.replaceChildren(img)}body.append(el('h3',null,'📍 '+(p.title||'Projet')),el('p',null,p.description||''));linked(body,'VOIR LE PROJET →',p.link);card.append(photo,body);projects.append(card)})}
 const news=$('#news-list');if(news&&Array.isArray(d.news)){news.replaceChildren();d.news.forEach(a=>{const card=el('article');const src=imageUrl(a.image);if(src){const img=el('img','news-photo');img.src=src;img.alt=a.title||'Actualité';img.loading='lazy';card.append(img)}card.append(el('small',null,[a.category,a.date].filter(Boolean).join(' · ')),el('h3',null,a.title||''),el('p',null,a.description||''));linked(card,'En savoir plus →',a.link);news.append(card)})}
 const partners=$('#partners-list');if(partners&&Array.isArray(d.partners)&&d.partners.length){partners.replaceChildren();const list=el('div','partner-logos');d.partners.forEach(p=>{const a=el('a','partner-item');a.href=safeUrl(p.link)||'#contact';const src=imageUrl(p.logo);if(src){const img=el('img');img.src=src;img.alt=p.name||'Partenaire';img.loading='lazy';a.append(img)}a.append(el('span',null,p.name||'Partenaire'));list.append(a)});partners.append(list)}
 text($('#testimonial-text'),d.testimonial_text);text($('#testimonial-author'),d.testimonial_author);
 const contact=$('#contact-details');if(contact){contact.replaceChildren(el('h3',null,'NOUS CONTACTER'),el('p',null,'📍 '+(d.contact_address||'Adresse à confirmer')));if(d.contact_email){const a=el('a',null,d.contact_email);a.href='mailto:'+d.contact_email;contact.append(a)}if(d.contact_phone)contact.append(el('p',null,'☎ '+d.contact_phone))}
 const join=$('#join-link');if(join&&d.join_email){join.href='mailto:'+encodeURIComponent(d.join_email)+'?subject=Demande%20d%27adh%C3%A9sion'}
 const donate=$('#donate-btn');if(donate){donate.addEventListener('click',()=>{const url=safeUrl(d.donation_url);if(url){window.open(url,'_blank','noopener,noreferrer')}},true);if(d.donation_url){donate.dataset.paymentUrl=safeUrl(d.donation_url);donate.title='Ouvrir la page officielle de dons (le montant choisi ne sera pas transmis automatiquement)'}}
 }catch(e){console.warn('Contenu CMS non chargé. Contenu HTML de secours conservé.',e)}
})();