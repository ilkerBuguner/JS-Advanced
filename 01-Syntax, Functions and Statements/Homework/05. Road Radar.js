function radar([speed, area]){
    let overLimit = 0;

    switch(area){
        case 'motorway': 
            overlimit = speed - 130; break;
        case 'interstate': 
            overlimit =  speed - 90; break;
        case 'city': 
            overlimit =  speed - 50; break;
        case 'residential': 
            overlimit =  speed - 20; break;
    }

    if(overlimit > 40){
        console.log('reckless driving');
    }
    else if(overlimit > 20){
        console.log('excessive speeding');
    }
    else if(overlimit > 0){
        console.log('speeding');
    }
}

radar([40, 'city']);
radar([21, 'residential']);
radar([120, 'interstate']);
radar([200, 'motorway']);