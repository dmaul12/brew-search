/// show brewery name and info

function renderBrew( brew ) {
  // var $id        = $('<li>').text(brew.id)
  var $container  = $('#breweries');
  var $brewery    = $('<div class="brew">').addClass('text-center').val(brew.id);
  var $save       = $('<button class="save">').text("Save Brewery");
/// name of brewery will be a link to website
  var $name       = $('<a id="blank" target="blank" href="' + brew.website + '">')
      $name.text( brew.name );
  // var $fullname   = $('<h3 id="fullname">').text(brew.name)

  var $descript   = $('<p>').text(brew.description)

/// if image is found than get the large image of the brewery and append the image
    if (brew.images){
    var $img       = $('<img id="img">').attr('src', brew.images.medium)
      }

    $brewery.append( $name, $img, $descript, $save );
    $container.append( $brewery );
  }

/// get breweries by name and established date
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
///on form class "beer" on submit get all brews from function getBrews
  $(function() {
    var $form     = $('.beer')
  $form.submit(getBrews);
  })

/// save the name and website of the brewery
function saveBrews(e){
  $('.save').on('click',function(e){


/// the name, website, description is in the parent and are children of each other
/// using jquery the .eq accesses the name = innerText and website = host. See console.log
/// ajax call to post the saved data
    let $siblings = $(event.target).parent().children();
    let $parent  = $(event.target).parent()
    console.log($siblings)
    // console.log($(event.target).parent())
    let data ={
///used href because some websites are facebook pages so host or hostname only would only lead to facebook.come
      name: $siblings.eq(0)[0].innerText,
      website: $siblings.eq(0)[0].href,
      img: $siblings.eq(1)[0].currentSrc
/// brew_id can use the id and write another function to get all the info of brewery but user already has info on left part of the screen.
      // brew_id: $parent.eq(0).val()
      }
    console.log(data)
///success allows user to see what was saved once the save button is clicked
    $.ajax({
      url: '/savebrew',
      method: 'post',
      data: data,
      success: showSaveBrews
    })
  })
}

/// shows the Name and website of the brewery that was saved
function showSaveBrews(){
  var $container = $('#savedbrew')
  $('#savedbrew').empty()

   $.ajax({
      url: '/savebrew',
      method: 'get'
        }).done(function(brewlist) {
      console.log(brewlist)
      brewlist.forEach(function(brew){
        console.log(brew.id)
          var $name       = $('<a id="dblank" target="_blank" href="' + brew.website + '">')
      $name.text( brew.name);

        // var $img       = $('<img>').attr('src', brew.images.medium)
        var $delete     =$('<button class="delete">').text("Delete Brewery")
        var $oneresult=$('<div class = "one">')
        var $div= $('<div>').text(brew.name).val(brew.id).append($name)


        // console.log(brew.name, brew.website)
        // console.log($img)

        $oneresult.append($div).append($delete)
        $container.append($oneresult)

        $delete.click(deleteBrews)
      })
  })

}

      // showSaveBrews()

/// brew.id value is in showSaveBrews so delete the id value of that brew
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
console.log(id)
  })
}
