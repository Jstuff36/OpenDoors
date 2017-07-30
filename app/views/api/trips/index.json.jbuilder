@trips.each do |trip|
  json.set! trip.id do
    json.id trip.id
    json.host_firstname trip.host.firstname
    json.host_lastname trip.host.lastname
    json.host_pic asset_path(trip.host.image.url)
    json.host_id trip.host_id
    json.traveler_firstname trip.traveler.firstname
    json.traveler_lastname trip.traveler.lastname
    json.traveler_pic asset_path(trip.traveler.image.url)
    json.traveler_id trip.user_id
    json.dates trip.dates
    json.status trip.status
    json.message trip.message
  end
end
