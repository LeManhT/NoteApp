// get home page

exports.homePage = async (req, res) => {
    const locals = {
        title: "NodeJs Notes",
        description: "Free NodeJS Notes App.",
    }
    res.render('index', {
        locals,
        layout: '../views/layouts/front-page'
    });
}
exports.getAbout = async (req, res) => {
    const locals = {
        title: 'About - NodeJS Note',
        description: "Note App use NodeJS"
    }

    res.render('about', locals);
}