class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]
    before_action :set_current_cart
  
  
    # /login route
    def create
      user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        
        render json: user, status: :created
      else
        render json: { errors: ["Invalid username or password"] }, status: :unauthorized
      end
     
    end
  
    # /logout route
    def destroy
      session.delete(:user_id)
      head :no_content
    end

    #define shopping cart for session
  
    def shopping_cart
      if @current_user
              array = []
              price = 0
              @shopping_cart.each do |t|
                  if t.record_id.present?
                      array << Record.find(t.record_id)   
                      price += Record.find(t.record_id).price
                  end
              end
              render json: {shopping_cart: true, records: array, total_price: price, total_items: @shopping_cart.length}
          else
              render json: {shopping_cart: false}
          end    
    end
  
  
    # define purchases to post to cart for current session
    
    def create_purchase
      purchase = Purchase.create(:user_id => params[:user_id], :total => params[:total], :identifier => params[:purchaseId], status: "Pending")
      render json: purchase, serializer: PurchaseWithUserSerializer, status: :created
      Cart.delete_all
    end
  
    
  
    def set_current_cart
          if @current_user
              @shopping_cart = @current_user.shopping_cart
          else
              if session[:shopping_cart]
                  @shopping_cart = Cart.find(session[:shopping_cart])
              else
                  @shopping_cart = Cart.create
                  session[:shopping_cart] = @shopping_cart.id
            end
        end
    end


  end
  