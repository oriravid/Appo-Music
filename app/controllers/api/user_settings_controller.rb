class Api::UserSettingsController < ApplicationController
  def update
    current_user = current_user()
        if current_user
            user_settings = UserSettings.find_by(user_id: @current_user.id)
            
            if params[:setting] == "shuffle"
                user_settings.toggle!(:shuffle)
            elsif params[:setting] == "loop"
                user_settings.toggle!(:loop)
            end

            render json: user_settings
        else
            render json: ['Must be logged in'], status: 403
        end
    end
end
