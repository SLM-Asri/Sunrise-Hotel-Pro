
document.addEventListener('DOMContentLoaded', function(){
  const y = new Date().getFullYear();
  for (let id of ['year','year2','year3','year4','year5']) {
    const el = document.getElementById(id);
    if (el) el.textContent = y;
  }


  const news = document.getElementById('newsletter-form');
  if (news) {
    news.addEventListener('submit', function(e){
      e.preventDefault();
      const email = document.getElementById('newsletter-email').value;
      alert('Thanks! ' + email + ' has been subscribed');
      news.reset();
    });
  }


  const quick = document.getElementById('quick-contact');
  if (quick) quick.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thanks for contacting us!');
    quick.reset();
  });


  const inquiry = document.getElementById('inquiry');
  if (inquiry) {
    inquiry.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Inquiry submitted. We will contact you.');
      inquiry.reset();
    });
  }
});
