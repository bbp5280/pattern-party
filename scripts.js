

const switchTab = (event) => {
  const clickedTab = $(event.target);
  const articleNumber = event.target.id.slice(4)
  const divToShow = $(`.tab-article-${articleNumber}`)

  console.log(divToShow);



  $('.tabs').removeClass('active-tab');
  $('.tabs').addClass( 'inactive-tabs' );
  $('.article-active').addClass('article-inactive')
  $('.article-active').removeClass('article-active')
  $(event.target).addClass( 'active-tab' );
  divToShow.removeClass('article-inactive')
  divToShow.addClass('article-active')

}

$('.tabs').on('click', (event) => switchTab(event));
