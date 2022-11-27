require("dotenv").config()

const mongoose = require("mongoose")
const request = require("supertest")

const app = require("../server")

/* Connecting to the database before each test. */
beforeEach(async () => {
    server = app.listen(22)
    await mongoose.connect(process.env.MONGO_URI)
})

/* Closing database connection after each test. */
afterEach(async () => {
    await mongoose.connection.close();
    server.close()
})


describe("GET /api/items", () => {
    it("should return all items", async () => {
        const res = await request(app).get("/api/items/")
        expect(res.statusCode).toBe(200)
        expect(res.body.length).toBeGreaterThan(0)
    })
})

describe("GET /api/items/:itemId", () => {
    it("should return one item", async () => {
        // THIS VALUE MUST BE CHANGED EACH TIME THE DATABASE IS SEEDED - REPLACE THIS VALUE
        const validMongoId = '638027e9d9a73469e090435b'

        const res = await request(app).get(`/api/items/${validMongoId}`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual(
            expect.objectContaining({
                url: expect.any(String),
                manual_tags: expect.any(String),
                abstract_note: expect.any(String),
                date: expect.any(String),
                date_added: expect.any(String),
                date_modified: expect.any(String),
                access_date: expect.any(String),
                key: expect.any(String),
                item_type: expect.any(String),
                publication_year: expect.any(String),
                author: expect.any(String),
                title: expect.any(String),
            })
        )
    })

    it("should return error if ObjectId is invalid", async () => {
        const res = await request(app).get("/api/items/bbb")
        expect(res.statusCode).toBe(400)
    })

    it("should return error if ObjectId is valid but no item is found", async () => {
        const res = await request(app).get("/api/items/637e95dda33830492365af1a")
        expect(res.statusCode).toBe(404)
    })
})