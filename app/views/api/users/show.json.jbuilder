json.extract! @user, :id, :username
json.settings do
    json.loop @user.settings.loop
    json.shuffle @user.settings.shuffle
end