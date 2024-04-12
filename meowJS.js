$(function() {

    // Make elements draggable
    $(".draggableItem").draggable({
        revert: "invalid",
        cursor: "move",
        zIndex: 1000
    });

    // Make dropZone droppable
    $(".dropZone").droppable({
        accept: "#draggableContainer > div",
        drop: function(event, ui) {
            ui.draggable.remove();
        }
    });

    // Make element resizable
    $("#resizable").resizable();

    // Make element(s) selectable
    $("#selectable").selectable();

    // Accordian properties
    $('#accordian').accordion({
        active: 1,
        collapsible: true,
        activate: function(event, ui) {
        console.log(event);
        console.log(ui);
        }
    });

    // Define date selection box properties.
    $('#dateSelector').datepicker({
        changeMonth: true,
        changeYear: true,
        minDate: new Date(2018, 1-1, 1),
        maxDate: new Date(2028, 12-1, 31)
        });
    
    // List for autocomplete options
    var catClasses = [
        'Siamese cat',
        'British Shorthair',
        'Maine Coon',
        'Persian cat',
        'Scottish Fold',
        'Bombay cat',
        'Russian Blue',
        'Munchkin cat',
        'American Bobtail',
        'Chartreux',
        'Ragamuffin',
        'Himalayan cat'
    ];
    
    // Autocomplete on search id.
    $('#search').autocomplete({
        source: catClasses
    });

    // Define slider properties
    $("#slider").slider({
        min: 0,
        max: 100,
        value: 100,
    });

    // Hide
    $('#btnHide').click(function() {
        $('#showHideArea').hide();
    });

    // Show
    $('#btnShow').click(function(){
        $('#showHideArea').show();
    });

    // Fade Out
    $('#btnFadeOut').click(function(){
        $('#fadeArea').fadeOut(1000);
    });

    // Fade In
    $('#btnFadeIn').click(function(){
        $('#fadeArea').fadeIn(1000);
    });

    // Explode
    $('#btnExplode').click(function(){
        $('#explodeArea').effect('explode', { pieces: 24}, 1500);
    });

    // Reset Explode
    $('#btnExplodeReset').click(function() {
        $('#explodeArea').show();
    });

    // Color change
    $('#btnColorChange').click(function() {
        $('#colorChangeArea').animate({
            'background-color': '#3386cb'
            }); 
    });

    // Reset color
    $('#btnOgColor').click(function() {
        $('#colorChangeArea').animate({
            'background-color': 'black'
        }); 
    });
});

