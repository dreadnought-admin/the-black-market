class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:create]
    wrap_parameters format: []

    def index
      render json: User.all
    end 
  
    def show
      @current_user = User.find_by(id: session[:user_id])
      render json: @current_user,
      status: :ok
    end
  
    # /signup route
    def create
      user = User.create!(user_params)
        session[:user_id] = user.id 
        render json: user, status: :created
    end

    def update
      @current_user = User.find_by(id: session[:user_id])
      if @current_user.update(user_params)
          render json: @current_user
      else 
          render json: @current_user.errors, status: :unprocessable_entity
      end 
  end 

  
    # def update_profile
    #     @current_user.update!(user_params)
    #     render json: @current_user
    # end
  
    def destroy
      @current_user.destroy
      head :no_content
    end

     
  private 

  def user_params
      params.permit(:username, :bio, :country, :email, :password, :twitter_handle, :instagram_handle, :paypal_handle, :avatar)
  end 
  
end

