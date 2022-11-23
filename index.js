function distanceFromHqInBlocks(difference){
    if (difference >= 42){
        return difference - 42

    }
    else{
        return 42-difference
    }

}

function distanceFromHqInFeet(difference){
    return distanceFromHqInBlocks(difference)*264
}

function distanceTravelledInFeet(a, b){
   if(b>a){
    return (b - a)*264

   }
   else{
    return (a - b)*264
   }
}

function calculatesFarePrice(start, destination){
    let fullDistance = distanceTravelledInFeet(start, destination)
    if(fullDistance<=400){
            return 0
    } else if(fullDistance>400 && fullDistance<=2000){
        //convert cents to dollars
        return (fullDistance-400) * 0.02
    }else if(fullDistance>2000 && fullDistance<=2500){
            return 25
    } else {
        return 'cannot travel that far'
    }
}
