(() => {
    const loadComments = async () => {
      if (typeof twikoo === "undefined") {
        setTimeout(loadComments, 100);
      } else {
        const container = document.getElementById('tcomment');
        if (!container) {
          return;
        }
        twikoo.init({
          envId: 'https://twikoo.drfengling.online/',
          el: '#tcomment',
        });
      }
    };
  
    window.loadComments = loadComments;
    window.addEventListener('pjax:success', () => {
      window.loadComments = loadComments;
    });
  })();
  