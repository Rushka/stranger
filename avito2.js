var RenderUrlsToFile, system, url_string_for_array;
var arrayOfUrls = new Array();

system = require("system");

RenderUrlsToFile = function(urls, callbackPerUrl, callbackFinal) {
  var getFilename, next, page, retrieve, urlIndex, webpage, link_name, sex;

  var fs = {};
  fs = require('fs');

  urlIndex = 0;
  webpage = require("webpage");
  page = null;
  // getFilename = function() {
  //   return "parsed/" + urlIndex + ".png";
  // };
  next = function(status, url, file) {
    page.close();
    callbackPerUrl(status, url, file);
    return retrieve();
  };

  retrieve = function() {
    var url;
    if (urls.length > 0) {
      url = urls.shift();
      urlIndex++;
      page = webpage.create();
      page.viewportSize = {
        width: 800,
        height: 600
      };
      // page.settings.userAgent = "Phantom.js bot";
      return page.open("http://" + url, function(status) {
        var file;
        // file = getFilename();
        if (status === "success") {
          return window.setTimeout((function() {
            // page.render(file);

            var js = page.evaluate(function () {
                return document;
              });

            fs.write('your_file_path.html', js.all[0].outerHTML, 'w');

            return next(status, url, file);
          }), 100);
        } else {
          return next(status, url, file);
        }
      });

    } else {
      return callbackFinal();
    }
  };
  return retrieve();
};

if (system.args.length > 1) {
arrayOfUrls = Array.prototype.slice.call(system.args, 1);
} else {

  //

  url_string_for_array = "http://www.avito.ru/moskva/kvartiry/prodam/1-komnatnye&p=1";

  for(var k=2; k<10; k++)
    {
      url_string_for_array += ",http://www.avito.ru/moskva/kvartiry/prodam/1-komnatnye&p="+k;
    }

    arrayOfUrls = url_string_for_array.split(',');
  }

  //

RenderUrlsToFile(arrayOfUrls, (function(status, url, file) {
  if (status !== "success") {
    return console.log("Unable to render '" + url + "'");
  } else {
    return console.log("Rendered '" + url + "'");
  }
  }), function() {
  return phantom.exit();
});