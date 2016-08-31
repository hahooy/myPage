'use strict';
/* ------------------------------------
Render data on the front end.
---------------------------------------- */


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


function renderMainContent(data) {
    var source   = $("#content-template").html();
    var template = Handlebars.compile(source);
    $("#main").append(template(data));
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


renderMainContent(resumeData);
// the stack part is too complicated for handlebars, better do it in JavaScript.
renderStack(resumeData.stack);
headerScrollControl();


$(window).on('load', function() {
    // Wait until all the images loaded before applying masonry to the grid.
    // Otherwise masonry gets confused because it doesn't know the heights of
    // those images.
    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
    });
});
