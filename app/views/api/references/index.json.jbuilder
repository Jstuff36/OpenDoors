@references.each do |reference|
  json.set! reference.id do
    json.user_id reference.user_id
    json.comment reference.comment
    json.traveler_firstname reference.traveler.firstname
    json.traveler_lastname reference.traveler.lastname
    json.traveler_pic asset_path(reference.traveler.image.url)
  end
end
