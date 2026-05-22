window.onscroll = function() {
  if (document.body.scrollTop > 0 || document.documentElement .scrollTop > 0 ) {
    document.getElementById('navbar').classlist.add('scrolled');
  } else {
    document.getElementById('navbar')classlist.remove('scrolled');
  }
}