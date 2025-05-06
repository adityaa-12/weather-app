export const getTips = (desc) => {
    let toLowerDesc = desc.toLowerCase();

    if (toLowerDesc.includes("clear") || toLowerDesc.includes("sunny") || toLowerDesc.includes("hot") || toLowerDesc.includes("cloudy")) {
        return "Perfect day for a walk in the sun! Don't forget your sunglasses.";
    } else if (toLowerDesc.includes("rain") || toLowerDesc.includes("drizzle")) {
        return "A rainy day is the perfect excuse for a hot cup of coffee and a good book.";
    } else if (toLowerDesc.includes("snow") || toLowerDesc.includes("freezing") || toLowerDesc.includes("sleet")) {
        return "Perfect day for building a snowman or sipping hot chocolate by the fire!";
    } else if (toLowerDesc.includes("wind") || toLowerDesc.includes("gusts")) {
        return "The wind's picking up! Time to harness that energy with some outdoor fun!";
    } else if (toLowerDesc.includes("cloud") || toLowerDesc.includes("overcast")) {
        return "Overcast weather is here! Great time to take a walk with a light jacket."
    } 
    
    else {
        return "Stay prepared and stay safe";
    }

}