// Down-level transformations for Async Functions
// https://github.com/Microsoft/TypeScript/pull/9175
        // tsconfig.json
        // "lib": [
        //      "dom", "es2015", "es2015.promise"
        // ]

function delay(){
    return new Promise(resolve=>{
        setTimeout(resolve, 5000);
    });
}

async function doWork(){
    console.log("do work start");

    for(let i=0;i<=3;i++){
        await delay();
        console.log(i);
    }

    console.log("do work completed!");
}

doWork();