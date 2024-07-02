/**
 * This is the default settings file provided by Node-RED.
 *
 * It can contain any valid JavaScript code that will get run when Node-RED
 * is started.
 *
 * Lines that start with // are commented out.
 * Each entry should be separated from the entries above and below by a comma ','
 *
 * For more information about individual settings, refer to the documentation:
 *    https://nodered.org/docs/user-guide/runtime/configuration
 **/

module.exports = {
  // the tcp port that the Node-RED web server is listening on
  uiPort: process.env.PORT || 1880,

  // Customising the editor
  editorTheme: {
    page: {
      title: "VFlow",
      favicon: "/data/favicon.ico",
      // css: "/absolute/path/to/custom/css/file",
      // scripts: ["/absolute/path/to/custom/script/file", "/another/script/file"],
    },
    header: {
      title: "VFlow",
      image: "/data/logo.png", // or null to remove image
      url: "http://www.vioneta.com", // optional url to make the header text/image a link to this url
    },
    deployButton: {
      type: "simple",
      label: "run",
      icon: "/data/run.png", // or null to remove image
    },
    menu: {
      // Hide unwanted menu items by id. see packages/node_modules/@node-red/editor-client/src/js/red.js:loadEditor for complete list
      "menu-item-import-library": false,
      "menu-item-export-library": false,
      "menu-item-keyboard-shortcuts": false,
      "menu-item-help": {
        label: "Alternative Help Link Text",
        url: "http://www.vioneta.com",
      },
    },
    tours: false, // disable the Welcome Tour for new users
    userMenu: false, // Hide the user-menu even if adminAuth is enabled
    // login: {
    //   image: "/absolute/path/to/login/page/big/image", // a 256x256 image
    // },
    // logout: {
    //   redirect: "http://example.com",
    // },
    palette: {
      editable: true, // *Deprecated* - use externalModules.palette.allowInstall instead
      catalogues: [
        // Alternative palette manager catalogues
        "https://catalogue.nodered.org/catalogue.json",
      ],
      // theme: [
      //   // Override node colours - rules test against category/type by RegExp.
      //   { category: ".*", type: ".*", color: "#f0f" },
      // ],
    },
    projects: {
      enabled: false, // Enable the projects feature
    },
    theme: "midnight-red", // Select a color theme for the editor. See https://github.com/node-red-contrib-themes/theme-collection for a collection of themes to choose from
    codeEditor: {
      lib: "ace", // Select the text editor component used by the editor. Defaults to "ace", but can be set to "ace" or "monaco"
      options: {
        // The following only apply if the editor is set to "monaco"
        theme: "vs", // Select a color theme for the text editor component. Must match the file name of a theme in packages/node_modules/@node-red/editor-client/src/vendor/monaco/dist/theme
      },
    },
    mermaid: {
      theme: "dark", // Select a color theme for the Mermaid diagramming and charting tool. Must match the name of a theme in https://mermaid.js.org/config/theming.html#available-themes
    },
  },
};
