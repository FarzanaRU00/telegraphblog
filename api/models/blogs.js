const {init} = require("dbConfig.js");
const { resolve } = require("path");
const {ObjectId} = require("pg")

class Blogs {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.username = data.username;
        this.entry = data.entry;
        this.date = data.date;
    }


// get all blogs

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const blogsData = await db.query(`SELECT * FROM blogs;`)
                const blogs = blogsData.rows.map(d => new Blogs(d))
                resolve(blogs);
            } catch (err) {
                reject("Error retrieving blogs")
            }
        });
    }

// find a blog by it's id

    static findById(id) {
        return new Promise (async (resolve, reject) => {
            try {
                let blogsData = await db.query(`SELECT * FROM blogs WHERE id = $1;`, [ id ]);
                let blogs = new Blogs(blogsData.rows[0]);
                resolve (blogs);
            } catch (err) {
                reject('Blogs not found');
            }
        });
    }

// find a blog by the false name given 

    static findByName (id) {
        return new Promise (async (resolve, reject) => {
            try {
                let blogsData = await db.query(`SELECT * FROM blogs WHERE nameId = $1;`, [ id ]);
                const blogs = blogsData.rows.map(d => new Blogs(d))
                resolve (blogs);
            } catch (err) {
                reject('Error retrieving the blog\'s author');
            }
        });
    }

// create a blog post

    static create(title, author, content, year, month, day){
        return new Promise (async (resolve, reject) => {
            try {
                let blogsData = await db.query(`INSERT INTO blogs (title, author, content, year, month, day) VALUES ($1, $2) RETURNING *;`, [ title, author, content, year, month, day ]);
                let newBlogs = new Blogs(blogsData.rows[0]);
                resolve (newBlogs);
            } catch (err) {
                reject('Error creating blog');
            }
        });
    }

};

module.exports = Blogs;