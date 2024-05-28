console.log("started..........")
const newProfilePicURL = 'https://i.postimg.cc/FsvMh1s2/pfp.jpg';

function replaceProfilePictures() {
  const profilePics = document.querySelectorAll(' img.EntityPhoto-circle-0, img.EntityPhoto-circle-3, img.EntityPhoto-square-3, img.ivm-image-view-model__square-img, img.ivm-image-view-model__circle-img, img.EntityPhoto-square-3, img.EntityPhoto-circle-5');
  profilePics.forEach(pic => {
    pic.src = newProfilePicURL;
  });
}

// initialization
window.addEventListener('load', () => {
  replaceProfilePictures();
  
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      replaceProfilePictures();
    });
  });
  
 
  const feedContainer = document.querySelector('div.main');
  if (feedContainer) {
    observer.observe(feedContainer, { childList: true, subtree: true });
  }
});