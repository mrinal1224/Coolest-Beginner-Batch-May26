const fileSystem = require("fs");

// Create , write , read , delete

// fileSystem.readFile("f1.txt", (err, data) => {
//   if (err) {
//     console.error(err);
//   }

//   console.log("This is file 1 data -> " + data);
// });

// write
// const content =
//   "The lion (Panthera leo) is a large cat of the genus Panthera, currently found only in Sub-Saharan Africa and India.";
// fileSystem.writeFile("f5.txt", content, (err) => {
//   if (err) {
//     console.error(err);
//   }

//   console.log("file written");
// });

// update
// const updatedContent = 'it has a muscular, broad-chested body; a short, rounded head; round ears; and a dark, hairy tuft at the tip of its tail'

// fileSystem.appendFile('f5.txt' , updatedContent ,(err)=>{
//     if(err){
//         console.error(err)
//     }

//     console.log('File Updated')
// } )

// delete a file

// fileSystem.unlink('f3.txt' , (err)=>{
//   if(err){
//     console.error(err)
//   }

//   console.log("file Deleted")
// })

// rename

// fileSystem.rename('f1.txt' , 'newFile.txt' , (err)=>{
//   if(err){
//     console.log(err)
//   }

//   console.log('file Renamed')
// })

// stats

fileSystem.stat("f2.txt", (err, stats) => {
  if (err) {
    console.error(err);
  }

  console.log(stats.size);
});





