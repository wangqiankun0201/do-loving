function doYouLoveMe(youLoveMe:string) {
    youLoveMe && ILoveYou();
}

function ILoveYou() {
    console.log('I just wanna be a candy only for you.');
    setInterval(()=> {
        console.log('I just wanna be a candy only for you.');
        
    },86400000);
}

let youSay = prompt('Do you love me?');
youSay === 'yes' ? doYouLoveMe('yes') : doYouLoveMe('');
