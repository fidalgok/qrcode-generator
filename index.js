
// http.createServer(function (req, res) {
//     fs.readFile(__dirname + req.url, function(err, data){
//         if(err){
//             res.writeHead(404);
//             res.end(JSON.stringify(err));
//             return;
//         }
//         res.writeHead(200);
//         res.end(data);
//     })
// })

const QRCode = require('qrcode')

QRCode.toFile('filename.png', 'text to be made into a qrcode',
    { type: 'png' }, function (err, url) {
        if (err) console.log(err);
        // fs.writeFile('BC Mail merge', url, function (err, data) {

        //     if (err) {
        //         return console.log(err)
        //     }
        //     console.log('success');
        // })
    }
)

