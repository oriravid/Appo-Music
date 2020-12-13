class Api::UserSavesController < ApplicationController

    def create
        @current_user = current_user()
        if @current_user
            @user_save = UserSave.new(
                user_id: @current_user.id, 
                track_id: params[:track_id]
            )

            if @user_save.save!
                render json: @user_save.track_id
            else
                render json: @user_save.errors.full_messages, status: 422
            end
        else
            render json: ['Must be logged in'], status: 403
        end
    end

    def destroy
        @current_user = current_user()

        if @current_user 
            @user_save = UserSave.find_by(
                user_id: @current_user.id, 
                track_id: params[:track_id]
            )

            if @user_save
                if @user_save.destroy
                    render json: @user_save.track_id
                else
                    render json: @user_save.errors.full_messages, status: 422
                end
            else
                render json: ['Track not saved'], status: 422
            end
        else
            render json: ['Must be logged in'], status: 403
        end
    end
end
