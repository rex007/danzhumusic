json.array!(@bios) do |bio|
  json.extract! bio, :content
  json.url bio_url(bio, format: :json)
end
