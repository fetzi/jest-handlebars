module.exports = {
    process(src, filename) {
        return {
            code: `
                const Handlebars = require('handlebars');
                module.exports = Handlebars.compile(\`${src}\`);
            `
        };
    },
};
