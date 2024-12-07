(function() {
    const cursorPointed = document.querySelector('.cursor');
    
    const moveCursor = (e) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;
       
      cursorPointed.style.transform = `translate3d(${mouseX-15}px, ${mouseY-15}px, 0)`;
     
    }
    
    window.addEventListener('mousemove', moveCursor);
})()