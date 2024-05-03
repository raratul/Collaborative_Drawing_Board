class BoardsController < ApplicationController
  def index
    @boards = Board.all
  end

  def create
    user = User.create(nickname: params[:nickname])
    # if user.valid?
    #   board = Board.create(name: "Default Board", user: user)
    #   redirect_to boards_show_path(id: board.id)    
    # else
    #   flash[:error] = "Nickname cannot be blank"
    #   redirect_to root_path
    # end
  end

  def show
    @user = User.find(params[:user_id])
    @board = Board.find(params[:id])
  end
end
