require('dotenv').config()
const fs = require("fs")
const fastcsv = require("fast-csv")
const mongoose = require('mongoose')
const { db } = require('../models/itemModel')

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        let stream = fs.createReadStream("dataset.csv")
        let csvData = []
        let csvStream = fastcsv
            .parse()
            .on("data", function (data) {
                csvData.push({
                    url: data[0],
                    manual_tags: data[1],
                    abstract_note: data[2],
                    date: data[3],
                    date_added: data[4],
                    date_modified: data[5],
                    access_date: data[6],
                    key: data[7],
                    item_type: data[8],
                    publication_year: data[9],
                    author: data[10],
                    title: data[11],
                })
            })
            .on("end", function () {
                // remove the header row
                csvData.shift()

                const seedDB = async () => {
                    await db.models.Item.deleteMany({}) // clear out any values that may be there before adding the seed values
                    await db.models.Item.insertMany(csvData)
                        .then(data => {
                            console.log(data.length + " records inserted!");
                            process.exit(0)
                        })
                        .catch(err => {
                            console.error(err);
                            process.exit(1)
                        })
                }

                seedDB().then(() => {
                    mongoose.connection.close()
                })

            })

        stream.pipe(csvStream)
    })
    .catch(err => console.log(err))
