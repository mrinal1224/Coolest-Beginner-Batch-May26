const path = require('path')
const fs = require('fs')

// extension name

// const extensionName = path.extname('/Users/admin/Desktop/Coolest-Beginner Batch-May26/LLD-4/class-1(Intro to node)/f2.txt')

// console.log(extensionName)

// // baseName

// const fileName = path.basename('/Users/admin/Desktop/Coolest-Beginner Batch-May26/LLD-4/class-1(Intro to node)/f2.txt')
// console.log(fileName)

// copy and file from one diretory to another

// srcDirectory , newDirectory


const f2path = '/Users/admin/Desktop/Coolest-Beginner Batch-May26/LLD-4/class-1(Intro to node)/srcDirectory/f2.txt'



const srcPath='/Users/admin/Desktop/Coolest-Beginner Batch-May26/LLD-4/class-1(Intro to node)/srcDirectory'
const destPath = '/Users/admin/Desktop/Coolest-Beginner Batch-May26/LLD-4/class-1(Intro to node)/newDirectory/'

// extrct the baseName of the file

const fileName = path.basename(f2path)
console.log(fileName) // f2.txt

const copyFilePath = path.join(destPath ,fileName )

console.log(copyFilePath)

fs.copyFileSync(f2path ,copyFilePath  )

fs.unlink(f2path , (err)=>{
  if(err){
    console.log(err + 'cannot cut file')
  }

  console.log('File Shifted')
})

console.log('File Copied')