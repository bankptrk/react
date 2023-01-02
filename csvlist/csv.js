const fs = require('fs');
const csv = require('csv-parser');

let sample = './sample_submission.csv';
let train = './train_image_level.csv';
let trainstudy = './train_study_level.csv';

let arr1 = [];
let arr2 = [];
let arr3 = [];

fs.createReadStream(sample)
.pipe(csv({}))
.on('data',(data) => arr1.push(data)).on('end', () => {
    let r1 = JSON.stringify(arr1,null, 2); 
    fs.writeFileSync('./sample_submission.json', r1 ,(err) => { 
        if (err){throw err;}
    });
});

fs.createReadStream(train)
.pipe(csv({}))
.on('data',(data) => arr2.push(data)).on('end', () => {
    let r2 = JSON.stringify(arr2,null, 2); 
    fs.writeFileSync('./train_image_level.json', r2 ,(err) => { 
        if (err){throw err;}
    });

});

fs.createReadStream(trainstudy)
.pipe(csv({}))
.on('data',(data) => arr3.push(data)).on('end', () => {
    let r3 = JSON.stringify(arr3,null, 2); 
    fs.writeFileSync('./train_study_level.json', r3 ,(err) => { 
        if (err){throw err;}
    });
});