module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      files: ["./index.html", "./style.css"],
      options: {
        livereload: true,
      },
    },
    connect: {
      server: {
        options: {
          livereload: true,
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");

  grunt.registerTask("default", ["connect:server", "watch"]);
};
