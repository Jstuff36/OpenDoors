json.extract! @listing,
              :id,
              :firstname,
              :lastname,
              :location,
              :city,
              :about,
              :hosting,
              :languages,
              :country,
              :age,
              :sex,
              :occupation,
              :interest

json.picture asset_path(@listing.image.url)
