// Code your solution in this file!

function distanceFromHqInBlocks(pickUpLocation){
    const headquaters = 42;
    return Math.abs(pickUpLocation - headquaters);

}

function distanceFromHqInFeet(pickUpLocation) {
    const blockLength = 264;
    const block = distanceFromHqInBlocks(pickUpLocation);
    return block * 264;
    
}

function distanceTravelledInFeet(start, destination){
    const lengthPerBlock = 264;
    const distanceInFeet = Math.abs((destination - start) * 264);
    return distanceInFeet;
}

function calculatesFarePrice(startBlock, endBlock) {
    const distance = Math.abs(endBlock - startBlock)*264

    if (distance <= 400){
        return 0;
    }

    else if (distance > 400 && distance <= 2000) {
        return (distance - 400)*0.02;
    }
    else if (distance > 2000 && distance <= 2500) {
        return 25;
    }
    else if (distance > 2500) {
        return "cannot travel that far";

    }

    }
