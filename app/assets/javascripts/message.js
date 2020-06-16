$(function(){
  function buildHTML(message){
    if (message.image){
      let html = `<div class="message-list">
                    <div class="message-lists-header">
                      <div class="message-lists-name">
                        ${message.user_name}
                      </div>
                      <div class="message-lists-datetime">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="messages">
                      <p class="messages__content">
                        ${message.content}
                      </p>
                      <img class="Message__image" src="${message.image}">
                    </div>
                  </div>`
      return html;
    } else {
      let html = `<div class="message-list">
                    <div class="message-lists-header">
                      <div class="message-lists-name">
                        ${message.user_name}
                      </div>
                      <div class="message-lists-datetime">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="messages">
                      <p class="messages__content">
                        ${message.content}
                      </p>
                    </div>
                  </div>`
      return html;
    };
  }

  $('.new-message').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',  
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.main-chat__message-list').append(html);
      $('.main-chat__message-list').animate({ scrollTop: $('.main-chat__message-list')[0].scrollHeight});
      $('.new-message')[0].reset(); 
      $('.submit-btn').attr('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
  })
});