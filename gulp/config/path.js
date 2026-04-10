import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        icons: `${buildFolder}/img/icons/`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files/`
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.*`,
        icons: `${srcFolder}/img/icons/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        css: `${srcFolder}/css/**/*.*`,
        fonts: `${srcFolder}/fonts/**/*.*`
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/img/**/*.*`,
        files: `${srcFolder}/files/**/*.*`,
        fonts: `${srcFolder}/fonts/**/*.*`,
        css: `${srcFolder}/css/**/*.*`,
        icons: `${srcFolder}/img/icons/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}