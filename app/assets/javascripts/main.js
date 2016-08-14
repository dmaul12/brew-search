// show brewery name and info

function renderBrew( brew ) {
  // var $id        = $('<li>').text(brew.id)
  var $container  = $('#breweries');
  var $brewery    = $('<div class="brew">').addClass('text-center');
  var $save       = $('<button class="save">').text("Save Brewery")
// name of brewery will be a link to website
  var $name       = $('<a target="_blank" href="' + brew.website + '">')
      $name.text( brew.name );

  var $descript   = $('<p>').text(brew.description)

// if image is found than get the large image of the brewery and append the image
    if (brew.images){
    var $img       = $('<img id="img">').attr('src', brew.images.medium)
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
      website: $siblings.eq(0)[0].href,
      // img: $siblings.eq(1)[0].currentSrc

      brew_id: $siblings.eq(0)[0].id
      }
    console.log(data)
    $.ajax({
      url: '/savebrew',
      method: 'post',
      data: data,
      success: showSaveBrews
    })
  })
}

function showSaveBrews(){
  var $container = $('#savedbrew')

   $.ajax({
      url: '/savebrew',
      method: 'get'
        }).done(function(brewlist) {
      console.log(brewlist)
      brewlist.forEach(function(brew){
        console.log(brew.id)
        // var $a      = $('a').attr('href', brew.website)
        var $img       = $('<img>').attr('src', brew.img)
        var $delete     =$('<button class="delete">').text("Delete Brewery")
        var $oneresult=$('<div class = "one">')
        var $div= $('<div>').text(brew.name +' '+brew.website).val(brew.id)
        console.log(brew.name, brew.website)
        // console.log($a)
        $oneresult.append($div).append($delete).append($img)
        $container.append($oneresult)

        $delete.click(deleteBrews)
      })
  })

}

// showSaveBrews()

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
