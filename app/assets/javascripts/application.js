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

// show brewery name info
// function renderBrew( brew ) {
//   var $container = $('#breweries');
//   var $brewery    = $('<li class="brew">');
//   var $name      = $('<a target="_blank" href="' + brew.website + '">')
//   $name.text( brew.name );

//   var $des       = $('<li>').text(brew.description)
//   var $img       = $('<img>').attr('src', brew.images.large)
//   var $save      =$('<button class="save">').text("Save Brewery")

//   $brewery.append( $name );
//   $brewery.append($img);
//   $brewery.append($des);
//   $brewery.append($save);
//   $container.append( $brewery );
// }

// // get breweries by name and established date
// function getBrews(event) {
//   event.preventDefault()
//   var $name    = $('#name').val()
//   var $date    = $('#date').val()
//   // console.log($name)
//   $.getJSON('/brews', {name:$name, established:$date}).done(function( brews ) {

//     console.log(brews)
//     console.log($date)
//     brews.data.forEach(function( brew ) {
//       renderBrew( brew );
//     })
//     saveBrews();
//   })
// }

// $(function() {
//   var $form     = $('form')
//   $form.submit(getBrews);

// })

// function saveBrews(e){
//   $('.save').on('click',function(e){

//     console.log('here')
//     let $siblings = $(event.target).parent().children();
//     console.log($siblings)
//     let data ={
//       name: $siblings.eq(0)[0].innerText

//     }
//     console.log(data)
//     console.log(e)
//     $.ajax({
//       url: '/brews',
//       method: 'post',
//       data: data
//     })
//   })
// }

// function showSaveBrews(e){
//   var $name    = $('#name').val()
//   $.get('/brews',{name:$name}).done(function(brews){
//     brews.results.forEach(function(brew){
//       renderBrew(brew)
//     })
//   })
// }
