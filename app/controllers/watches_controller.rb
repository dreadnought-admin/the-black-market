class WatchesController < ApplicationController
skip_before_action :authorized_user

  # GET /watches
  def index
    if params[:user_id]
      watched_records = User.find(params[:user_id]).watched_records
      render json: watched_records
    else
      watches = Watch.all
      render json: watches
    end
  end

  # GET /watches/1
  def show
    render json: @watch
  end

  # POST /watches
  def create
    watch = Watch.new(watch_params)
    if watch.save
      record = watch.record
      render json: record, status: :created
    else
      render json: watch.errors, status: :unprocessable_entity
    end
  end

  def update
    if @watch.update(watch_params)
      render json: @watch
    else
      render json: @watch.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @watch = set_watch
    @watch.destroy
    head :no_content
  end

  private

    def set_watch
      @watch = Watch.find(params[:id])
    end

    def watch_params
      params.require(:watch).permit(:user_id, :record_id)
    end
end