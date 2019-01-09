const execa = require('execa');

module.exports = async (path) => {
    const authorDateFormat = '%ad';
    const date = await execa.stdout('git', ['log', '--max-count=1', `--format="${authorDateFormat}"`, '--', path]);

    return new Date(date).toISOString();
};
