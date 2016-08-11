// show brewery name and info

function renderBrew( brew ) {
  // var $id        = $('<li>').text(brew.id)
  var $container  = $('#breweries');
  var $brewery    = $('<div class="brew">');
  var $save       = $('<button class="save">').text("Save Brewery")
// name of brewery will be a link to website
  var $name       = $('<a target="_blank" href="' + brew.website + '">')
      $name.text( brew.name );

  var $descript   = $('<p>').text(brew.description)

// if image is found than get the large image of the brewery and append the image
    if (brew.images){
    var $img       = $('<img>').attr('src', brew.images.large)
      }

    $brewery.append( $name, $img, $descript, $save );
    $container.append( $brewery );
  }

// get breweries by name and established date
function getBrews(event) {
  event.preventDefault()
  var $name     = $('#name').val()
  var $date     = $('#date').val()

  $.getJSON('/brews', {name:$name, established:$date}).done(function( brews ) {

      console.log(brews)
      console.log($date)
      brews.data.forEach(function( brew ) {
      renderBrew( brew );
      })
      saveBrews();
    })
  }
// on form class "beer" on submit get all brews from function getBrews
  $(function() {
    var $form     = $('.beer')
  $form.submit(getBrews);
  })

// save the name and website of the brewery
function saveBrews(e){
  $('.save').on('click',function(e){

// the name, website, description is in the parent and are children of each other
// using jquery the .eq accesses the name = innerText and website = host. See console.log
// ajax call to post the saved data
    let $siblings = $(event.target).parent().children();
    console.log($siblings)
    let data ={
      name: $siblings.eq(0)[0].innerText,
      website: $siblings.eq(0)[0].host
      }
    console.log(data)
    $.ajax({
      url: '/savebrew',
      method: 'post',
      data: data
    })
  })
}

function showSaveBrews(){
  var $container = $('#container')

   $.ajax({
      url: '/savebrew',
      method: 'get'
        }).done(function(brewlist) {
      console.log(brewlist)
      brewlist.forEach(function(brew){
        console.log(brew.id)
        var $delete     =$('<button class="delete">').text("Delete Brewery")
        var $oneresult=$('<div>')
        var $pi= $('<p>').text(brew.name +' '+brew.website).val(brew.id)
        console.log(brew.name, brew.website)
        $oneresult.append($pi).append($delete)

        $('body').append($oneresult)
        $delete.click(deleteBrews)
      })
  })

}

showSaveBrews()

function deleteBrews(){
  var $div= $(this).parent()
  var id = $(this).siblings().eq(0).val()
// var id
  $.ajax({
    url: '/savebrew/' + id,
    method: 'delete'
  }).done(function(){
    // $(this).parent().empty();
    $div.empty()

  })
}