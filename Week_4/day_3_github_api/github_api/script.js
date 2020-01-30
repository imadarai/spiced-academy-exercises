console.log("Hello Beautiful!");

(function() {
    //////////////////DO NOT TOUCH /////////////////////////
    Handlebars.templates = Handlebars.templates || {};
    var templates = document.querySelectorAll('script[type="text/x-handlebars-template"]');
    Array.prototype.slice.call(templates).forEach(function(script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });
    //////////////////DO NOT TOUCH /////////////////////////

    let username;
    let password;
    let userToSearch;
    let baseUrl;
    let endpoint;
    let $usernameField = $('input[name="username"]');
    let $passwordField = $('input[name="password"]');

    $('button').on('click', function() {
        username = $usernameField.val();
        password = $passwordField.val();
        userToSearch = $('input[name="user-to-search"]').val();

        baseUrl = "https://api.github.com";
        endpoint = `/users/${userToSearch}/repos`;

        //////////////////////////////////////////////////
        //                                              //
        //          FIRST AJAX CALL FOR REPO            //
        //                                              //
        // ///////////////////////////////////////////////

        $.ajax({
            url: baseUrl + endpoint,
            headers: {
                Authorization: 'Basic ' + btoa(username + ":" + password)
            },
            success: function(response) {

                $('.full-result').html(Handlebars.templates.userId({response}));

                $('.handlebars').on('click', function(e) {
                    var repoLink = e.target.innerText;

                    console.log("I am clicking on: " , e.currentTarget);

                    //////////////////////////////////////////////////
                    //                                              //
                    //          SECOND AJAX CALL FOR REPO           //
                    //                                              //
                    // ///////////////////////////////////////////////

                    $.ajax ({
                        url: `https://api.github.com/repos/${repoLink}/commits`,
                        headers: {
                            Authorization: 'Basic ' + btoa(username + ":" + password)
                        },
                        success: function(commits) {
                            var onlyTen = commits.slice(0,10);
                            $(e.currentTarget).children(".repo-comments").html(Handlebars.templates.repoData({onlyTen}));
                        }
                    });
                });
            }
        });
    });

    //////////////////////////////////////////////////
    //                                              //
    //           LOCAL STORAGE SETUP                //
    //                                              //
    // ///////////////////////////////////////////////

    $usernameField.on('input', function(){
        localStorage.setItem('username', $usernameField.val());
    });
    $passwordField.on('input', function(){
        localStorage.setItem('pass', $passwordField.val());
    });

    try {
        $usernameField.val(localStorage.getItem("username"));
        $passwordField.val(localStorage.getItem("pass"));
    }
    catch (err){
        console.log("Error: ", err);
    }

}());
