let used = new Map();

// used.set({key:'1',value:2});
// used.set({key:2,value:2});
// used.set({key:3,value:2});

used.set('1',2)
used.set('2',2)
used.set('3',2)

console.log(used.keys());

for(let item of used.keys()){
    console.log('1:'+item);
}


// for(let item of used.values()){
//     console.log('3:'+item);
// }



// console.log(used);