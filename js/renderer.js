'use strict';
/* ------------------------------------
Render data on the front end.
---------------------------------------- */


function renderAbout() {
    var source   = $("#about-template").html();
    var template = Handlebars.compile(source);
    $("#about").append(template(resumeData));
}


function renderStack(stack) {
    var categories = stack["categories"];
    var proficiencies = stack["proficiencies"];
    var skills = stack["skills"];
    var HTMLRow = "<tr></tr>";
    var HTMLRowHeadC = "<th class='text-center'></th>";  // Text is center in this header.
    var HTMLRowHeadR = "<th></th>";  // Text is right adjust in this header.
    var HTMLRowCell = "<td class='text-center'></td>";
    var HTMLDivBox = '<div class="block"></div>'
    var $cells = {};  // map each cell jquery object to a category and a proficiency, e.g. $cells['language']['basic understanding'] = $cell

    // There is no header for the first column.
    $("#stack-table thead tr").append(HTMLRowHeadC);
    // Append a header for each column.
    proficiencies.forEach(function(prof) {
        var $colHead = $(HTMLRowHeadC);
        $colHead.text(prof);
        $("#stack-table thead tr").append($colHead);
    });

    categories.forEach(function(cate) {
        // Append a row to the table for each category, append a header for each row.
        var $row = $(HTMLRow);
        var $rowHead = $(HTMLRowHeadR);
        $rowHead.text(cate);
        $row.append($rowHead);

        $("#stack-table tbody").append($row);
        proficiencies.forEach(function(prof) {
            // Append a cell to the newly created row for each proficency and save a reference to the cell for later use.
            var $cell = $(HTMLRowCell);
            $row.append($cell);
            if (cate in $cells) {
                $cells[cate][prof] = $cell;
            } else {
                $cells[cate] = {};
                $cells[cate][prof] = $cell;
            }
        });
    });

    // Finally, put technologies in cells.
    skills.forEach(function(skill) {
        skill['technologies'].forEach(function(tech) {
            var $box = $(HTMLDivBox);
            $box.text(tech);
            $cells[skill['category']][skill['proficiency']].append($box);
        });
    });

}


function renderProjects(projects) {
    var HTMLProjectRow = '<div class="row"></div>';
    var HTMLProjectCol = '<div class="col-xs-12 col-sm-6 text-center project-entry"></div>';
    var HTMLProjectLink = '<a class="image-container" href="%link%"><img class="projectImg" src="%data%"></a>';
    var ctr = 0;
    var $row = $(HTMLProjectRow);
    $('#project-container').append($row);
    projects.forEach(function(project) {
        if (ctr >= 2) {
            ctr = 0;
            $row = $(HTMLProjectRow);
            $('#project-container').append($row);
        }
        var $col = $(HTMLProjectCol);
        $col.append('<h4>' + project.title + '</h4>');
        $col.append('<p>' + project.description + '</p>');
        $col.append(HTMLProjectLink.replace("%link%", project.url).
                    replace("%data%", project.image));
        $row.append($col);
        ctr += 1;
    });
}


function renderSchools() {
    var source   = $("#school-template").html();
    var template = Handlebars.compile(source);
    $("#school-container").append(template(resumeData));
}


function renderWork() {
    var source   = $("#work-template").html();
    var template = Handlebars.compile(source);
    $("#work-container").append(template(resumeData));
}


function renderContact() {
    var source = $("#contact-template").html();
    var template = Handlebars.compile(source);
    $("#contact").append(template(resumeData));
}


// navbar disappears when scroll down and shows up when scroll up
function headerScrollControl() {
    var isScrolled = false,
        lastScrollTop = 0,
        delta = 5,
        navbarHeight = $("#heading-wrapper").outerHeight();

    $(window).scroll(function() {
        isScrolled = true;
    });

    window.setInterval(function() {
        if (isScrolled) {
            changeNav();
        } else {
            return;
        }
    }, 500);

    function changeNav() {
        var currentScrollTop = $(window).scrollTop(),
            $navbar = $("#heading-wrapper");

        // scroll down
        if (currentScrollTop - lastScrollTop > delta &&
            currentScrollTop > navbarHeight) {
            $navbar.addClass("trans");
        }
        // scroll up
        if (currentScrollTop < lastScrollTop && lastScrollTop - currentScrollTop > delta) {
            $navbar.removeClass("trans");
        }
        // update the scrollTop value of the element
        lastScrollTop = currentScrollTop;
    };
};


function renderAll() {
    renderAbout();
    renderStack(resumeData.stack);
    renderProjects(resumeData.projects);
    renderWork();
    renderSchools();
    renderContact();
    headerScrollControl();
}

renderAll();
