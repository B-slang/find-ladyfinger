const bhindi = document.querySelector(".bhindi");

console.log(bhindi);
bhindi.style.opacity = "1";

const circles = document.querySelectorAll(".circle");
console.log(circles);

bhindi.addEventListener("dragstart", dragstart);
bhindi.addEventListener("dragend", dragEnd);

// console.log(this);


//start drag

function dragstart(){
    this.className += "hold";
    // console.log(this.className);
    setTimeout(()=>(
        this.className = "invisible"), 0);
    }


    //end drag

    function dragEnd(){
        // console.log(this);
        this.className = "bhindi";
        this.classList.toggle("bhindi-hidden");
        this.style.opacity = "0";
        document.querySelector("body").style.backgroundColor = "red";
        title.innerText = "Find The Bhindi"
        title.style.color = "#fff";
        // console.log(title);
    }



    for (const circle of circles) {
        circle.addEventListener("dragover", dragOver);
        circle.addEventListener("dragenter", dragEnter);
        circle.addEventListener("dragleave", dragLeave);
        circle.addEventListener("drop", dragDrop);
      }
      
      function dragOver(e) {
        e.preventDefault();
      }
      function dragEnter(e) {
        e.preventDefault();
        this.className += " hovered";
      }
      function dragLeave() {
        this.className = "circle";
      }
      function dragDrop() {
        this.className = "circle";
        this.append(bhindi);
      }
      
        circles.forEach((circle) => {
        circle.addEventListener("click", () => {
          // console.log(circle.childElementCount);
          const winOrLose = document.querySelector(".overlay");
          if (circle.childElementCount == 1) {
            bhindi.style.opacity = "1";
            winOrLose.style.display = "block";
            winOrLose.innerHTML = `<h2 class="win">You won</h2>`;
      
            //   alert("Try again!");
            //   location.reload();
            setTimeout(() => {
              alert("Try again!");
              location.reload();
            }, 300);
          } else {
            bhindi.style.opacity = "1";
            winOrLose.style.display = "block";
            winOrLose.innerHTML = `<h2 class="lose">You lost</h2>`;
            setTimeout(() => {
              alert("Try again!");
              location.reload();
            }, 300);
          }
        });
      });