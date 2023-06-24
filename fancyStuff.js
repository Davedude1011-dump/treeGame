var CloudAreaElement = document.querySelector(".cloud-area")
function MakeCloud() {
    var RandomWidth = Math.floor(Math.random() * (500 - 200 + 1)) + 200;
    var RandomDuration = Math.floor(Math.random() * (300 - 10 + 1)) + 10;
    var RandomCloudType = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    var RandomTopPosition = Math.floor(Math.random() * (200 - 1 + 1)) + 1;

    var NewCloud = document.createElement("div")
    NewCloud.classList.add("cloud")

    NewCloud.style.width = RandomWidth + "px"
    NewCloud.style.top = RandomTopPosition + "px"
    NewCloud.style.backgroundImage = `url("clouds/cloud${RandomCloudType}.png")`
    NewCloud.style.animationDuration = RandomDuration + "s"
    if (RandomDuration < 50) {
        NewCloud.style.zIndex = "999"
    }

    CloudAreaElement.appendChild(NewCloud)

    var delay = Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000;
    setTimeout(MakeCloud, delay);
}
MakeCloud()


document.addEventListener('mousemove', function(event) {
    var axe = document.querySelector('.axe');
    axe.style.left = (event.clientX - axe.offsetWidth / 2) + 'px';
    axe.style.top = (event.clientY - axe.offsetHeight / 2) + 'px';
  });

var axe = document.querySelector('.axe');

document.addEventListener('click', function() {
  axe.classList.add('axe-rotate');
  setTimeout(function() {
    axe.classList.remove('axe-rotate');
  }, 100);
});


function MakeLog() {
    var ScreenWidth = window.innerWidth;
    var ScreenHeight = window.innerHeight;
  
    var CenterXMin = Math.floor(ScreenWidth / 4); // Center half width starts from 1/4th of the screen
    var CenterXMax = Math.floor(ScreenWidth * 3 / 4); // Center half width ends at 3/4th of the screen
  
    var RandomX = Math.floor(Math.random() * (CenterXMax - CenterXMin + 1)) + CenterXMin;
    var RandomY = Math.floor(Math.random() * ScreenHeight);
  
    var NewLog = document.createElement("div");
    NewLog.classList.add("log");
    NewLog.style.left = RandomX + "px";
    NewLog.style.top = RandomY + "px";
    document.body.appendChild(NewLog);
  
    setTimeout(function() {
      NewLog.parentNode.removeChild(NewLog);
    }, 300);
  }

  TreeElement.style.backgroundImage = `url("trees/tree${TreeStats.TreeType}.png")`
TreeElement.addEventListener('click', function() {
    let RandomChance = Math.random()
    if (RandomChance >= 0.5) { TreeElement.classList.add('tree-rotate-left'); }
    else { TreeElement.classList.add('tree-rotate-right'); }
    setTimeout(function() {
        if (RandomChance >= 0.5) { TreeElement.classList.remove('tree-rotate-left'); }
        else { TreeElement.classList.remove('tree-rotate-right'); }
    }, 100);
  });


function ScrollDown() {
  const currentPosition = window.pageYOffset;
  const targetPosition = currentPosition + window.innerHeight;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}
function ScrollUp() {
  const currentPosition = window.pageYOffset;
  const targetPosition = currentPosition - window.innerHeight;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}