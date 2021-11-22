let head = 1;
let tail = 1;

while (true){
    let flip = Math.floor(( Math.random() * 2 ) );

    console.log(flip);

	if(flip == 1){
        console.log("Head")
    }else{
        console.log("Tail")
    }
    break;
}
return true;

