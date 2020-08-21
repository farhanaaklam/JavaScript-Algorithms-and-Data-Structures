/* Many content management sites (CMS) have the titles of a post added to part of the URL for simple
bookmarking purposes. For example, if you write a Medium post titled "Stop Using Reduce", it's likely
the URL would have some form of the title string in it (".../stop-using-reduce").  */

// Only change code below this line
function urlSlug(title) {

    return title.toLowerCase().trim().split(/\s+/).join("-");
    
    }
    // Only change code above this line
    
 //urlSlug(" Winter Is   Coming");