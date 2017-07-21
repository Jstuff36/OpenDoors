json.array! (@listings_filtered) do |listing|
  json.location listing.location
  json.firstname listing.firstname
  json.lastname listing.lastname
  json.picture listing.picture
  json.about listing.about
end
