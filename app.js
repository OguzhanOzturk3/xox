let player1 ="Yiğit";
let player2 ="Aliberşah";

const gameBoard = (()=>{

    
    let board = [];

    let wincon =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    const boxes = document.querySelector(".boxes");
    const name = document.querySelector(".name");
    name.textContent ="Sıra:"+player1;
    for(let i =1; i<10;i++){
        board.push("");

        const box = document.createElement("button");
        box.classList.add("box");
        box.textContent=  i;
        box.value = i;
        boxes.appendChild(box);
        console.log(board[i])
    }

    function point(turn,value){

        if(turn%2==0){
            board[value-1]="x";
        }
        else if(turn%2==1){
            board[value-1]="o";

        }
        console.log("turn is"+turn);
        
        
        console.log(board[turn]);
    }


    const printString = (thewinner) => console.log("Winner is "+thewinner);


    function winner(){

        let pw1=0;
        let pw2=0;

        for(let i=0;i<7;i++){   

            let won1=0;
            let won2=0;



            for(let j=0;j<3;j++){

                if(board[wincon[i][j]]=="x"){
                    won1++;

                    
                }
                else if(board[wincon[i][j]]=="o"){
                    won2++;
                    
                    
                     
                }
            }

  
            if(won1==3){
                pw1++;
            }

            else if( won2==3){
                pw2++
            }
            
            

           

        }

        if(pw1==pw2){
            name.textContent ="Draw";
   
        }
       else if(pw1>pw2){
        name.textContent ="Winner is " +player1;
        }

        else if(pw2>pw1){
            name.textContent ="Winner is "+player2;
        }
        
        

    }

    


    return {
        board,
        point,
        winner
    };
})();



const game = (()=>{




    let turn = 0;

    

   
     const items = document.querySelectorAll(".box");
     const name = document.querySelector(".name");
     

     items.forEach(item=>{
         item.addEventListener("click",function(){


            
     

             if(turn%2==0 && turn<9){
                item.style.background="red";
                gameBoard.point(turn,item.value);
                console.log("button value is"+item.value)
                name.textContent ="Sıra: "+player2;
                turn++;
                
            }
            else if(turn%2==1 &&turn<=8){
            item.style.background="blue";
            gameBoard.point(turn,item.value);
            console.log("button value is"+item.value)
            name.textContent ="Sıra: "+player1;
            turn++;
            }

            if(turn==9){

                gameBoard.winner();
                        }

            
                console.log(gameBoard.board);
            
            
         })
     })

   

   
     



})();



