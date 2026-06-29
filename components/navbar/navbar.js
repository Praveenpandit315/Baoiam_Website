const trigger   = document.getElementById('ksTrigger');
  const dropdown  = document.getElementById('ksDropdown');
  const catItems  = document.querySelectorAll('.dd-item[data-cat]');

  // Toggle main dropdown on click
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.toggle('open');
    trigger.classList.toggle('open', isOpen);
    if (!isOpen) closeAllSubs();
  });

  // Toggle sub-menus on category click
  catItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const cat    = item.dataset.cat;
      const sub    = document.getElementById('sub-' + cat);
      const isOpen = sub.classList.contains('open');

      // close all other subs
      closeAllSubs();

      if (!isOpen) {
        sub.classList.add('open');
        item.classList.add('active-cat');
      }
    });
  });

  function closeAllSubs() {
    document.querySelectorAll('.sub-menu').forEach(s => s.classList.remove('open'));
    document.querySelectorAll('.dd-item.active-cat').forEach(i => i.classList.remove('active-cat'));
  }

  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
    dropdown.classList.remove('open');
    trigger.classList.remove('open');
    closeAllSubs();
  });

  // Prevent dropdown itself from closing when clicking inside
  dropdown.addEventListener('click', e => e.stopPropagation());

  const menu=document.querySelector(".menu-toggle");
const links=document.querySelector(".nav-links");
const actions=document.querySelector(".nav-actions");

menu.onclick=function(){

    links.classList.toggle("show");
    actions.classList.toggle("show");

}