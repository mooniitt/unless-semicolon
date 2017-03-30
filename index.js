const fs = require("fs")
const path = require("path")
let dir_path = ''

fs.readFile("./cfg.json",{encoding:"utf-8"},(err,data)=>{
	if(err)throw err
	console.log(`${data}`)
	let config = JSON.parse(data)
	// console.log(config.dir_path)
	fs.readdir(config.dir_path,(err,files)=>{
		if(err){
			console.log(err)
			return
		}
		console.log(files)
		let f = files.filter((d)=>{
			return path.extname(d) === ".js"
		})
		console.log(f)
	})
})

// fs.readFile("./test.js",encoding,(err,data)=>{
// 	if(err)throw err
// 	console.log(data)
// 	var data = data.replace(/\;/mg,"\n")
// 	fs.writeFile("./test-backup.js",data)
// })
