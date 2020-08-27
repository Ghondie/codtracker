    // const pdata = {}
    // console.log("req.body", req.body)
    // API.login(process.env.EMAIL, process.env.PASSWORD).then((output) => {
    //     console.log(output)
    //     // Players array,

    //     // map through array and create promise for each player and store it in an array
    //     // promises = req.body.map(player => API.MWBattleData(player))
    //     API.MWBattleData(req.body[0]).then((output1) => {
    //         console.log(output1)
    //     });
    //     // Pass all promises to Promise.all
    //     // Result will be an array of individual output of each promise
    //     Promise.all(promises)
    //         .then(result => {
    //             // Loop through result, and assign the output to pdata
    //             result.forEach((output, index) => {
    //                 console.log(output);
    //                 // index + 1 because starting index will be zero
    //                 pdata[`p${index + 1}`] = output

    //             })
    //             res.json(pdata);
    //         })






    // });


// router.post('/cod', (req, res) => {
//     // console.log(req.body)
//     API.login(process.env.EMAIL, process.env.PASSWORD).then((op) => {
//         const pdata = {}
//         req.on('data', chunk => {
//             data.push(chunk)
//         })
//         index = 0;
//         var MyString = "";

//         for (var key in req.body) {
//             if (req.body.hasOwnProperty(key)) {
//                 item = req.body[key];
//                 API.MWBattleData(item).then(data => {
//                     myString.
//                     pData = data;
//                     index++;
//                 }).catch(err => {
//                     console.log(err);
//                 });
//             }
//         }
//         promises = req.body.map(player => API.MWBattleData(player))
//         var myData = Promise.all(promises)
//             .then(result => {
//                 // Loop through result, and assign the output to pdata
//                 result.forEach((output, index) => {
//                     console.log(output);
//                     // index + 1 because starting index will be zero
//                     pdata[`p${index + 1}`] = output

//                 })
//             })

//         res.json(pdata);
//     })
// })

// router.post('/cod', (req, res) => {

//     const pdata = {}
//     // console.log(req.body)
//     API.login(process.env.EMAIL, process.env.PASSWORD).then((op) => {

//         let data = []
//         req.on('data', chunk => {
//             data.push(chunk)
//         })


//         const playerData = [2];
//         index = 0;

//         for (var key in req.body) {
//             if (req.body.hasOwnProperty(key)) {
//                 item = req.body[key];
//                 console.log("Item: " + item)
//                 API.MWBattleData(item).then(data => {
//                     console.log(data); // see output
//                     playerData[index] = data;
//                     index++;
//                 }).catch(err => {
//                     console.log(err);
//                 });
//             }
//         }

//         console.log(playerData[0]);
//         console.log(playerData[1]);
//         res.json(playerData.data);

//     })
// })
// router.post('/cod', (req, res) => {
//     const pdata = {}
//     //     // console.log(req.body)
//     API.login(process.env.EMAIL, process.env.PASSWORD).then((op) => {

//         // req.body NEEDS TO BE AN ARRAY OF SCREEN NAMES!!!!!!
//         // players = [
//         //     "Ghondie#1663",
//         //     "Expozur#11984",
//         //     "Fragthat#1458"
//         // ]
//         // map through array and create promise for each player and store it in an array
//         promises = req.body.map(player => {
//             console.log(player)
//             return API.MWBattleData(player)

//         })

//         // Pass all promises to Promise.all
//         // Result will be an array of individual output of each promise
//         Promise.allSettled(promises)
//             .then(result => {
//                 console.log(promises)
//                 // Loop through result, and assign the output to pdata
//                 result.forEach((output, index) => {
//                     // index + 1 because starting index will be zero
//                     pdata[`p${index +1 }`] = output;
//                     console.log(output, index);
//                     res.json(pdata)
//                 });

//             });

//     })
// })

// need to log to mongo 

// Check if player id exisit in db 

// Mongo db job sceduling ever $hrs
//Schedule triggers
//  when updating use UPDATE/post





// API.MWBattleData('Ghondie#1663').then(data => {
//     console.log(data);
//     console.log(err);
// });
// API.MWBattleData('MG2020#1853').then((output1) => {
//     pdata.p1 = output1
//     API.MWBattleData('expozur#11984').then((output2) => {
//         pdata.p2 = output2
//         API.MWBattleData('Ghondie#1663').then((output3) => {
//             pdata.p3 = output3
//             API.MWBattleData('Ghondie#1663').then((output4) => {
//                 pdata.p4 = output4
//                 res.json(pdata);
//             }).catch((err) => {
//                 console.log(err);
//             });
//         }).catch((err) => {
//             console.log(err);
//         });
//     }).catch((err) => {
//         console.log(err);
//     });
// }).catch((err) => {
//     console.log(err);
// });       








// working loop 


// API.MWBattleData('MG2020#1853').then((output1) => {
//     pdata.p1 = output1
//     pdata.p1.player = "MG2020#1853"
//     API.MWBattleData('expozur#11984').then((output2) => {
//         pdata.p2 = output2
//         pdata.p2.player = "expozur#11984"
//         API.MWBattleData('Ghondie#1663').then((output3) => {
//             pdata.p3 = output3
//             pdata.p3.player = "Ghondie#1663"
//             API.MWBattleData('fragthat#1458').then((output4) => {
//                 pdata.p4 = output4
//                 pdata.p4.player = "fragthat#1458"

//                 //prep loop for mongodb

//                 const coddata = Object.values(pdata).map(obj => {
//                     const brall = obj.br_all
//                     return {
//                         player: obj.player,
//                         start_kills: brall.kills,
//                         start_deaths: brall.deaths,
//                         start_downs: brall.downs,
//                         start_revives: brall.revives,
//                     }

//                 })
//                 const mongoobj = {
//                     players: coddata,
//                     expiration: new Date()
//                 }
//                 Match.create(mongoobj)
//                 res.json(coddata);
//             }).catch((err) => {
//                 console.log(err);
//             });
//         }).catch((err) => {
//             console.log(err);
//         });
//     }).catch((err) => {
//         console.log(err);
//     });
// }).catch((err) => {
//     console.log(err);
// });








 // return {
        //     player: obj.username,
        //     kills: brall.kills,
        //     deaths: brall.deaths,
        //     downs: brall.downs,
        //     revives: brall.revives,
        // }









