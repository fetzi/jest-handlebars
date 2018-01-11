module.exports = {
    process(src, filename) {
        return `
            const Handlebars = require('handlebars');
            module.exports = Handlebars.compile(\`${src}\`);
        `;
    },
};
