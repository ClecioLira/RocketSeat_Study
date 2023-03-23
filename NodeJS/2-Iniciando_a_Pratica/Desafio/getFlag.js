function getFlag(name) {
    const index = process.argv.indexOf(name) + 1
    return process.argv[index]
}

module.exports = getFlag