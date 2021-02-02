const AdminBro = require('admin-bro');
const { Organization, City } = require('../app/models');

const adminBro = new AdminBro({
    rootPath: '/admin',
    resources: [Organization, City],
});

module.exports = adminBro;
