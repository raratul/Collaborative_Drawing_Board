# class BoardsController < ApplicationController
#   def index
#     @boards = Board.all
#   end

#   def create
#     user = User.create(nickname: params[:nickname])
#     # if user.valid?
#     #   board = Board.create(name: "Default Board", user: user)
#     #   redirect_to boards_show_path(id: board.id)    
#     # else
#     #   flash[:error] = "Nickname cannot be blank"
#     #   redirect_to root_path
#     # end
#   end

#   def show
#     @user = User.find(params[:user_id])
#     @board = Board.find(params[:id])
#   end
# end

class BoardsController < ApplicationController
  def index
    @boards = Board.all
    @user = User.new
  end

  def create
    if params[:nickname].blank? # Check if nickname is blank
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
