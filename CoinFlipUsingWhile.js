let head = 1;
let tail = 2;
var flip;

while (flip){
    let flip = Math.floor(( Math.random() * 22 ) );

    console.log(flip);

	switch(flip) {
        case 0:
			if ((head = 1)){
                break;
            }
            else{
                head++;
                head == 11;
                console.log(head);
            }
        case 1:
            if ((tail = 2)){
                break;
            }
            else{
                tail++;
                tail == 11;
                console.log(tail);
            }
    }
    
    //     console.log("Thank You !!!")
    //     break;
    // }
}
if((head == 11)){
    console.log("Head won");
}else((head != 11))
    console.log("Tail won");


// if (head == 11){
//     console.log("HEADS Won");
// }
// else{
//     console.log("TAILS Won");
// }