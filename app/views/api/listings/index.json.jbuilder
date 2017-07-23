@listings_filtered.each do |listing|
  json.set! listing.id do
    json.id listing.id
    json.location listing.location
    json.firstname listing.firstname
    json.lastname listing.lastname
    json.picture listing.picture
    json.about listing.about
    json.languages listing.languages
    json.hosting listing.hosting
  end
end
