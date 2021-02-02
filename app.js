const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require("./app/models");
const routes = require('./routes');
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express");
const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroSequelize = require('@admin-bro/sequelize');

AdminBro.registerAdapter(AdminBroSequelize);
const adminBro = require('./admin');

db.sequelize.sync();

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use('/api', routes);

const router = AdminBroExpress.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)

///////

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "doniraj.hr API Swagger Docs",
            version: "0.1.0",
            description:
                "This is a simple CRUD API application made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "doniraj.hr",
                url: "https://doniraj.hr",
                email: "kontakt@doniraj.hr",
            },
        },
        servers: [
            {
                url: "http://localhost:3000/",
            },
        ],
    },
    apis: ["./routes/*/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
);

////////

app.listen(process.env.PORT || 3000, () => {
    console.log('App running ...')
})

