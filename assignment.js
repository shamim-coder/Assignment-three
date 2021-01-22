// Assignment Github URL:
// https://github.com/wpshamim/Assignment-three




// Kilometer to Meter Calculation


function kilometerToMeter(kilometer) {
    let meter = 1000; // 
    
    if(kilometer < 0 || isNaN(kilometer) ) { 
        return "Wrong Input or Negative value Detect";
    } 
    else {
        meter *= kilometer; // multiply the Kilometer value by 1000
        return meter;
    }
}
// let getmeter = kilometerToMeter(4.5);
// console.log(getmeter);




// Budget Calculetor


function budgetCalculator(watch, mobile, laptop) {
    
    // Set the Single Price Value of Watch, Mobile & Laptop
    let [watchPrice, mobilePrice, laptopPrice] = [50, 100, 500];

    // Multoply by number of items have been Purchased.
    watchPrice  *= watch;
    mobilePrice *= mobile;
    laptopPrice *= laptop;

    // Assign to totalPrice
    let totalPrice = ( watchPrice + mobilePrice + laptopPrice );
    
    if (watch == null || mobile == null || laptop == null) {
        return "Please Input Currect Value";
    }
    else if (isNaN(watch) || isNaN(mobile) || isNaN(laptop)) {
        return "Wrong Input Detect";
    }
    else if (watch < 0 || mobile < 0 || laptop < 0) {
        return "Negetive Value Detect";
    }
    else {
        return totalPrice; // Return Total Price of all Items.
    }
}

// let getCost = budgetCalculator(7,5,3);
// console.log(getCost);




// Hotel Cost Calculetion

function hotelCost(howManyDay) {
    
    let totalCost = 0;

    // nagative value or number input or blank input detect
    if ( howManyDay < 0 ) {
        return "Nagetive Value Detect";
    } 
    else if ( howManyDay == null ) {
        return "Please Input Currect Value";
    } 
    else if ( isNaN(howManyDay) ) {
        return "Wrong Input Detect";
    }
    // Calculate Hotel Cost 
    else { 
        if(howManyDay <= 10) {                 // First 10 Days Calculetion
            totalCost = (howManyDay * 100);
            // return total cost
            return totalCost;
        } 
        else if (howManyDay <= 20) {           // Second 10 Days Calculetion
            let firstTenDays = (10 * 100);
            let remainDays = (howManyDay - 10) * 80;
            totalCost = firstTenDays + remainDays;
            // return total cost
            return totalCost;
        }
        else {                                  // After 20 Days Calculetion
            let firstTenDays = (10 * 100);
            let secondTenDays = (10 * 80);
            let remainDays = (howManyDay - 20) * 50;
            totalCost = firstTenDays + secondTenDays + remainDays;
            // return total cost
            return totalCost;
        } 
    }
    
}
// let getTotalCost = hotelCost(22);
// console.log(getTotalCost);




// Mega Friends Largest Name Finder

function megaFriend(friends){
    let largeName = [];

    if (friends == null) {
        return "Input Your Friends Collection";
    }
    else if (Array.isArray(friends) == false) {
        return "Its not an Array";
    }
    else {
        for (let i = 0; i < friends.length; i++) {
        
            const friendsElement = friends[i];
           
            if (friendsElement.length > largeName.length) {
                largeName = friendsElement;
            }
        }
        return largeName;
    }
    
}

// let friendlist = ["Shamim", "Prihas", "Asaduzzaman Sohel", "Abdul", "Torikul", "Arafat"];
// let result = megaFriend(friendlist);
// console.log(result);

