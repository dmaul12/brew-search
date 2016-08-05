// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
function renderBrew( brew ) {
  var $container = $('#breweries');
  var $brewery    = $('<li class="brew">');
  var $name      = $('<a target="_blank" href="' + brew.website + '">')
  $name.text( brew.name );

  var $des       = $('<li>').text(brew.description)
  var $img       = $('<img>').attr('src', brew.images.large)
  var $save      =$('<button class="save">').text("Save Brewery")

  $brewery.append( $name );
  $brewery.append($img);
  $brewery.append($des);
  $brewery.append($save);
  $container.append( $brewery );
}

// the saveRecipes have to be called right after get
function getBrews(event) {
  event.preventDefault()
  var $name    = $('#name').val()
  console.log($name)
  $.getJSON('/brews',{name:$name}).done(function( brews ) {
    console.log(brews)
    brews.data.forEach(function( brew ) {
      renderBrew( brew );
    })
    saveBrews();
  })
}

$(function() {
  var $form     = $('form')
  $form.submit(getBrews);



})
// Mike W & Cyrus helped
// function saveBrews(e){
//   $('.save').on('click',function(e){

//     console.log('here')
//     let $siblings = $(event.target).parent().children();
//     console.log($siblings.eq(0))
//     console.log($siblings.eq(0)[0].innerHTML)
//     let data ={
//       title: $siblings.eq(0)[0].innerText
//     }
//     console.log(data)
//     $.ajax({
//       url: '/recipes',
//       method: 'post',
//       data: data
//     })
//   })
// }

// function showSaveBrews(e){
//   var $items    = $('#items').val()
//   $.get('/recipes',{title:$title}).done(function(recipes){
//     recipes.results.forEach(function(recipe){
//       renderRecipe(recipe)
//     })
//   })
// }
