// Kilometer to Meter Calculation


function kilometerToMeter(kilometer) {
    let meter = 1000; // 
    
    if(kilometer < 0 || isNaN(kilometer)) { 
        return "Wrong Input";
    } 
    else {
        meter *= kilometer; // multiply the Kilometer value by 1000
        return meter;
    }
}
// let result = kilometerToMeter(-5);
// console.log(result);




// Budget Calculetor


function budgetCalculator(watch, mobile, laptop) {
    
    // Set the Single Price Value of Watch, Mobile & Laptop
    let [watchPrice, mobilePrice, laptopPrice] = [50, 100, 500];

    // Multoply by number of items have been Purchased.
    watchPrice  *= watch;
    mobilePrice *= mobile;
    laptopPrice *= laptop;

    // Assign to totalPrice
    let totalPrice = watchPrice+mobilePrice+laptopPrice;
    
    if (watch == null || mobile == null || laptop == null) {
        return "Blank Input";
    }
    else if (isNaN(watch) || isNaN(mobile) || isNaN(laptop)) {
        return "Wrong Input";
    }
    else if (watch < 0 || mobile < 0 || laptop < 0) {
        return "Negetive Value Not Allowed";
    }
    else {
        return totalPrice; // Return Total Price of all Items.
    }
}

// let result = budgetCalculator(4,5,2);
// console.log(result);




// Hotel Cost Calculetion

function hotelCost(day) {
    
    let totalCost = 0;

    // nagative value or number input or blank input detect
    if (day < 0 ) {
        return "Nagetive Value";
    } else if (day == null) {
        return "Blank Input";
    } else if (isNaN(day)) {
        return "Wrong Input";
    }
    // Calculate Hotel Cost 
    else { 
        if(day <= 10) {                 // First 10 Days Calculetion
            totalCost = (day*100);
            return totalCost;
        } 
        else if (day <= 20) {           // Second 10 Days Calculetion
            let firstTenDays = (10*100);
            let remainDays = (day-10)*80;
            totalCost = firstTenDays+remainDays;
            return totalCost;
        }
        else {                          // After 20 Days Calculetion
            let firstTenDays = (10*100);
            let secondTenDays = (10*80);
            let remainDays = (day-20)*50;
            totalCost = firstTenDays+secondTenDays+remainDays;
            return totalCost;
        } 
    }
    
}
// let result = hotelCost(4);
// console.log(result);



// Mega Friends Largest Name Finder

function megaFriend(friends){
    let largeName="";

    if (friends == null) {
        return "Blank Input";
    } 
    else if (Array.isArray(friends) == false) {
        return "Its not Array";
    }
    else if (typeof(friends) == 'number') {
        return "Number Cannot be Define";
    }
    else {
        for (let i = 0; i < friends.length; i++) {
        
            const element = friends[i];
           
            if (element.length > largeName.length) {
                largeName = element;
            }
        }
        return largeName;
    }
    
}

let friendlist = ["Shamim", "Rasel", "Abdul", "Torikul", "Arafat"];
let result = megaFriend(["Shamim", 8, "Abdul", "Torikul", "Arafat"]);
console.log(result);

