export const copy = () => {
    // Копируем статические файлы
    app.gulp.src(app.path.src.files)
        .pipe(app.gulp.dest(app.path.build.files));
    
    // Копируем CSS
    app.gulp.src(app.path.src.css)
        .pipe(app.gulp.dest(app.path.build.css));
    
    // Копируем шрифты
    return app.gulp.src(app.path.src.fonts)
        .pipe(app.gulp.dest(app.path.build.fonts));
}