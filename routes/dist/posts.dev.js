"use strict";

var express = require('express');

var router = express.Router();

var Post = require('../models/Post');

var API = require('call-of-duty-api')({
  platform: "battle"
});

var Match = require('../models/match');

require('dotenv/config');

var coddata = function coddata(player) {
  API.MWBattleData(player);
};

router.post('/cod/', function (req, res) {
  var pdata = {};
  console.log("req.body", req.body);
  API.login(process.env.EMAIL, process.env.PASSWORD).then(function (output) {
    console.log(output); // Players array,
    // map through array and create promise for each player and store it in an array
    // promises = req.body.map(player => API.MWBattleData(player))

    API.MWBattleData(req.body[0]).then(function (output1) {
      console.log(output1);
    }); // Pass all promises to Promise.all
    // Result will be an array of individual output of each promise

    Promise.all(promises).then(function (result) {
      // Loop through result, and assign the output to pdata
      result.forEach(function (output, index) {
        console.log(output); // index + 1 because starting index will be zero

        pdata["p".concat(index + 1)] = output;
      });
      res.json(pdata);
    });
  });
}); // });
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
// gets back all

router.get('/', function _callee(req, res) {
  var posts;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Post.find());

        case 3:
          posts = _context.sent;
          res.json(posts);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.json({
            message: _context.t0
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // submits post

router.post('/', function _callee2(req, res) {
  var post, savedPost;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          post = new Post({
            title: req.body.title,
            description: req.body.description
          });
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(post.save());

        case 4:
          savedPost = _context2.sent;
          res.json(savedPost);
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          res.json({
            message: _context2.t0
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
}); // specfic post

router.get('/:postId', function _callee3(req, res) {
  var post;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Post.findById(req.params.postId));

        case 3:
          post = _context3.sent;
          res.json(post);
          _context3.next = 10;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.json({
            message: _context3.t0
          });

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // Delete post

router["delete"]('/:postId', function _callee4(req, res) {
  var removedPost;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Post.remove({
            _id: req.params.postId
          }));

        case 3:
          removedPost = _context4.sent;
          res.json(removedPost);
          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          res.json({
            message: _context4.t0
          });

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // Update Post

router.patch('/:postId', function _callee5(req, res) {
  var updatedPost;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(Post.updateOne({
            _id: req.params.postId
          }, {
            $set: {
              title: req.body.title
            }
          }));

        case 3:
          updatedPost = _context5.sent;
          res.json(updatedPost);
          _context5.next = 10;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          res.json({
            message: _context5.t0
          });

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
module.exports = router; // API.MWBattleData('Ghondie#1663').then(data => {
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