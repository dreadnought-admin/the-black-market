class RecordsController < ApplicationController
    skip_before_action :authorized_user
    wrap_parameters format:[]


    def index
        render json: Record.all
    end 

    def show
        render json: find_record
    end 

    def create
        record = Record.create(record_params)
        render json: record, status: :created
    end

    def update
        record = find_record
        if record.update(record_params)
            render json: record
        else
            render json: record.errors, status: :unprocessable_entity
        end 
    end 

    def destroy
        record = find_record
        record.destroy!
        head :no_content
    end 

    def user_records
        user = User.find(params[:id])
        records = Record.where("user_id = ?", params[:id])
        render json: records
    end 

    def randomized_records
        render json: Record.limit(5).order("RANDOM()")
    end

    private

    def find_record
        record = Record.find(params[:id])
    end 

    def record_params
        params.permit(
            :user_id, :album_name, :artist_name, :album_cover, 
            :condition, :release_date, :release_description,
            :record_labels, :price, :spotify_link
        )
    end 

end 