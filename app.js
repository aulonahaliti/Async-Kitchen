// function bakeCookies() {
//     console.log('1. Start baking cookies...');
//     let cookies = " 🍪 ";
//     console.log('2. Cookies are done!');
//     return cookies;
// }
// // windows + . = emojis
// function makeSandwich() {
//     console.log('3. Start making a sandwich...');
//     let sandwich = " 🥪 ";
//     console.log('4. Sandwiches are done!');
//     return sandwich;
// }

// function boilEggs() {
//     console.log('5. Start boiling eggs...');
//     let eggs = " 🥚🥚🥚🥚 ";
//     console.log('6. Eggs are done!');
//     return eggs;
// }

// console.log('kitchen:');
// let cookies = bakeCookies();
// let sandwich = makeSandwich();
// let eggs = boilEggs();
// console.log(`All done: ${cookies}, ${sandwich}, ${eggs}`);

function bakeCookies() {
     console.log('1. Start baking cookies...');
     let cookies = " 🍪 ";
     console.log('2. Cookies are done!');
     return cookies;
}

function bakeCookies() {
    return new Promise((resolve) => {
        console.log("1. Start baking cookies...");
        setTimeout(() => {
            console.log('2. Cookies are done!');
            resolve("🍪");
        }, 3000);
    });
}

function makeSandwich() {
         console.log('3. Start making a sandwich...');
         let sandwich = " 🥪 ";
         console.log('4. Sandwiches are done!');
         return sandwich;
     }

     function makeSandwich() {
        return new Promise((resolve) => {
            console.log("3. Start making a sandwich...");
            setTimeout(() => {
                console.log('4.Sandwiches are done!!');
                resolve("🥪");
            }, 2000);
        });
    }
    
 function boilEggs() {
         console.log('5. Start boiling eggs...');
         let eggs = " 🥚🥚🥚🥚 ";
         console.log('6. Eggs are done!');
         return eggs;
     }

     function boilEggs() {
        return new Promise((resolve) => {
            console.log("5. Start boiling eggs...");
            setTimeout(() => {
                console.log('6. Eggs are done!');
                resolve("🥚🥚🥚🥚");
            }, 1000);
        });
    }

async function asyncKitchen() {
    console.log("Miresevini ne kuzhinen tone:");

    const cookiesPromise = bakeCookies();
    const sandwichPromise = makeSandwich();
    const eggsPromise = boilEggs();

    const cookies = await cookiesPromise;
    const sandwich = await sandwichPromise;
    const eggs = await eggsPromise;

    console.log(`All done: ${cookies}, ${sandwich}, ${eggs}`);
}

asyncKitchen();

