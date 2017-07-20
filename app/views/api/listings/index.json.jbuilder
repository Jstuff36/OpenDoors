json.array! (@listings_filtered) do |listing|
  json.location listing.location
  json.firstname listing.firstname
  json.lastname listing.lastname
end
