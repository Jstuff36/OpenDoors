@references.each do |reference|
  json.set! reference.id do
    json.comment reference.comment
    json.traveler_firstname reference.traveler.firstname
    json.traveler_lastname reference.traveler.lastname
    json.traveler_pic reference.traveler.picture
  end
end
