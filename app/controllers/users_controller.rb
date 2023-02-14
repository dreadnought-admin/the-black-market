class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:create]
    wrap_parameters format: []

    def index
      render json: User.all
    end 
  
    # /me route
    def show
      render json: @current_user, serializer: UserWithCommentsAndPurchasesSerializer,
      status: :ok
    end
  
    # /signup route
    def create
      user = User.create!(user_params)
        session[:user_id] = user.id 
        render json: user, status: :created
    end
  
    def update_profile
        @current_user.update!(user_params)
        render json: @current_user
    end
  
    def destroy
      @current_user.destroy
      head :no_content
    end

     
  private 

  def user_params
      params.permit(:username, :email, :password, :twitter_handle, :instagram_handle, :paypal)
  end 
  
end
