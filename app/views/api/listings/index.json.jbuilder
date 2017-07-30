@listings_filtered.each do |listing|
  json.set! listing.id do
    json.id listing.id
    json.location listing.location
    json.firstname listing.firstname
    json.lastname listing.lastname
    json.picture asset_path(listing.image.url)
    json.about listing.about
    json.languages listing.languages
    json.hosting listing.hosting
  end
end
