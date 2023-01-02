const fs = require('fs'); // read file
nameFile = '.dcm'; 
folderPath = '../image';
var directoryMake=(path)=>{
   //  console.log(fs.readdirSync(path));
    const list = [];
     fs.readdirSync(path).forEach(file=>{
         const key = `${path}/${file}`;
         // console.log(key);
         const treeNode = {
            key:key,
            label:file,
         }
         // console.log(treeNode);
         if(!file.includes(nameFile)){
            treeNode.children = directoryMake(`${path}/${file}`);
         }else{
            treeNode.value = `${path}/${file}`;
         }
         list.push(treeNode);
      })
     return list;
}
const arr = directoryMake(folderPath);
// console.log(arr);
// ------------ convert JSON to String ---------------- //
let data = JSON.stringify(arr,null,2);
// console.log(data);
// ------------ If there is an error, it will be displayed. ------------ //
fs.writeFileSync('list.json',data,(err)=>{
    if(err){
      throw err;
   } 
console.log('Data writen to file');
})
