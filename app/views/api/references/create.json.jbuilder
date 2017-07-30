json.extract! @reference,
              :comment
json.extract! @reference.traveler,
              :firstname,
              :lastname

json.picture asset_path(@reference.traveler.image.url)
