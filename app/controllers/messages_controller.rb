class MessagesController < ApplicationController
  def index
    @messages = Message.all
  end

  def create
    Message.create(message_params)
  end

  private

  def message_params
    params.require(:message).permit(:content, :image)
  end
end
