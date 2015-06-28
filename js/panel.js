/**
 * The control panel.
 */
var Panel = {
    init: function () {

        $('.panel').draggable();
        $('.accordion').accordion({
            collapsible: false,
        });
        $('.option_label').click(function () {
            $(this).prev().click();
        });
        $('#hide_instructions').click(function () {
            $('#instructions_panel').slideUp();
        });
        $('#play_panel').css({
            top: 5
        });
        $('#button2').attr('disabled', 'disabled');
    },

    getFinder: function () {
        var finder, selected_header, heuristic, allowDiagonal, biDirectional, dontCrossCorners, weight, trackRecursion, timeLimit;

        selected_header = $(
            '#algorithm_panel ' +
            '.ui-accordion-header[aria-selected=true]'
        ).attr('id');

        finder = new PF.BreadthFirstFinder({
            allowDiagonal: true,
            dontCrossCorners: true
        });


        return finder;
    }
};
