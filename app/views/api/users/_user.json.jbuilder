json.extract! user,
  :id,
  :firstname,
  :lastname,
  :email,
  :location,
  :city,
  :country,
  :occupation,
  :about,
  :interest,
  :hosting,
  :languages,
  :zipcode,
  :address,
  :age,
  :sex

json.picture asset_path(user.image.url)
