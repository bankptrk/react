// import {Bar} from 'react-chartjs-2';
// import {train} from './count';
// var study = train;
// var sum0 =[0,0,0,0];
// var sum1 =[0,0,0,0];
// var sum=0;
// for(var i=0;i<study.length;i++){
//     sum++;
// }
// for(var i=0;i<study.NegativeForPneumonia.length;i++){
//     if(study.NegativeForPneumonia[i]===0){
//         sum0[0]+=1;
//     }else{
//         sum1[0]+=1;
//     }
// }
// for(var i=0;i<study.TypicalAppearance.length;i++){
//     if(study.TypicalAppearance[i]===0){
//         sum0[1]+=1;
//     }else{
//         sum1[1]+=1;
//     }
// }
// for(var i=0;i<study.IndeterminateAppearance.length;i++){
//     if(study.IndeterminateAppearance[i]===0){
//         sum0[2]+=1;
//     }else{
//         sum1[2]+=1;
//     }
// }
// for(var i=0;i<study.AtypicalAppearance.length;i++){
//     if(study.AtypicalAppearance[i]===0){
//         sum0[3]+=1;
//     }else{
//         sum1[3]+=1;
//     }
// }
// const Config1 = {
//     type: 'bar', //ประเภท
//     labels: [0,1],
//     datasets: [
//         {
//             label: 'Negative for Pneumonia',
//             data: [sum0[0],sum1[0]],
//             backgroundColor: 'rgba(70, 130, 180, 1)',
//             borderWidth: 1
//         }
//     ], //ข้อมูล
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     },
// };
//   const Config2 = {
//     type: 'bar', //ประเภท
//     labels: [0,1],
//     datasets: [
//         {
//             label: 'Typical Appearance',
//             data: [sum0[1],sum1[1]],
//             backgroundColor: 'rgba(70, 130, 180, 1)',
//             borderWidth: 1
//           }
//     ], //ข้อมูล
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     },
//   };
//   const Config3 = {
//     type: 'bar', //ประเภท
//     labels: [0,1],
//     datasets: [
//         {
//             label: 'Indeterminate Appearance',
//             data: [sum0[2],sum1[2]],
//             backgroundColor: 'rgba(70, 130, 180, 1)',
//             borderWidth: 1
//           }
//     ], //ข้อมูล
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     },
//   };
//   const Config4 = {
//     type: 'bar', //ประเภท
//     labels: [0,1],
//     datasets: [
//         {
//             label: 'Atypical Appearance',
//             data: [sum0[3],sum1[3]],
//             backgroundColor: 'rgba(70, 130, 180, 1)',
//             borderWidth: 1
//           }
//     ], //ข้อมูล
//     options: {
//         scales: {
//             y:{
//                 beginAtZero: true
//             }
//         }
//     },
// };
// export function Train1(){
//     return(
//         <Bar data ={Config1}/>
//     );
// }
// export function Train2(){
//     return(
//         <Bar data ={Config2}/>
//     );
// }
// export function Train3(){
//     return(
//         <Bar data ={Config3}/>
//     );
// }
// export function Train4(){
//     return(
//         <Bar data ={Config4}/>
//     );
// }
