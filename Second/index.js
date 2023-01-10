const fs = require("fs")
const fsPromises = require("fs").promises
const path = require("path")

const fileOps = async () => {
    try {
        const data0 = await fsPromises.readFile(path.join(__dirname, "files", "readFrom.txt"), "utf8")
        console.log("data0:", data0)

        // fsPromises.unlink(path.join(__dirname, "files", "readFrom.txt"))
        
        fsPromises.writeFile(path.join(__dirname, "files", "promiseWrite.txt"), data0)

        const data1 = await fsPromises.readFile(path.join(__dirname, "files", "promiseWrite.txt"), "utf8")
        console.log("data1:", data1)

        fsPromises.appendFile(path.join(__dirname, "files", "promiseWrite.txt"), "\n\nNice to meet you.")

        const data2 = await fsPromises.readFile(path.join(__dirname, "files", "promiseWrite.txt"), "utf8")
        console.log("data2:", data2)

        fsPromises.rename(path.join(__dirname, "files", "promiseWrite.txt"), path.join(__dirname, "files", "promiseRename.txt"))

        const data3 = await fsPromises.readFile(path.join(__dirname, "files", "promiseRename.txt"), "utf8")
        console.log("data3:", data3)
    } catch (err) {
        console.error(err)
    }
}
fileOps()

// fs.readFile(path.join(__dirname, "files", "readFrom.txt"), "utf8", (err, data) => {
//     if (err) throw err
//     console.log(data)
//     console.log("Printed read data.[inside fs]")
// })
// console.log("Printed read data.[outside fs]")

// fs.writeFile(path.join(__dirname, "files", "writeAppend.txt"), "Writing to a new file.", (err) => {
//     if (err) throw err
//     console.log("Write completed successfully.")

//     fs.appendFile(path.join(__dirname, "files", "writeAppend.txt"), "\n\nAppending to the file we just wrote.", (err) => {
//         if (err) throw err
//         console.log("Append inside Write completed successfully.")

//         fs.rename(path.join(__dirname, "files", "writeAppend.txt"), path.join(__dirname, "files", "renamed.txt"), (err) => {
//             if (err) throw err
//             console.log("Remane inside Append inside Write completed successfully.")
//         })
//     })
// })

// fs.appendFile(path.join(__dirname, "files", "appenedTo.txt"), "\n\nYou just appended this text in this file using your Node.js code. Or, if this is the first time you are appending something to this file which was not created beofore, then you just created me and then appended this text in here.", (err) => {
//     if (err) throw err
//     console.log("Separate Append completed successfully.")
// })

process.on("uncaughtException", (err) => {
    console.log(`Uncaught ${err}`)
    process.exit(1)
})
