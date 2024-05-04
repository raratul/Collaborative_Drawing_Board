class BoardsController < ApplicationController
  def index
    @boards = Board.all
    @user = User.new
  end

  def create
    if params[:nickname].blank? 
      flash[:error] = "Nickname cannot be blank"
      redirect_to root_path
    else
      user = User.create(nickname: params[:nickname])
      if user.valid?
        board = user.boards.create(name: "Default Board")
      else
        flash[:error] = "Failed to create user"
        redirect_to root_path
      end
    end
  end

  def show
    @board = Board.find(params[:id])
  end
end