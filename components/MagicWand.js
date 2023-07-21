import React from 'react';
import {HiOutlineUserAdd} from 'react-icons/hi';

const MagicWand = () => {


if (typeof window !== "undefined") {
    const wand = document.getElementById("wand"),
    tiles = document.querySelectorAll(".tile");

const xy = (x, y) => ({ x, y }),
    px = value => `${value}px`,
    deg = value => `${value}deg`,
    clamp = (value, min, max) => Math.max(Math.min(value, max), min);

    const updateMouse = (mouseX, mouseY) => {
        const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
        
        const mouse = {
          position: xy(mouseX, mouseY),
          decimal: xy(mouseX / windowWidth, mouseY / windowHeight),
          multiplier: xy(1, 0.4),
          offset: xy(windowWidth * -0.15, windowHeight * 0.1),
          modifiedPosition: xy(0, 0)
        }
        
        mouse.modifiedPosition.x = mouse.position.x * mouse.multiplier.x + mouse.offset.x;  
        mouse.modifiedPosition.y = mouse.position.y * mouse.multiplier.y + mouse.offset.y;  
        
        return mouse;
      }
      
      const revealImages = mouseX => {
        for(const tile of tiles) {
          const dimensions = tile.getBoundingClientRect(),
                relativeMouseX = mouseX - dimensions.left,
                mouseXAsDecimal = clamp(relativeMouseX / dimensions.width, 0, 1);
          
          const opacity = mouseXAsDecimal,
                blur = 1 - mouseXAsDecimal;
          
          tile.style.setProperty("--opacity", opacity);
          tile.style.setProperty("--blur", blur);
        }
      }
      
      const getWandStyles = mouse => ({
        left: px(mouse.modifiedPosition.x),
        top: px(mouse.modifiedPosition.y),
        rotate: deg(mouse.decimal.x * 20 - 10)
      });
      
      window.onmousemove = e => {
        const mouse = updateMouse(e.clientX, e.clientY),  
              wandStyles = getWandStyles(mouse);
        
        wand.animate(wandStyles, { duration: 400, fill: "forwards" });
        
        revealImages(mouse.modifiedPosition.x);
      }
}



  return (
    <>
    <div className="wand-container" >
      <div id="wand">
        <div className="cap"></div>
      </div>

      <div id="magictiles">
        <div className="magictile">
          <HiOutlineUserAdd size={30} />
          <img src="https://images.unsplash.com/photo-1682685797857-97de838c192e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className="magictile">
        <HiOutlineUserAdd size={30} />
          <img src="https://images.unsplash.com/photo-1685209342301-9d9bf0c5ba4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className="magictile">
        <HiOutlineUserAdd size={30} />
          <img src="https://images.unsplash.com/photo-1689664945319-176390f2a617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" />
        </div>
      </div>
      </div>
    </>
  );
}

export default MagicWand