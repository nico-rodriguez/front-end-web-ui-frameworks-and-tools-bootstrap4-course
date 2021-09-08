module.exports = function() {
  return {
    foo: {
      dest: "dist",
      src: ["contactus.html", "aboutus.html", "index.html"]
    },
    options: {
      flow: {
        steps: {
          css: ["cssmin"],
          js: ["uglify"]
        },
        post: {
          css: [{
            name: "cssmin",
            createConfig: function (context, block) {
              let generated = context.options.generated;
              generated.options = {
                keepSpecialComments: 0, rebase: false
              };
            }
          }]
        }
      }
    }
  }
}