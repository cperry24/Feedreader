//$() will not run tests until DOM is ready
$(function() {
    //RSS Feeds test
    describe('RSS Feeds', function() {
        //Check that the allFeeds variable is defined, and not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        //Loop through allFeeds array and check that the URL is defined within it
        it('URL defined', function() {
            allFeeds.forEach(function(myURL) {
               expect(myURL.url).toBeDefined();
               expect(myURL.url).not.toBe('');
            });
        });
    });


    
    //Menu test suite
    describe('The menu', function() {
        //Store reference to document.body element selector
        var feedBody = document.body;
        
        
        
        //Test if the menu is hidden by default
        it('hidden by default', function() {
            expect(feedBody.className).toBe('menu-hidden');
        });
        
        
        //Check if the menu appears on click
        it('changes to visible', function() {
            $('a.menu-icon-link').trigger('click');
            expect(document.classList).not.toBe('menu-hidden');
        });
        
        //Check if the menu hides on click
        it('changes to hidden', function() {
            $('a.menu-icon-link').trigger('click');
            expect(feedBody.className).toBe('menu-hidden');
        });
        
    });

    //Inital Entries test suite -- Run beforeEach function each time to check if content has been loaded
    describe('Initial Entries', function() {
            beforeEach(function(done){
                loadFeed(0, function() {
                    done();
                });
            });
        
         
        //Test if .entry exists within the .feed container
        it('has entry', function() {
            var feed = $('.feed .entry');
           expect(feed).toBeGreaterThan('');
        });
    });


    
    //New Feed selection test suite
    describe('New Feed Selection', function() {
        
        //Test that the content has been loaded because of Async 
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        
        //If content has changed, expect the feed list to not be empty
       it('has been loaded', function() {
           expect('feed-list').not.toBe('');
       }); 
    });
    
    
   /* describe('Error handling', function() {
        if (typeof var == 'undefined') {
            expect(var).tobe(false);
        }
    });*/
    
}());
